import { useQueryClient } from '@tanstack/react-query'

export default function AdminNavigation() {
  const queryClient = useQueryClient()
  const logout = () => {
    queryClient.invalidateQueries({ queryKey: ['user'] })
    localStorage.removeItem('AUTH_TOKEN')
  }
  return (
    <button
      className="bg-lime-500 hover:bg-lime-600 p-2 text-slate-800 uppercase font-black text-xs rounded-lg cursor-pointer"
      onClick={logout}
    >
      Cerrar Sesión
    </button>
  )
}
