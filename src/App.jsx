import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './pages/login'
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
          <Route
            path='/'
            element={<Login />}
          />
          <Route
            path='/home'
            element={<Home />}
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
