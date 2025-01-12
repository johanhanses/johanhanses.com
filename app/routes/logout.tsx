import { logout } from '~/session.server'
import type { Route } from './+types/logout'

export async function action({ request }: Route.LoaderArgs) {
  return logout(request)
}
