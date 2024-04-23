import { CompanyContactMethods } from './FooterComponents/ContactMethods'
import { CompanyInfos } from './FooterComponents/CompanyInfos'
import { CompanyPartnerMethods } from './FooterComponents/CompanyPartnerMethods'
import { PaymentMethodLogos } from './FooterComponents/PaymentMethodLogos'

export const BookingFooter = () => {
  return (
    <div className="border-t-1 static bottom-0 flex h-auto w-full justify-center border-solid border-gray-300 bg-gray-100">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="container mx-auto flex w-full flex-wrap items-center justify-between px-6 lg:px-10 xl:px-20 2xl:px-48">
          <div className="flex max-w-md flex-1 flex-shrink-0 flex-nowrap justify-start text-xs">
            <div className="flex flex-col justify-start py-4 pr-4">
              <span className="pb-1.5 text-base font-bold">Contact Us</span>
              <CompanyContactMethods />
            </div>

            <div className="flex flex-col justify-start p-4">
              <span className="pb-1.5 text-base font-bold">Company</span>
              <CompanyInfos />
            </div>

            <div className="flex flex-col justify-start p-4">
              <span className="pb-1.5 text-base font-bold">
                Partner With Us
              </span>
              <CompanyPartnerMethods />
            </div>
          </div>

          <div className="flex max-w-[27rem] flex-1 flex-shrink flex-col justify-center py-4 text-sm text-gray-500">
            <div className="pb-1.5 pl-4">Payment Methods</div>
            <PaymentMethodLogos />
          </div>
        </div>
        <footer className="flex w-full items-center justify-center bg-gray-100 p-3 text-sm text-slate-500">
          Copyright © 2024 DiveNGo.com All rights reserved
        </footer>
      </div>
    </div>
  )
}
