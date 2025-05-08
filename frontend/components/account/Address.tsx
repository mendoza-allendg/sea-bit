import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { upperProfileComponents } from './UserInformation'

export const Address = () => {
  const address = upperProfileComponents[0]?.address

  return (
    <section className="mb-6 flex w-full border-b-[1px] pb-6">
      <div className="flex w-full flex-col gap-0">
        <div className="text-gray-800">Address</div>
        <div className="text-sm text-gray-500">{address}</div>
      </div>
      <div>
        <Sheet>
          <SheetTrigger className="underline">Edit</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Address</SheetTitle>
              <SheetDescription>
                Use a permanent address where you can receive mail.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="country" className="text-right">
                  Country/Region
                </Label>
                <Input
                  id="country"
                  value={'Philippines'}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="street" className="text-right">
                  Street address
                </Label>
                <Input id="street" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="suite" className="text-right">
                  Apt, suite. Optional
                </Label>
                <Input id="suite" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="city" className="text-right">
                  City
                </Label>
                <Input id="city" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="province" className="text-right">
                  Province
                </Label>
                <Input id="province" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="postal" className="text-right">
                  Postal Code
                </Label>
                <Input id="postal" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  )
}
