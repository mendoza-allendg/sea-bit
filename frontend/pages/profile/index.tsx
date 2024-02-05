import DefaultLayout from '@/layouts/default'
import { Link, user } from '@nextui-org/react'
import { ifError } from 'assert';

const PROFILE_MENUS = [
  {
    name: 'My Bookings',
    src: '#',
  },
  {
    name: 'Favourites',
    src: '#',
  },
  {
    name: 'Messages',
    src: '#',
  },
  {
    name: 'Reviews',
    src: '#',
  },
  {
    name: 'Profile',
    src: '#',
  },
]

const user_infos = [
  {
    name: "Kim Allen Joseph Lazo",
    email: "kajlazo@pasoketits.com",
    mobile: "09064595820",
    password: "kapagako'ynagiisamadalasakongnagbabate"
  }
]

function maskPassword(password: string) {
  return '•'.repeat(password.length);
}


const UPPER_PROFILE_COMPONENTS = [
  {
    name: "Name",
    info: user_infos[0].name
  }, 
  {
    name: "Email",
    info: user_infos[0].email
  },
  {
    name: "Phone Number",
    info: user_infos[0].mobile
  },
  {
    name: "Password",
    info: maskPassword(user_infos[0].password)
  },
]

const user_cards = [{
  cardType: "Visa",
  cardNumber: "0000111122224444"
}]

const LOWER_PROFILE_COMPONENTS = [
  {
    name: "Saved Cards",
    info: function () {
      if (!user_cards.length) {
        return "None"
      } else {
        return (
          <div>
            {user_cards.map((card, i) => (
              <div key={i}>
                <div>Card Type: {card.cardType}</div>
                <div>Card Number: {card.cardNumber}</div>
              </div>
            ))}
          </div>
        )}}}];






export default function ProfilePage() {
  return (
    <DefaultLayout>
      <section className="h-full w-full">
        <div className="xl:px-35 container m-4 mx-auto flex w-full justify-center items-start rounded-lg p-5 lg:px-20 2xl:px-6">

          <div className="max-h-64 min-w-56 flex-shrink-0 flex-col rounded-lg p-4 bg-gray-100 border border-gray-300 shadow-md">
            <ul>
              {PROFILE_MENUS.map((menu, i) => (
                <li className="list-none p-2" key={i}>
                  <Link
                    href={menu.src}
                    color="foreground"
                    className="text-large"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="container mx-auto flex h-auto w-full flex-col items-start gap-2 rounded-lg px-4 text-slate-950">
            <div className='text-2xl font-medium'>User Details</div>
            {UPPER_PROFILE_COMPONENTS.map((comp, i) => (
                <div className="flex w-full justify-between items-center bg-gray-100 border border-gray-300 px-4 py-5 shadow-md hover:bg-rose-200" key={i}>
                  <div className='flex flex-col'>
                    <div className='font-semibold'>{comp.name}</div>
                    <div>{comp.info}</div>
                  </div>
                  <div className='font-semibold'>Edit</div>
                </div>
              ))}
              
            <div className='text-2xl font-medium'>Payment Methods</div>
            {/*{LOWER_PROFILE_COMPONENTS.map((comp, i) => (
                <div className="flex w-full justify-between items-center bg-gray-100 border border-gray-300 px-4 py-5 shadow-md" key={i}>
                  <div className='flex flex-col'>
                    <div className='font-semibold'>{comp.name}</div>
                    <div>{comp.info}</div>
                  </div>
                  <div className='font-semibold'>Edit</div>
                </div>
            ))}*/}

            
            <div
              id="parentPaymentContainer"
              className="flex w-full justify-between"
            >
                <div className="flex w-full justify-between items-center bg-gray-100 border border-gray-300 px-4 py-5 shadow-md">
                  <div className='flex flex-col'>
                    <div className='font-semibold'>Saved Cards</div>
                    <div>None</div>
                  </div>
                  <div className='font-semibold'>+Add</div>
                </div>
            </div>
            <div id="deleteContainer">
              <div>Delete my account</div>
            </div>
            </div>
          
        </div>
      </section>
    </DefaultLayout>
  )
}
