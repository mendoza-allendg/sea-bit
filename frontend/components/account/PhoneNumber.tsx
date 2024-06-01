import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '../ui/sheet'
import { upperProfileComponents } from './UserInformation'

export const PhoneNumber = () => {
  const phoneNumber = upperProfileComponents[0].mobile
  return (
    <section className="mb-6 flex w-full border-b-[1px] pb-6">
      <div className="flex w-full flex-col gap-0">
        <div className="text-gray-800">Phone Number</div>
        <div className="text-sm text-gray-500">{phoneNumber}</div>
      </div>
      <div>
        <Sheet>
          <SheetTrigger className="underline">Edit</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Phone Number</SheetTitle>
              <SheetDescription>
                For notifications, reminders, and help logging in.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phoneNumber" className="text-right">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  value={phoneNumber}
                  className="col-span-3"
                />
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
