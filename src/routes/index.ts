import config from '~/config'
import { LoginLayout } from '~/layouts'
import { routeType } from '~/models'
import Home from '~/pages/Home'
import Learn from '~/pages/Learn'
import Login from '~/pages/Login'
import MyCourses from '~/pages/MyCourses'
import NotFound from '~/pages/NotFound'
import Profile from '~/pages/Profile'

export const publicRoutes: routeType[] = [
  { path: config.routes.home, element: Home },
  { path: config.routes.sigin, element: Login, layout: LoginLayout }
]

export const privateRoutes: routeType[] = [
  { path: config.routes.learn, element: Learn },
  { path: config.routes.profile, element: Profile },
  { path: config.routes.myCourse, element: MyCourses }
]

export const notFoundRoute: routeType = { path: '*', element: NotFound }
