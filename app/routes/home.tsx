import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: 'Hello from Berit' }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <main className="flex items-center justify-center h-screen font-medium">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-serif">Johan Hanses</h1>

        <p>
          <a
            href="https://https://www.linkedin.com/in/johanhanses"
            target="_blank"
            className="hover:text-[#528bff] hover:underline"
          >
            Linkedin
          </a>
        </p>

        <p>
          <a
            href="https://https://github.com/johanhanses"
            target="_blank"
            className="hover:text-[#528bff] hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </main>
  )
}
