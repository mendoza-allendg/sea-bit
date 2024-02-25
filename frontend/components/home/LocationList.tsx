import React from 'react'
import { Card, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
type Location = {
  name: string
  src: string
}

const SAMPLE_LOCATIONS: Location[] = [
  {
    name: 'Coron, Palawan',
    src: '/locations/palawan.jpg',
  },
  // {
  //   name: 'Apo Reef',
  //   src: '/locations/apo_reef.jpg',
  // },
  // {
  //   name: 'Batangas',
  //   src: '/locations/batangas_masasa.jpg',
  // },
  {
    name: 'Moalboal, Cebu',
    src: '/locations/cebu_sardines.jpg',
  },
  {
    name: 'Panglao, Bohol',
    src: '/locations/panglao.jpg',
  },
  {
    name: 'Siargao',
    src: '/locations/siargao.jpg',
  },
]

const LocationCard = ({ location }: { location: Location }) => {
  const { name, src } = location

  return (
    <Card className="relative h-[250px] w-full">
      <CardHeader className="absolute top-1 z-10 flex-col !items-start">
        <p className="font-bold uppercase text-white/60">New!</p>
        <p className="text-lg font-bold text-white">{name}</p>
      </CardHeader>
      <Image
        alt={name}
        className="z-0 h-full w-full rounded-md object-cover"
        src={src}
        width={500}
        height={500}
      />
    </Card>
  )
}
export const LocationList = () => {
  return (
    <div>
      <div className="grid-rows-auto grid w-full gap-4 sm:grid-cols-3 md:grid-cols-4">
        {SAMPLE_LOCATIONS.map((location, i) => (
          <div key={i}>
            <LocationCard location={location} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <Button variant={'outline'} size={'lg'} className=" h-14">
          <h3 className="font-bold">See all locations</h3>
        </Button>
      </div>
    </div>
  )
}
