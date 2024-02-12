import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import React from 'react'
import { Button, Card, CardFooter } from '@nextui-org/react'
import Link from 'next/link'

type Club = {
  name: string
  src: string
  location: string
}

const SAMPLE_CLUBS: Club[] = [
  {
    name: 'Lakbay',
    src: '/clubs/lakbay.png',
    location: 'Batangas',
  },
  {
    name: 'Kataw',
    src: '/clubs/kataw.png',
    location: 'Batangas',
  },
  {
    name: 'Bughaw',
    src: '/clubs/bughaw.jpg',
    location: 'Batangas',
  },
  {
    name: 'Maximum',
    src: '/clubs/maximum.png',
    location: 'Coron',
  },
  {
    name: 'Ozen',
    src: '/clubs/ozen.png',
    location: 'Siargao',
  },
  {
    name: 'Sisid Timog',
    src: '/clubs/sisid_timog.jpg',
    location: 'Cebu',
  },
  {
    name: 'Traveling T',
    src: '/clubs/traveling_tambulero.jpg',
    location: 'Any',
  },
]

const ClubCard = ({ club }: { club: Club }) => {
  const { src, name, location } = club

  return (
    <Card className="max-h-[250px] w-full">
      <Image
        alt="Relaxing app background"
        className="z-0 min-h-[140px] object-fill"
        src={src}
        width={500}
        height={500}
      />
      <CardFooter className="flex items-center">
        <div className="flex flex-grow flex-col">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{name}</span>
            <span className="text-tiny">{location}</span>
          </div>
        </div>
        <Button radius="full" size="sm" color="primary" variant="solid">
          <Link href="/booking">Book</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export const ClubCarousel = () => {
  return (
    <div className="min-h-[200px] w-full">
      <Swiper
        spaceBetween={15}
        slidesPerView={6}
        modules={[Pagination, Navigation]}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: true,
            navigation: false,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: true,
            navigation: false,
          },
          768: { slidesPerView: 5, spaceBetween: 15 },
          1024: { slidesPerView: 6, spaceBetween: 15 },
        }}
      >
        {SAMPLE_CLUBS.map((club, i) => (
          <SwiperSlide key={i}>
            <div className="mx-1 mb-10">
              <ClubCard club={club} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
