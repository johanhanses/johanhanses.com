import { requireUserId } from '~/session.server'
import type { Route } from './+types/cover-letter'

export async function loader({ request }: Route.LoaderArgs) {
  const userId = await requireUserId(request)
  return { userId }
}

export default function CVPage({ loaderData }: Route.ComponentProps) {
  const { userId } = loaderData

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-8 font-serif text-2xl">CV</h1>
      <p className="">Welcome, {userId}! This is a another protected page that only authenticated users can see.</p>
    </div>
  )
}
