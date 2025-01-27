import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './pages/login'
import Registro from './pages/registro'
import Home from './pages/home'
import Integrantes from './pages/integrantes'
import RecuperarPassword from './pages/recuperar-password'
import PageNotFound from './pages/PageNotFound'
import { useAuth } from './context'

const App = () => {
  const { isLoggedIn } = useAuth()

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {isLoggedIn ? (
            <Route
              path='/'
              element={<Home />}
            />
          ) : (
            <Route
              path='/'
              element={<Login />}
            />
          )}

          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/registro'
            element={<Registro />}
          />
          <Route
            path='/integrantes/:id'
            element={<Integrantes />}
          />
          <Route
            path='/recuperar-password'
            element={<RecuperarPassword />}
          />

          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
