import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Johan Hanses' }, { name: 'description', content: 'Home of Johan Hanses' }]
}

export default function Home() {
  return (
    <div className="h-full max-w-screen-md mx-auto">
      <h1 className="text-3xl font-serif mb-4">Johan Hanses</h1>

      <p>Hi there!</p>
      <p>I am a Software Engineer working with all things with JavaScript/TypeScript on both the server and browser.</p>
    </div>
  )
}
