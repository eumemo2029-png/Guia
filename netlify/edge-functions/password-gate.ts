import type { Context, Config } from '@netlify/edge-functions'

async function makeToken(password: string): Promise<string> {
  const enc = new TextEncoder()
  const hash = await crypto.subtle.digest('SHA-256', enc.encode(`agrorural:${password}`))
  return btoa(String.fromCharCode(...new Uint8Array(hash)))
}

function loginPage(redirect: string, error: boolean): Response {
  const safeRedirect = redirect.replace(/"/g, '&quot;')
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Acesso Restrito — Agrorural</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0 }
  body { font-family: 'DM Sans', sans-serif; background: #eef3ee; min-height: 100vh; display: flex; align-items: center; justify-content: center }
  .card { background: #fff; border-radius: 18px; box-shadow: 0 4px 28px rgba(0,0,0,.09); padding: 52px 44px; width: 100%; max-width: 420px; text-align: center }
  img { height: 54px; margin-bottom: 28px }
  h1 { font-size: 21px; font-weight: 600; color: #1a2e1a; margin-bottom: 8px }
  .sub { font-size: 14px; color: #6b7280; margin-bottom: 32px; line-height: 1.5 }
  input[type=password] { width: 100%; padding: 14px 16px; border: 1.5px solid #d1d5db; border-radius: 10px; font-size: 15px; font-family: inherit; outline: none; transition: border-color .2s }
  input[type=password]:focus { border-color: #2d6a2d; box-shadow: 0 0 0 3px rgba(45,106,45,.10) }
  button { width: 100%; margin-top: 16px; padding: 14px; background: #2d6a2d; color: #fff; border: none; border-radius: 10px; font-size: 15px; font-weight: 600; font-family: inherit; cursor: pointer; transition: background .2s }
  button:hover { background: #245424 }
  .error { color: #dc2626; font-size: 13px; margin-top: 16px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 11px }
</style>
</head>
<body>
<div class="card">
  <img src="https://media.base44.com/images/public/6a1c72122a9e0b5b111189c7/57c9bda0f_agrorural.png" alt="Agrorural">
  <h1>Acesso Restrito</h1>
  <p class="sub">Digite a senha para acessar o Guia de Agrot&oacute;xicos</p>
  <form method="POST" action="/__auth">
    <input type="hidden" name="redirect" value="${safeRedirect}">
    <input type="password" name="password" placeholder="Senha de acesso" autofocus required>
    ${error ? '<p class="error">Senha incorreta. Tente novamente.</p>' : ''}
    <button type="submit">Entrar</button>
  </form>
</div>
</body>
</html>`

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}

export default async (req: Request, context: Context) => {
  const url = new URL(req.url)
  const sitePassword = Netlify.env.get('SITE_PASSWORD') || 'agrorural2025'

  // Handle login form submission
  if (url.pathname === '/__auth') {
    if (req.method === 'POST') {
      const form = await req.formData()
      const submitted = form.get('password') as string
      const redirect = (form.get('redirect') as string) || '/'

      if (submitted === sitePassword) {
        const token = await makeToken(sitePassword)
        context.cookies.set({
          name: 'site_auth',
          value: token,
          path: '/',
          httpOnly: true,
          secure: true,
          sameSite: 'Lax',
          maxAge: 60 * 60 * 24 * 30, // 30 days
        })
        return new Response(null, { status: 302, headers: { Location: redirect } })
      }

      return loginPage(redirect, true)
    }

    return new Response(null, { status: 302, headers: { Location: '/' } })
  }

  // Check auth cookie
  const token = context.cookies.get('site_auth')
  const expected = await makeToken(sitePassword)

  if (token === expected) {
    return // Authenticated — pass through to the site
  }

  return loginPage(url.pathname, false)
}

export const config: Config = {
  path: '/*',
}
