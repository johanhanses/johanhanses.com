import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Johan Hanses' }, { name: 'description', content: 'Home of Johan Hanses' }]
}

export default function Home() {
  return (
    <main className="h-screen dark:bg-[#24273a] dark:text-[#cad3f5] text-[#4c4f69] bg-[#eff1f5] flex justify-center items-center">
      <h1 className="text-xl">Hejsan</h1>
    </main>
  )
}
