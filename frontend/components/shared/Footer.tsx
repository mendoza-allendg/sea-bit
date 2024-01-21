import { Image, Link } from '@nextui-org/react'

export const Footer = () => {
  return (
    <div className="flex justify-center bg-gray-100 h-auto sticky bottom-0 border-t-[1px] border-solid border-gray-300 w-full">
      <div className="flex-wrap px-14 items-center flex justify-center w-9/12 py-7">
        <div className="flex justify-center text-xs mx-auto">
          <ul className="flex flex-col justify-start p-4">
            <span className="font-bold text-base pb-1">Contact Us</span>
            <li className="list-none">
              <Link href="#" color="foreground" className="text-xs">
                Customer Support
              </Link>
            </li>
            <li className="list-none">
              <Link href="#" color="foreground" className="text-xs">
                Service Guarantee
              </Link>
            </li>
            <li className="list-none">
              <Link href="#" color="foreground" className="text-xs">
                Website Feedback
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col justify-start p-4">
            <span className="font-bold text-base pb-1">Company</span>
            <li className="list-none">
              <Link href="#" color="foreground" className="text-xs">
                About Us
              </Link>
            </li>
            <li className="list-none">
              <Link href="#" color="foreground" className="text-xs">
                Terms and Conditions
              </Link>
            </li>
            <li className="list-none">
              <Link href="#" color="foreground" className="text-xs">
                Privacy and Cookies
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col justify-start p-4">
            <span className="font-bold text-base pb-1">Partner With Us</span>
            <li className="list-none">
              <Link href="#" color="foreground" className="text-xs">
                Partner Portal
              </Link>
            </li>
            <li className="list-none">
              <Link href="#" color="foreground" className="text-xs">
                Affiliate Program{' '}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col p-4 text-sm mx-auto text-gray-500">
          <div>Payment Methods</div>
          <div className="flex flex-col flex-wrap justi">
            <div className="flex justify-center">
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
            </div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
