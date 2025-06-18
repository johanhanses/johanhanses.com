import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'johanhanses.com' }, { name: 'description', content: 'Home of Johan Hanses' }]
}

// export function loader({ context }: Route.LoaderArgs) {
//   return { message: 'Hello from Berit' }
// }

export default function Home({ loaderData }: Route.ComponentProps) {
  // console.log(loaderData)

  return (
    <main className="flex items-center justify-center h-screen font-medium">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-serif">Johan Hanses</h1>

        <p>
          <a
            href="https://www.linkedin.com/in/johanhanses"
            target="_blank"
            className="hover:text-[#528bff] hover:underline"
          >
            Linkedin
          </a>
        </p>

        <p>
          <a href="https://github.com/johanhanses" target="_blank" className="hover:text-[#528bff] hover:underline">
            GitHub
          </a>
        </p>
      </div>
    </main>
  )
}
