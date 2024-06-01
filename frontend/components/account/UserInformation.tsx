export interface UserProfile {
  firstname: string
  lastname: string
  email: string
  mobile: string
  password: string
  preferredName: string
  governmentId: string
  address: string
  emergencyContact: string
}

export const userProfiles: UserProfile[] = [
  {
    firstname: 'Kim Allen Joseph',
    lastname: 'Lazo',
    email: 'kjalazo@pasoketits.com',
    mobile: '09064595820',
    password: 'kapagakoynagiisamadalasakongnagbabate',
    preferredName: '',
    governmentId: 'Provided',
    address: '',
    emergencyContact: '',
  },
]

export const maskPassword = (password: string) => {
  const truncatedPassword = password.slice(0, 15)
  return '•'.repeat(truncatedPassword.length)
}

export const upperProfileComponents = userProfiles.map((user) => ({
  name: `${user.firstname} ${user.lastname}`,
  email: user.email,
  mobile: user.mobile,
  password: maskPassword(user.password),
  preferredName: user.preferredName || 'Not provided',
  governmentId: user.governmentId || 'Not provided',
  address: user.address || 'Not provided',
  emergencyContact: user.emergencyContact || 'Not provided',
}))
