import { Input, Button, Divider } from '@nextui-org/react'

import DefaultLayout from '@/layouts/default'
import { FaSearch, FaRegCalendarAlt, FaUserAlt } from 'react-icons/fa'

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 p-b-8 md:p-b-10">
        <div className="flex justify-center items-center bg-[url('/landing-page-image.jpg')] bg-cover rounded-b-md w-screen min-h-[32rem]">
          <div className="flex flex-col sm:flex-row items-center w-4/5 max-w-[50rem] justify-between rounded-md bg-white shadow-xl px-1 py-1">
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
              className="hidden min-h-7 mx-1 sm:block"
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
              className="hidden min-h-7 mx-1 sm:block"
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
              <text className="text-md">Search</text>
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
