import DefaultLayout from '@/layouts/default'
import { Link } from '@nextui-org/react'


const PROFILE_MENUS = [{
  name: "My Bookings",
  src: "#"
}, {
  name: "Favourites",
  src: "#"
}, {
  name: "Messages",
  src: "#"
}, {
  name: "Reviews",
  src: "#"
}, {
  name: "Profile",
  src: "#"
}]

export default function ProfilePage() {
  return (
    <DefaultLayout>
      <section className='bg-slate-200 w-full h-full'>
        <div className='bg-slate-600 container mx-auto h-auto flex p-4 rounded-lg'>
          <div className='bg-orange-600 h-auto p-4 flex-col gap-2 rounded-lg w-56'>
            <ul>
              {PROFILE_MENUS.map((menu, i) => (
                <li className="list-none py-2" key={i}>
                  <Link
                    href={menu.src}
                    color="foreground"
                    className="text-lg"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
