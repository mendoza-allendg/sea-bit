import Image from 'next/image'
import { Card } from '@/components/ui/card'
import React from 'react'
import {
  IoHeartOutline,
  IoLocationOutline,
  IoCalendarOutline,
} from 'react-icons/io5'
import { Button } from '../ui/button'

type Club = {
  name: string
  src: string
  logo: string
  location: string
  price: string
}

const SAMPLE_CLUBS: Club[] = [
  {
    name: 'Lakbay Freediving',
    logo: '/clubs/lakbay.png',
    src: '/clubs/shots/01.jpg',
    location: 'Mabini, Batangas',
    price: '1,750',
  },
  {
    name: 'Kataw Freediving Club',
    logo: '/clubs/kataw.png',
    location: 'Mabini, Batangas',
    src: '/clubs/shots/02.jpg',
    price: '860',
  },
  {
    name: 'Bughaw Freediving',
    logo: '/clubs/bughaw.jpg',
    location: 'Mabini, Batangas',
    src: '/clubs/shots/03.jpg',
    price: '1,150',
  },
  {
    name: 'Maximum',
    logo: '/clubs/maximum.png',
    location: 'Mabini, Batangas',
    src: '/clubs/shots/04.jpg',
    price: '2,900',
  },
  {
    name: 'Ozen Freediving Club',
    logo: '/clubs/ozen.png',
    location: 'Siargao, Surigao Del Norte',
    src: '/clubs/shots/06.jpg',
    price: '3,000',
  },
  {
    name: 'Sisid Timog',
    logo: '/clubs/sisid_timog.jpg',
    location: 'Bantayan Island, Cebu',
    src: '/clubs/shots/01.jpg',
    price: '950',
  },
  {
    name: 'Traveling Tambulero',
    logo: '/clubs/traveling_tambulero.jpg',
    location: 'Bantayan Island, Cebu',
    src: '/clubs/shots/02.jpg',
    price: '1,500',
  },
  {
    name: 'Lakbay Freediving',
    logo: '/clubs/lakbay.png',
    location: 'Mabini, Batangas',
    src: '/clubs/shots/03.jpg',
    price: '1,750',
  },
  {
    name: 'Kataw Diving Group',
    logo: '/clubs/kataw.png',
    location: 'Bantayan Island, Cebu',
    src: '/clubs/shots/04.jpg',
    price: '1,700',
  },
  {
    name: 'Bughaw Freediving',
    logo: '/clubs/bughaw.jpg',
    location: 'Mabini, Batangas',
    src: '/clubs/shots/06.jpg',
    price: '2,200',
  },
  {
    name: 'Maximum Freediving',
    logo: '/clubs/maximum.png',
    location: 'Coron, Palawan',
    src: '/clubs/shots/01.jpg',
    price: '3,500',
  },
  {
    name: 'Ozen',
    logo: '/clubs/ozen.png',
    location: 'Siargao',
    src: '/clubs/shots/03.jpg',
    price: '1,000',
  },
]

const ClubCard = ({ club }: { club: Club }) => {
  const { src } = club

  return (
    <Card className="relative h-[250px] w-full">
      <div className="absolute right-2 top-3">
        <IoHeartOutline size={25} color="white" />
      </div>
      <Image
        alt="Relaxing app background"
        className="z-0 h-full w-full rounded-md object-cover"
        src={src}
        width={300}
        height={300}
      />
    </Card>
  )
}

export const ClubList = () => {
  return (
    <div>
      <div className="grid-rows-auto grid w-full gap-4 sm:grid-cols-3 md:grid-cols-4">
        {SAMPLE_CLUBS.map((club, i) => (
          <div key={i}>
            <ClubCard club={club} />
            <div>
              <p className="font-semibold">{club.name}</p>
              <div className="flex flex-row items-center gap-1">
                <IoLocationOutline color="#64748b" />
                <p className="text-sm text-muted-foreground">{club.location}</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <IoCalendarOutline color="#64748b" />
                <p className="text-sm text-muted-foreground">
                  March 6 - 7, 2024
                </p>
              </div>
              <p className="mt-2 text-sm">
                {' '}
                <strong>&#8369;{club.price} PHP</strong>/person
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-semibold">
          Continue finding your favorite clubs
        </h2>
        <Button variant={'outline'} className="h-14">
          <h3 className="font-bold">Show more</h3>
        </Button>
      </div>
    </div>
  )
}
