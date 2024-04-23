import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

import { Button } from '../ui/button'

type Package = {
  name: string
  src: string
  price: string
}

const SAMPLE_PACKAGES: Package[] = [
  {
    name: 'Introduction',
    src: '/packages/26-2.png',
    price: '750',
  },
  {
    name: 'Fun Dive',
    src: '/clubs/shots/04.jpg',
    price: '1,900',
  },
  {
    name: 'Training',
    src: '/clubs/shots/01.jpg',
    price: '3,000',
  },
]

const PackageCard = ({ pack }: { pack: Package }) => {
  const { name, src, price } = pack
  return (
    <Card className="flex max-w-[300px] flex-col items-center justify-center">
      <div className="h-[200px] w-full">
        <Image
          alt={'intro'}
          className="z-0 h-full w-full rounded-md object-cover"
          src={src}
          width={300}
          height={300}
        />
      </div>
      <div className="mt-4 flex flex-col items-center justify-center p-4">
        <p className="mb-4 text-lg font-bold">{name}</p>
        <p className="flex-wrap text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
          placerat massa ac dictum. Sed et auctor mi. Donec et luctus magna, id
          aliquam risus.
        </p>
        <div className="flex w-full flex-row justify-between">
          <div className="flex flex-row items-center">
            <span className="mt-4 text-xl font-bold">&#8369;{price}</span>
            <span className="mt-4 text-sm">/person</span>
          </div>
          <Button className="mt-4">Select</Button>
        </div>
      </div>
    </Card>
  )
}

export const PackageModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Change</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[900px]">
        <DialogHeader>
          <DialogTitle>Select your package</DialogTitle>
        </DialogHeader>
        <div className="flex gap-4">
          {SAMPLE_PACKAGES.map((pack, i) => (
            <div key={i}>
              <PackageCard pack={pack} />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
