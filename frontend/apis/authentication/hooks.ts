import { useQuery } from '@tanstack/react-query'

export type User = {
  email: string | undefined
  password: string | undefined
}

type SignUpRequest = {
  user: User
}

const postData = async (params: User) => {
  const request: SignUpRequest = {
    user: params,
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(request),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }
  const response = await fetch('http://localhost:3001/api/signup', options)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error)
  }

  return data
}

export const useRegistrationApi = (params: User) => {
  return useQuery({
    queryKey: ['signup', params],
    queryFn: () => postData(params),
    staleTime: 5 * 1000,
    enabled: false,
    retry: false,
  })
}
