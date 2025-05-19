import React from 'react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import {
  GiJellyfish,
  GiFlatfish,
  GiTurtle,
  GiCoral,
  GiShipWreck,
} from 'react-icons/gi'
import { Link } from '@nextui-org/react'

type Sighting = 'turtle' | 'jellyfish' | 'shipwreck' | 'corals' | 'fish'

type Location = {
  name: string
  src: string
  country: string
  spots: number
  average_depth: number
  sightings: Sighting[]
}

const sightingIcons = {
  jellyfish: GiJellyfish,
  fish: GiFlatfish,
  turtle: GiTurtle,
  corals: GiCoral,
  shipwreck: GiShipWreck,
}

const SAMPLE_LOCATIONS: Location[] = [
  {
    name: 'Coron, Palawan',
    src: '/locations/coron2.jpg',
    country: 'Philippines',
    spots: 12,
    average_depth: 12,
    sightings: ['shipwreck', 'corals', 'fish'],
  },
  {
    name: 'Apo Reef',
    src: '/locations/apo_reef.jpg',
    country: 'Philippines',
    spots: 9,
    average_depth: 5,
    sightings: ['jellyfish', 'corals', 'fish'],
  },
  {
    name: 'Batangas',
    src: '/locations/batangas_masasa.jpg',
    country: 'Philippines',
    spots: 7,
    average_depth: 8,
    sightings: ['turtle', 'corals', 'fish'],
  },
  {
    name: 'Moalboal, Cebu',
    src: '/locations/cebu_sardines.jpg',
    country: 'Philippines',
    spots: 2,
    average_depth: 8,
    sightings: ['turtle', 'corals', 'fish'],
  },
  {
    name: 'Panglao, Bohol',
    src: '/locations/panglao.jpg',
    country: 'Philippines',
    spots: 2,
    average_depth: 7,
    sightings: ['corals', 'fish'],
  },
  {
    name: 'Siargao',
    src: '/locations/siargao.jpg',
    country: 'Philippines',
    spots: 1,
    average_depth: 10,
    sightings: ['corals', 'fish'],
  },
  {
    name: 'Puerto Galera',
    src: '/locations/puerto_galera.jpg',
    country: 'Philippines',
    spots: 4,
    average_depth: 6,
    sightings: ['turtle', 'corals', 'fish'],
  },
  {
    name: 'Anda, Bohol',
    src: '/locations/anda_bohol.jpg',
    country: 'Philippines',
    spots: 5,
    average_depth: 16,
    sightings: ['corals', 'fish'],
  },
]

const LocationCard = ({ location }: { location: Location }) => {
  const { name, src, country, spots, average_depth, sightings } = location

  return (
    <Card className="relative h-[280px] w-full">
      <Image
        alt={name}
        className="aboslute z-0 h-full w-full rounded-md object-cover"
        src={src}
        width={500}
        height={500}
      />
      <div className="absolute right-5 top-2 flex flex-col items-center leading-tight">
        <p className="text-lg font-bold text-white text-shadow-md">{spots}</p>
        <p className="-mt-1 text-sm font-bold text-white text-shadow-md">
          spots
        </p>
      </div>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center text-center">
        <p className="text-2xl font-bold text-white text-shadow-md">{name}</p>
        <p className="text-sm font-bold text-white text-shadow-md">{country}</p>
      </div>
      <div className="absolute bottom-2 left-5 right-5 flex justify-between">
        <div className="items-left flex flex-col">
          <p className="text-lg font-bold text-white text-shadow-md">
            {average_depth}m
          </p>
          <p className="text-sm font-bold text-white text-shadow-md">
            avg depth
          </p>
        </div>
        <div className="items-right flex flex-col text-right">
          <div className="flex flex-row items-center">
            {sightings.map((sighting, i) => {
              const Icon = sightingIcons[sighting]
              return (
                <Icon
                  key={i}
                  size={30}
                  color={'white'}
                  className="drop-shadow-md"
                />
              )
            })}
          </div>
          <p className="text-sm font-bold text-white text-shadow-md">
            sightings
          </p>
        </div>
      </div>
    </Card>
  )
}

export const LocationList = () => {
  return (
    <div>
      <div className="grid-rows-auto grid w-full gap-4 sm:grid-cols-3 md:grid-cols-4">
        {SAMPLE_LOCATIONS.map((location, i) => (
          <div key={i}>
            <Link href="/locations">
              <LocationCard location={location} />
            </Link>
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
