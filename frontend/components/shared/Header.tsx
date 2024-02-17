import { Link } from '@nextui-org/react'
import { AuthButton } from '@/components/authentication/AuthButton'
import Image from 'next/image'
export const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex h-16 w-full border-b-[1px] border-solid border-gray-300 bg-white py-1.5">
      {/* TODO: change padding for responsiveness */}
      <div className="container mx-auto flex w-full items-center justify-between px-6 lg:px-10 xl:px-20 2xl:px-48">
        <Link href="/">
          <Image alt="logo" src={'/nugiri.png'} width={100} height={100} />
        </Link>
        <div className="flex-h flex">
          <AuthButton />
        </div>
      </div>
    </div>
  )
}
