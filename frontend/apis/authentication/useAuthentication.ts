import { useQuery } from '@tanstack/react-query'
import { useApi } from '../hooks'

type User = {
  id: BigInteger
  email: string
}

export const useAuthentication = () => {
  const { fetchData } = useApi()

  const { data, isFetching, refetch } = useQuery<User>({
    queryKey: ['stream-hydrate-users'],
    queryFn: () => fetchData(),
    staleTime: 5 * 1000,
  })

  return {
    data,
    isLoading: isFetching,
    refetch,
  }
}
