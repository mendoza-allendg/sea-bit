export const Footer = () => {
  return (
    <div className="flex justify-center bg-gray-100 h-auto sticky bottom-0 border-b-[1px] border-solid border-gray-300 w-full">
      <div className="flex-wrap px-4 items-center flex justify-between w-3/4">
        <div className="flex text-base">
          <ul className="flex flex-col justify-start p-4">
            <span className="font-bold text-xl pb-2">Contact Us</span>
            <li className="list-none">Customer Support</li>
            <li className="list-none">Service Guarantee</li>
            <li className="list-none">Webste Feedback</li>
          </ul>

          <ul className="flex flex-col justify-start p-4">
            <span className="font-bold text-xl pb-2">Company</span>
            <li className="list-none">About us</li>
            <li className="list-none">Terms and Conditions</li>
            <li className="list-none">Privacy and Cookies</li>
          </ul>

          <ul className="flex flex-col justify-start p-4">
            <span className="font-bold text-xl pb-2">Partner With Us</span>
            <li className="list-none">Partner Portal</li>
            <li className="list-none">Affiliate Program</li>
          </ul>
        </div>

        <div className="flex p-4 text-base">
          <div>Payment Methods</div>
        </div>
      </div>
    </div>
  )
}
