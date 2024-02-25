import { FaSearch, FaRegCalendarAlt } from 'react-icons/fa'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const SearchBar = () => {
  return (
    <div className="flex w-4/5 max-w-[50rem] flex-col items-center justify-between rounded-md bg-white py-4 pl-3 pr-1 shadow-xl sm:flex-row sm:py-1">
      <div className="mb-3 flex w-full flex-row items-center justify-center sm:mb-0 ">
        <FaSearch color="#999999" />
        <Input
          placeholder="Business name or location"
          className="border-0 bg-transparent focus-visible:ring-transparent"
        />
      </div>
      <Separator
        className="mx-1 hidden min-h-7 sm:block"
        orientation="vertical"
      />
      <div className="mb-3 flex w-full flex-row items-center justify-center sm:mb-0 sm:w-5/12 ">
        <FaRegCalendarAlt color="#999999" />
        <Input
          placeholder="Select Dates"
          className="border-0 bg-transparent focus-visible:ring-transparent"
        />
      </div>
      <Button color="primary" size="lg" className="ml-2">
        <span className="text-md">Search</span>
      </Button>
    </div>
  )
}
