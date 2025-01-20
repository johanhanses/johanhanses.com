import { requireUserId } from '~/session.server'
import type { Route } from './+types/cover-letter'

export async function loader({ request }: Route.LoaderArgs) {
  const userId = await requireUserId(request)
  return { userId }
}

export default function CoverLetterPage({ loaderData }: Route.ComponentProps) {
  const { userId } = loaderData

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-4 text-2xl font-bold">Cover Letter</h1>
      <p className="text-gray-600">
        Welcome, {userId}! This is a protected page that only authenticated users can see.
      </p>
    </div>
  )
}
