import { Input, Button, Divider } from '@nextui-org/react'

import { FaSearch, FaRegCalendarAlt, FaUserAlt } from 'react-icons/fa'

export const SearchBar = () => {
  return (
    <div className="flex w-4/5 max-w-[50rem] flex-col items-center justify-between rounded-md bg-white px-1 py-1 shadow-xl sm:flex-row">
      <Input
        variant="flat"
        size="sm"
        fullWidth={false}
        radius="md"
        placeholder="Where are you going?"
        startContent={<FaSearch />}
        className="mb-3 sm:mb-0"
        classNames={{
          input: ['bg-transparent', 'w-[20rem]'],
          innerWrapper: 'bg-transparent',
          inputWrapper: 'bg-transparent',
        }}
      />
      <Divider
        className="mx-1 hidden min-h-7 sm:block"
        orientation="vertical"
      />
      {/* <Divider className=' w-11/12 sm:hidden' orientation="horizontal" /> */}
      <Input
        variant="flat"
        size="sm"
        fullWidth={false}
        radius="md"
        startContent={<FaRegCalendarAlt />}
        className="mb-3 sm:mb-0"
        classNames={{
          input: ['bg-transparent'],
          innerWrapper: 'bg-transparent',
          inputWrapper: 'bg-transparent',
        }}
        placeholder="Dates"
      />
      <Divider
        className="mx-1 hidden min-h-7 sm:block"
        orientation="vertical"
      />
      <Input
        variant="flat"
        size="sm"
        fullWidth={false}
        radius="md"
        startContent={<FaUserAlt />}
        className="mb-3 sm:mb-0"
        classNames={{
          input: ['bg-transparent'],
          innerWrapper: 'bg-transparent',
          inputWrapper: 'bg-transparent',
        }}
        placeholder="Divers"
      />
      <Button
        color="primary"
        variant="solid"
        size="lg"
        className="ml-2"
        radius="md"
      >
        <span className="text-md">Search</span>
      </Button>
    </div>
  )
}
