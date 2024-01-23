import { Image, Link } from '@nextui-org/react'

const contactMethods = [
  {
    id: 0,
    name: 'Customer Support',
    link: '#',
  },
  {
    id: 1,
    name: 'Service Guarantee',
    link: '#',
  },
  {
    id: 2,
    name: 'Website Feedback',
    link: '#',
  },
]

const companyInfo = [
  {
    id: 0,
    name: 'About Us',
    link: '#',
  },
  {
    id: 1,
    name: 'Terms and Condition',
    link: '#',
  },
  {
    id: 2,
    name: 'Privacy and Cookies',
    link: '#',
  },
]

const partnerMethods = [
  {
    id: 0,
    name: 'Partner Portal',
    link: '#',
  },
  {
    id: 1,
    name: 'Affiliate Program',
    link: '#',
  },
]

const paymentImage = [
  {
    id: 0,
    text: 'Visa',
    src: '/payment_logos/visa.png',
  },
  {
    id: 1,
    text: 'Mastercard',
    src: '/payment_logos/mastercard.png',
  },
  {
    id: 2,
    text: 'G-Cash',
    src: '/payment_logos/Gcash.png',
  },
  {
    id: 3,
    text: 'GrabPay',
    src: '/payment_logos/GrabPay.png',
  },
  {
    id: 4,
    text: 'PayMaya',
    src: '/payment_logos/PayMaya.png',
  },
  {
    id: 5,
    text: 'BPI',
    src: '/payment_logos/BPI.png',
  },
  {
    id: 6,
    text: 'Security Bank',
    src: '/payment_logos/SecurityBank.png',
  },
  {
    id: 7,
    text: 'AUB',
    src: '/payment_logos/AUB.png',
  },
  {
    id: 8,
    text: 'BillEase',
    src: '/payment_logos/BillEase.png',
  },
  {
    id: 9,
    text: 'CoinsPH',
    src: '/payment_logos/CoinsPH.png',
  },
  {
    id: 10,
    text: '7-11',
    src: '/payment_logos/7_eleven.png',
  },
  {
    id: 11,
    text: 'Cebuana Lhuiller',
    src: '/payment_logos/CebuanaLL.png',
  },
  {
    id: 12,
    text: 'M Lhuiller',
    src: '/payment_logos/M_LL.png',
  },
  {
    id: 13,
    text: 'Landbank',
    src: '/payment_logos/Landbank.jpg',
  },
]

export const Footer = () => {
  return (
    <div className="flex justify-center bg-gray-100 h-auto static bottom-0 border-t-1 border-solid border-gray-300 w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex-wrap container px-6 lg:px-20 xl:px-35 2xl:px-14 items-start flex justify-center w-full py-7">
          <div className="flex flex-nowrap flex-1 justify-center text-xs mx-auto flex-shrink-0 max-w-md">
            <div className="flex flex-col justify-start p-4">
              <span className="font-bold text-base pb-1.5">Contact Us</span>
              <ul>
                {contactMethods.map((contact) => (
                  <li className="list-none pb-1" key={contact.id}>
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
              <span className="font-bold text-base pb-1.5">Company</span>
              <ul>
                {companyInfo.map((info) => (
                  <li className="list-none pb-1" key={info.id}>
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
              <span className="font-bold text-base pb-1.5">
                Partner With Us
              </span>
              <ul>
                {partnerMethods.map((partner) => (
                  <li className="list-none pb-1" key={partner.id}>
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

          <div className="flex flex-col p-4 text-sm justify-center mx-auto text-gray-500 flex-shrink flex-1 max-w-md">
            <div className="pb-1.5">Payment Methods</div>
            <div className="flex flex-wrap min-w-56 justify-center">
              {paymentImage.map((pmeth) => (
                <Image
                  className="mt-1 w-14 rounded-lg border"
                  key={pmeth.id}
                  src={pmeth.src}
                  alt={pmeth.text}
                />
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-center w-full text-slate-500 bg-gray-100 items-center text-sm p-3">
          Copyright © 2024 DiveNGo.com All rights reserved
        </footer>
      </div>
    </div>
  )
}
