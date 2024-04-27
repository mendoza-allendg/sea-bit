export const user_infos = [
  {
    firstname: 'Kim Allen Joseph',
    lastname: 'Lazo',
    email: 'kajlazo@pasoketits.com',
    mobile: '09064595820',
    password: "kapagako'ynagiisamadalasakongnagbabate",
  },
]

export function maskPassword(password: string) {
  const truncatedPassword = password.slice(0, 15)
  return '•'.repeat(truncatedPassword.length)
}

export const fullname = `${user_infos[0].firstname} ${user_infos[0].lastname}`

export const UPPER_PROFILE_COMPONENTS = [
  {
    name: 'Name',
    info: fullname,
    type: 'name',
  },
  {
    name: 'Email',
    info: user_infos[0].email,
    type: 'email',
  },
  {
    name: 'Phone Number',
    info: user_infos[0].mobile,
    type: 'number',
  },
  {
    name: 'Password',
    info: maskPassword(user_infos[0].password),
    type: 'password',
  },
]
