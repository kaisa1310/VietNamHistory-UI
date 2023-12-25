import { MainLayout } from '~/layouts'
import { routeType } from '~/models'
import { privateRoutes, publicRoutes, notFoundRoute } from '~/routes'
import { getAccessTokenFromLocalStorage } from '~/utils'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  const isLoggedIn = getAccessTokenFromLocalStorage

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((item: routeType, index: number) => {
            let Layout: React.ComponentType<any> = MainLayout
            if (item.layout) {
              Layout = item.layout as React.ComponentType<any>
            }

            const Page = item.element
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}

          {privateRoutes.map((item: routeType, index: number) => {
            const Page = item.element
            const Layout = item.layout || MainLayout
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  isLoggedIn ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <Navigate to="/sigin" replace />
                  )
                }
              />
            )
          })}

          <Route path="*" element={<notFoundRoute.element />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
