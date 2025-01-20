import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import type { Route } from './+types/root'
import stylesheet from './app.css?url'
import { Header } from './components/header'
import { getUserSession } from './session.server'

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Lora:ital,wght@0,400..700;1,400..700&display=swap',
  },
  { rel: 'stylesheet', href: stylesheet },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (window.localStorage.getItem('theme') === 'dark') {
              document.documentElement.classList.add('dark');
            }
          `,
          }}
        />

        <Meta />
        <Links />
      </head>

      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export const loader = async ({ request }: Route.LoaderArgs) => {
  return (await getUserSession(request)).data.userId !== undefined
}

export default function App({ loaderData }: Route.ComponentProps) {
  const isLoggedIn = loaderData

  return (
    <div className="min-h-screen bg-[#eff1f5] pb-6 font-sans text-[#4c4f69] dark:bg-[#24273a] dark:text-[#cad3f5]">
      <Header isLoggedIn={isLoggedIn} />

      <main className="mx-auto mt-16 max-w-screen-md px-6 lg:px-4">
        <Outlet />
      </main>
    </div>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>

      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
