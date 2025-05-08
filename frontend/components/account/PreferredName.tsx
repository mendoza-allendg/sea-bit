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

export const PreferredName = () => {
  const preferredName = upperProfileComponents[0].preferredName
  return (
    <section className="mb-6 flex w-full border-b-[1px] pb-6">
      <div className="flex w-full flex-col gap-0">
        <div className="text-gray-800">Preferred Name</div>
        <div className="text-sm text-gray-500">{preferredName}</div>
      </div>
      <div>
        <Sheet>
          <SheetTrigger className="underline">Edit</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Preferred Name</SheetTitle>
              <SheetDescription>
                This is how your first name will appear to Hosts and guests.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="preferredName" className="text-right">
                  Preferred Name
                </Label>
                <Input
                  id="preferredName"
                  value={preferredName}
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
