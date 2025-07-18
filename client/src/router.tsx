import { BrowserRouter, Route, Routes } from 'react-router'
import AuthLayout from './layouts/AuthLayout'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
