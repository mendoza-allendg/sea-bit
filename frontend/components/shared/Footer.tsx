import { Image, Link } from '@nextui-org/react'

const contactMethods = [
  'Customer Support',
  'Service Guarantee',
  'Website Feedback',
]

const companyInfo = ['About Us', 'Terms and Condition', 'Privacy and Cookies']

const partnerMethods = ['Partner Portal', 'Affiliate Program']

export const Footer = () => {
  return (
    <div className="flex justify-center bg-gray-100 h-auto static bottom-0 border-t-1 border-solid border-gray-300 w-full">
      <div className="bg-slate-500 container px-6 lg:px-20 xl:px-35 2xl:px-14 items-start flex justify-between w-full py-7">
        <div className="bg-purple-50 flex justify-center text-xs mx-auto flex-shrink-0">
          <div className="flex flex-col justify-start p-4">
            <span className="font-bold text-base pb-1">Contact Us</span>
            <ul>
              {contactMethods.map((contact) => (
                <li className="list-none">
                  <Link href="#" color="foreground" className="text-xs">
                    {contact}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-start p-4">
            <span className="font-bold text-base pb-1">Company</span>
            <ul>
              {companyInfo.map((info) => (
                <li className="list-none">
                  <Link href="#" color="foreground" className="text-xs">
                    {info}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-start p-4">
            <span className="font-bold text-base pb-1">Partner With Us</span>
            <ul>
              {partnerMethods.map((partner) => (
                <li className="list-none">
                  <Link href="#" color="foreground" className="text-xs">
                    {partner}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-red-950 flex flex-col p-4 text-sm justify-center mx-auto text-gray-500 flex-shrink max-w-md">
          <div>Payment Methods</div>
          {/*<div className="flex flex-wrap">*/}
          <div className="flex flex-wrap justify-center">
            <Image
              src={'/payment_logos/visa.png'}
              className="mt-1 w-14 rounded-lg border "
            />
            <Image
              src={'/payment_logos/mastercard.png'}
              className="mt-1 w-14 rounded-lg border "
            />
            <Image
              src={'/payment_logos/Gcash.png'}
              className="mt-1 w-14 rounded-lg border "
            />
            <Image
              src={'/payment_logos/GrabPay.png'}
              className="mt-1 w-14 rounded-lg border "
            />
            <Image
              src={'/payment_logos/PayMaya.png'}
              className="mt-1 w-14 rounded-lg border "
            />
            <Image
              src={'/payment_logos/BPI.png'}
              className="mt-1 w-14 rounded-lg border "
            />
            <Image
              src={'/payment_logos/SecurityBank.png'}
              className="mt-1 w-14 rounded-lg border "
            />
            <Image
              src={'/payment_logos/AUB.png'}
              className="mt-1 w-14 rounded-lg border "
            />
            <Image
              src={'/payment_logos/BillEase.png'}
              className="mt-1 w-14 rounded-lg border "
            />
            <Image
              src={'/payment_logos/CoinsPH.png'}
              className="mt-1 w-14 rounded-lg border "
            />
            <Image
              src={'/payment_logos/7_eleven.png'}
              className="mt-1 w-14 rounded-lg border "
            />
            <Image
              src={'/payment_logos/CebuanaLL.png'}
              className="mt-1 w-14 rounded-lg border "
            />
            <Image
              src={'/payment_logos/M_LL.png'}
              className="mt-1 w-14 rounded-lg border "
            />
            <Image
              src={'/payment_logos/Landbank.jpg'}
              className="mt-1 w-14 rounded-lg border "
            />
          </div>
          {/*
            <div className="flex justify-center">
              <Image
                src={'/payment_logos/AUB.png'}
                className="mt-1 w-14 rounded-lg border "
              />
              <Image
                src={'/payment_logos/BillEase.png'}
                className="mt-1 w-14 rounded-lg border "
              />
              <Image
                src={'/payment_logos/CoinsPH.png'}
                className="mt-1 w-14 rounded-lg border "
              />
              <Image
                src={'/payment_logos/7_eleven.png'}
                className="mt-1 w-14 rounded-lg border "
              />
              <Image
                src={'/payment_logos/CebuanaLL.png'}
                className="mt-1 w-14 rounded-lg border "
              />
              <Image
                src={'/payment_logos/M_LL.png'}
                className="mt-1 w-14 rounded-lg border "
              />
              <Image
                src={'/payment_logos/Landbank.jpg'}
                className="mt-1 w-14 rounded-lg border "
            /> 
            </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  )
}
