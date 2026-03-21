/**
 * Prerender — gera HTML estático de cada rota usando Puppeteer.
 * Puppeteer já é devDependency do projeto (usado no og script).
 *
 * Fluxo:
 *  1. Sobe um servidor HTTP simples servindo /dist
 *  2. Puppeteer visita cada rota, aguarda o React renderizar
 *  3. Salva o HTML gerado em dist/<rota>/index.html
 *  4. Derruba o servidor
 */

import puppeteer from 'puppeteer'
import { createServer } from 'http'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, extname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const DIST    = resolve(__dirname, '../dist')
const PORT    = 5174
const ROUTES  = ['/', '/codigo-de-conduta']

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
  '.webp': 'image/webp',
  '.json': 'application/json',
  '.txt':  'text/plain',
  '.xml':  'application/xml',
}

function startServer() {
  return new Promise(resolvePromise => {
    const server = createServer((req, res) => {
      const url  = req.url.split('?')[0]
      const ext  = extname(url)
      // Rotas sem extensão → index.html (SPA fallback)
      const file = ext ? join(DIST, url) : join(DIST, 'index.html')

      try {
        const content = readFileSync(file)
        // Sem extensão = rota SPA servida como index.html
        const contentType = ext ? (MIME[ext] || 'application/octet-stream') : 'text/html; charset=utf-8'
        res.writeHead(200, { 'Content-Type': contentType })
        res.end(content)
      } catch {
        res.writeHead(404)
        res.end()
      }
    })

    server.listen(PORT, '127.0.0.1', () => {
      console.log(`  Servidor local: http://127.0.0.1:${PORT}`)
      resolvePromise(server)
    })
  })
}

async function prerender() {
  console.log('\n🔧 Prerender iniciando...\n')

  const server  = await startServer()
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  for (const route of ROUTES) {
    console.log(`  → Renderizando ${route}`)
    const page = await browser.newPage()

    await page.goto(`http://127.0.0.1:${PORT}${route}`, {
      waitUntil: 'domcontentloaded',
      timeout: 15_000,
    })
    // Aguarda o React terminar de montar o conteúdo
    await new Promise(r => setTimeout(r, 2000))

    // Garante que o React terminou de montar o conteúdo
    await page.waitForSelector('#root > *', { timeout: 10_000 })

    const html = await page.content()
    await page.close()

    if (route === '/') {
      writeFileSync(join(DIST, 'index.html'), html)
      console.log(`  ✓ dist/index.html`)
    } else {
      const dir = join(DIST, route)
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
      writeFileSync(join(dir, 'index.html'), html)
      console.log(`  ✓ dist${route}/index.html`)
    }
  }

  await browser.close()
  server.close()
  console.log('\n✨ Prerender concluído!\n')
  process.exit(0)
}

prerender().catch(err => {
  console.error('Erro no prerender:', err)
  process.exit(1)
})
