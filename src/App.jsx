import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import UsersLogin from './pages/users/Login'
import UsersRegistro from './pages/users/Registro'
import UsersPerfil from './pages/users/Perfil'
import UsersRecuperar from './pages/users/RecuperarPassword'
import UsersRestablecer from './pages/users/RestablecerPassword'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={<UsersLogin />}
          />
          <Route
            path='/registro'
            element={<UsersRegistro />}
          />
          <Route
            path='/perfil'
            element={<UsersPerfil />}
          />
          <Route
            path='/recuperar-password'
            element={<UsersRecuperar />}
          />
          <Route
            path='/restablecer-password'
            element={<UsersRestablecer />}
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
