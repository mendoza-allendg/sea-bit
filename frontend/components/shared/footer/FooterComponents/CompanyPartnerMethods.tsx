import Link from 'next/link'

const COMPANY_PARTNER_METHODS = [
  {
    name: 'Partner Portal',
    link: '#',
  },
  {
    name: 'Affiliate Program',
    link: '#',
  },
]

export const CompanyPartnerMethods = () => {
  return (
    <ul>
      {COMPANY_PARTNER_METHODS.map((partner, i) => (
        <li className="list-none pb-1" key={i}>
          <Link href={partner.link} color="foreground" className="text-xs">
            {partner.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
