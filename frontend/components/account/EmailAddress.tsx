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

export const EmailAddress = () => {
  const emailAddress = upperProfileComponents[0].email
  return (
    <section className="mb-6 flex w-full border-b-[1px] pb-6">
      <div className="flex w-full flex-col gap-0">
        <div className="text-gray-800">Email Address</div>
        <div className="text-sm text-gray-500">{emailAddress}</div>
      </div>
      <div>
        <Sheet>
          <SheetTrigger className="underline">Edit</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Email Address</SheetTitle>
              <SheetDescription>
                Use an address you’ll always have access to.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="emailAddress" className="text-right">
                  Email Address
                </Label>
                <Input
                  id="emailAddress"
                  value={emailAddress}
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
