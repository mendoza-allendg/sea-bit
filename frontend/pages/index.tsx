import { Input, Button } from '@nextui-org/react'

import DefaultLayout from '@/layouts/default'
import { FaSearch } from 'react-icons/fa'

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 p-b-8 md:p-b-10">
        <div className="flex justify-center items-center bg-[url('/landing-page-image.jpg')] bg-cover rounded-b-md w-screen min-h-[32rem]">
          <div className="flex min-h-20 w-4/5 max-w-[480px]  rounded-md bg-white shadow-xl px-7 lg:px-14 py-7">
            <Input
              variant="bordered"
              labelPlacement="inside"
              size="sm"
              label="Where are you going?"
              fullWidth={false}
              radius="md"
              className="mr-1"
            />
            <Button color="primary" variant="solid" size="lg">
              <text className="text-md">Search</text>
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
