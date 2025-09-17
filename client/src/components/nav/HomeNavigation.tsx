import { Link } from 'react-router'

export default function HomeNavigation() {
  return (
    <>
      <Link
        to={'/auth/login'}
        className="text-white p-2 uppercase font-black text-xs cursor-pointer hover:text-gray-300"
      >
        Iniciar Sesión
      </Link>
      <Link
        to={'/auth/register'}
        className="bg-lime-500 hover:bg-lime-600 p-2 text-slate-800 uppercase font-black text-xs rounded-lg cursor-pointer ml-12"
      >
        Registrate
      </Link>
    </>
  )
}
