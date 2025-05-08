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
import { upperProfileComponents, userProfiles } from './UserInformation'

export const LegalName = () => {
  const legalName = upperProfileComponents[0].name
  const firstName = userProfiles[0].firstname
  const lastName = userProfiles[0].lastname

  return (
    <section className="mb-6 flex w-full border-b-[1px] pb-6">
      <div className="flex w-full flex-col gap-0">
        <div className="text-gray-800">Legal Name</div>
        <div className="text-sm text-gray-500">{legalName}</div>
      </div>
      <div>
        <Sheet>
          <SheetTrigger className="underline">Edit</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Legal Name</SheetTitle>
              <SheetDescription>
                We’ll need to verify your new legal name before you can book
                your next trip.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="firstName" className="text-right">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={firstName}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lastName" className="text-right">
                  Last Name
                </Label>
                <Input id="lastName" value={lastName} className="col-span-3" />
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
