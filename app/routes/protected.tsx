import { requireUserId } from '~/session.server'
import type { Route } from './+types/protected'

export async function loader({ request }: Route.LoaderArgs) {
  const userId = await requireUserId(request)
  return { userId }
}

export default function ProtectedPage({ loaderData }: Route.ComponentProps) {
  const { userId } = loaderData

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Protected Page</h1>
      <p className="text-gray-600">
        Welcome, {userId}! This is a protected page that only authenticated users can see.
      </p>
    </div>
  )
}
