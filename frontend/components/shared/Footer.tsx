export const Footer = () => {
  return (
    <div className="flex flex-wrap justify-between items-center bg-gray-100 h-auto sticky bottom-0 border-b-[1px] border-solid border-gray-300 w-full">
      <div className="flex justify-between text-sm gap-4">
         <ul className="flex flex-col justify-start p-4"><span className="font-bold">Contact Us</span>
          <li className="list-none">Customer Support</li>
          <li className="list-none">Service Guarantee</li>
          <li className="list-none">Webste Feedback</li>
        </ul>
        
        <ul className="flex flex-col justify-start p-4"><span className="font-bold">About</span>
          <li className="list-none">About us</li>
          <li className="list-none">Terms and Conditions</li>
          <li className="list-none">Privacy and Cookies</li>
        </ul>
        
        <ul className="flex flex-col justify-start p-4"><span className="font-bold">Partner With Us</span>
          <li className="list-none">About us</li>
          <li className="list-none">Terms and Conditions</li>
          <li className="list-none">Privacy and Cookies</li>
        </ul>        
      </div>
      
      <div className="flex p-16 text-small">
        <div>Payment Methods</div>
      </div>
    </div>
  )
}
