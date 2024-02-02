import DefaultLayout from '@/layouts/default'
import { Link } from '@nextui-org/react'

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

export default function ProfilePage() {
  return (
    <DefaultLayout>
      <section className="h-full w-full bg-slate-200">
        <div className="container mx-auto flex h-full gap-6 rounded-lg bg-slate-600 p-4">
          <div className="max-h-64 w-56 min-w-56 flex-shrink-0 flex-col rounded-lg bg-orange-600 p-4">
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

          <div className="container mx-auto flex h-auto w-full flex-col items-center gap-4 rounded-lg bg-black p-4 text-slate-300">
            <div>User Details</div>
            <div id="parentNameContainer">
              <div id="icon"></div>
              <div id="nameContainer">
                <div>name</div>
                <div>insert the full name here lol</div>
              </div>
              <div>edit</div>
            </div>
            <div id="ParentEmailContainer">
              <div id="emailContainer">
                <div>Email</div>
                <div>insert the user email here</div>
              </div>
              <div>edit</div>
            </div>
            <div id="parentPhoneNumberContainer">
              <div id="phoneNumberContainer">
                <div>Phone Number</div>
                <div>insert phone number here</div>
              </div>
              <div>edit/add?</div>
            </div>
            <div id="parentPasswordContainer">
              <div id="passwordContainer">
                <div>Password</div>
                <div>*********************</div>
              </div>
              <div>edit</div>
            </div>
            <div>Payment Methods</div>
            <div id='parentPaymentContainer'>
              <div id="paymentContainer">
                <div>Saved Cards</div>
                <div>none</div>
              </div>
              <div>+add</div>
            </div>
            <div id='deleteContainer'>
                <div>Delete my account</div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
