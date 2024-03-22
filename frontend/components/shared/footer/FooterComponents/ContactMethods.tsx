import Link from 'next/link'

const COMPANY_CONTACT_METHODS = [
  {
    name: 'Customer Support',
    link: '#',
  },
  {
    name: 'Service Guarantee',
    link: '#',
  },
  {
    name: 'Website Feedback',
    link: '#',
  },
]

export const CompanyContactMethods = () => {
  return (
    <ul>
      {COMPANY_CONTACT_METHODS.map((contact, i) => (
        <li className="list-none pb-1" key={i}>
          <Link href={contact.link} color="foreground" className="text-xs">
            {contact.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
