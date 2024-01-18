import {
  Image,
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from '@nextui-org/react'

import { FaBars, FaSearch } from 'react-icons/fa'

export const Header = () => {
  return (
    <div className="z-50  bg-white py-1.5 flex h-16 sticky top-0 border-b-[1px] border-solid border-gray-300 w-full">
      {/* TODO: change padding for responsiveness */}
      <div className="container mx-auto px-6 lg:px-20 xl:px-36 2xl:px-48 items-center flex justify-between w-full">
        <Image src={'/logo3.png'} width={140} height={120} />
        <div className="flex flex-h">
          <Button variant="light" className="p-3">
            <FaSearch />
            <text className="text-sm">Search</text>
          </Button>
          <Button variant="light" className="p-3">
            <Avatar size="sm" color="default" radius="full" />
            <text className="text-sm">Sign in</text>
          </Button>
          <Dropdown className="p-1" placement="bottom">
            <DropdownTrigger>
              <Button variant="light">
                <FaBars />
                <text className="text-sm">Menu</text>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">My Bookings</DropdownItem>
              <DropdownItem key="edit">Settings</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Log out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
