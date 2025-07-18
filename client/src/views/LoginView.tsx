import { Link } from 'react-router'

export default function LoginView() {
  return (
    <>
      <h1 className="text-4xl text-white font-bold">Iniciar sesión</h1>
      <nav className="mt-10">
        <Link
          to="/auth/register"
          className="text-center text-white text-lg block hover:text-gray-400"
        >
          ¿No tienes cuenta? Crea una aquí
        </Link>
      </nav>
    </>
  )
}
