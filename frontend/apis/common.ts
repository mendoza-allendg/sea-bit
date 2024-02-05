import { useQuery } from '@tanstack/react-query'

type User = {
  id: BigInteger
  email: string
}

export const useApiQuery = () => {
  const postData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
  }

  return {
    postData,
  }
}

export const useApi = () => {
  const { postData } = useApiQuery()

  const { data, isFetching, refetch } = useQuery<User>({
    queryKey: ['user-registration'],
    queryFn: () => postData(),
    staleTime: 5 * 1000,
    enabled: false,
  })

  return {
    data,
    isLoading: isFetching,
    refetch,
  }
}
