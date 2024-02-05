import { useMutation } from '@tanstack/react-query'

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
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/signup`,
    options,
  )
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error)
  }

  return data
}

export const useRegistrationApi = () => {
  return useMutation({
    mutationKey: ['signup'],
    mutationFn: (request: User) => postData(request),
  })
}
