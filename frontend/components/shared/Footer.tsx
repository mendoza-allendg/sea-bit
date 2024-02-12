import { Link } from '@nextui-org/react'
import Image from 'next/image'
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

const COMPANY_INFOS = [
  {
    name: 'About Us',
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

const PAYMENT_METHOD_LOGOS = [
  {
    text: 'Visa',
    src: '/payment_logos/visa.png',
  },
  {
    text: 'Mastercard',
    src: '/payment_logos/mastercard.png',
  },
  {
    text: 'G-Cash',
    src: '/payment_logos/Gcash.png',
  },
  {
    text: 'GrabPay',
    src: '/payment_logos/GrabPay.png',
  },
  {
    text: 'PayMaya',
    src: '/payment_logos/PayMaya.png',
  },
  {
    text: 'BPI',
    src: '/payment_logos/BPI.png',
  },
  {
    text: 'Security Bank',
    src: '/payment_logos/SecurityBank.png',
  },
  {
    text: 'AUB',
    src: '/payment_logos/AUB.png',
  },
  {
    text: 'BillEase',
    src: '/payment_logos/BillEase.png',
  },
  {
    text: 'CoinsPH',
    src: '/payment_logos/CoinsPH.png',
  },
  {
    text: '7-11',
    src: '/payment_logos/7_eleven.png',
  },
  {
    text: 'Cebuana Lhuiller',
    src: '/payment_logos/CebuanaLL.png',
  },
  {
    text: 'M Lhuiller',
    src: '/payment_logos/M_LL.png',
  },
  {
    text: 'Landbank',
    src: '/payment_logos/Landbank.jpg',
  },
]

export const Footer = () => {
  return (
    <div className="static bottom-0 flex h-auto w-full justify-center border-t-1 border-solid border-gray-300 bg-gray-100">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="container flex w-full flex-wrap items-start justify-center px-6 py-7 lg:px-10 xl:px-20 2xl:px-14">
          <div className="mx-auto flex max-w-md flex-1 flex-shrink-0 flex-nowrap justify-center text-xs">
            <div className="flex flex-col justify-start p-4">
              <span className="pb-1.5 text-base font-bold">Contact Us</span>
              <ul>
                {COMPANY_CONTACT_METHODS.map((contact, i) => (
                  <li className="list-none pb-1" key={i}>
                    <Link
                      href={contact.link}
                      color="foreground"
                      className="text-xs"
                    >
                      {contact.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-start p-4">
              <span className="pb-1.5 text-base font-bold">Company</span>
              <ul>
                {COMPANY_INFOS.map((info, i) => (
                  <li className="list-none pb-1" key={i}>
                    <Link
                      href={info.link}
                      color="foreground"
                      className="text-xs"
                    >
                      {info.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-start p-4">
              <span className="pb-1.5 text-base font-bold">
                Partner With Us
              </span>
              <ul>
                {COMPANY_PARTNER_METHODS.map((partner, i) => (
                  <li className="list-none pb-1" key={i}>
                    <Link
                      href={partner.link}
                      color="foreground"
                      className="text-xs"
                    >
                      {partner.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto flex max-w-md flex-1 flex-shrink flex-col justify-center p-4 text-sm text-gray-500">
            <div className="pb-1.5">Payment Methods</div>
            <div className="flex min-w-56 flex-wrap justify-center">
              {PAYMENT_METHOD_LOGOS.map((pmeth, i) => (
                <Image
                  className="mt-1 w-14 rounded-lg border"
                  key={i}
                  src={pmeth.src}
                  alt={pmeth.text}
                  width={500}
                  height={500}
                />
              ))}
            </div>
          </div>
        </div>
        <footer className="flex w-full items-center justify-center bg-gray-100 p-3 text-sm text-slate-500">
          Copyright © 2024 DiveNGo.com All rights reserved
        </footer>
      </div>
    </div>
  )
}
