import { BrowserRouter, Route, Routes } from 'react-router'
import AppLayout from './layouts/AppLayout'
import AuthLayout from './layouts/AuthLayout'
import LinkTreeView from './views/LinkTreeView'
import LoginView from './views/LoginView'
import ProfileView from './views/ProfileView'
import RegisterView from './views/RegisterView'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
        </Route>
        <Route path={'/admin'} element={<AppLayout />}>
          <Route index={true} element={<LinkTreeView />} />
          <Route path="profile" element={<ProfileView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
