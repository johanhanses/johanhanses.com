import { Welcome } from '../welcome/welcome'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: 'Hello from Berit' }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome message={loaderData.message} />
}
