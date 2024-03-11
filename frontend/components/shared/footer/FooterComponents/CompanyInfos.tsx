import Link from 'next/link'

const COMPANY_INFOS = [
  {
    name: 'About Our Company',
    link: '#',
  },
  {
    name: 'Terms and Condition',
    link: '#',
  },
  {
    name: 'Privacy and Cookies',
    link: '#',
  },
]

export const CompanyInfos = () => {
  return (
    <ul>
      {COMPANY_INFOS.map((info, i) => (
        <li className="list-none pb-1" key={i}>
          <Link href={info.link} color="foreground" className="text-xs">
            {info.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
