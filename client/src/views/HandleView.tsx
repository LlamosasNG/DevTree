import { useQuery } from '@tanstack/react-query'
import { Navigate, useParams } from 'react-router'
import { getUserByHandle } from '../api/DevTreeAPI'
import HandleData from '../components/HandleData'

export default function HandleView() {
  const params = useParams()
  const handle = params.handle!

  const { data, error, isLoading } = useQuery({
    queryKey: ['handle', handle],
    queryFn: () => getUserByHandle(handle),
    retry: 1,
  })
  
  if (isLoading)
    return <p className="text-white text-2xl text-center">Cargando...</p>
  if (error) return <Navigate to={'/404'} />
  if (data) return <HandleData data={data} />
}
