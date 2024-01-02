import config from '~/config'
import { LoginLayout } from '~/layouts'
import { routeType } from '~/models'
import Blog from '~/pages/Blog'
import Home from '~/pages/Home'
import Learn from '~/pages/Learn'
import LearningPath from '~/pages/LearningPath'
import Login from '~/pages/Login'
import MyCourses from '~/pages/MyCourses'
import NotFound from '~/pages/NotFound'
import Profile from '~/pages/Profile'
import Rank from '~/pages/Rank'

export const publicRoutes: routeType[] = [
  { path: config.routes.home, element: Home },
  { path: config.routes.learningPath, element: LearningPath },
  { path: config.routes.blog, element: Blog },
  { path: config.routes.rank, element: Rank },
  { path: config.routes.sigin, element: Login, layout: LoginLayout }
]

export const privateRoutes: routeType[] = [
  { path: config.routes.learn, element: Learn },
  { path: config.routes.profile, element: Profile },
  { path: config.routes.myCourse, element: MyCourses }
]

export const notFoundRoute: routeType = { path: '*', element: NotFound }
