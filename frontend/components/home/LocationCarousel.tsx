import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import React from 'react'
import { Card, CardHeader } from '@/components/ui/card'

import Image from 'next/image'
type Location = {
  name: string
  src: string
}

const SAMPLE_LOCATIONS: Location[] = [
  {
    name: 'Coron, Palawan',
    src: '/locations/palawan.jpg',
  },
  {
    name: 'Apo Reef',
    src: '/locations/apo_reef.jpg',
  },
  {
    name: 'Batangas',
    src: '/locations/batangas_masasa.jpg',
  },
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
    <Card className="max-h-[250px]">
      <CardHeader className="absolute top-1 z-10 flex-col !items-start">
        <p className="text-xs font-bold uppercase text-white/60">New!</p>
        <p className="text-large font-bold text-white">{name}</p>
      </CardHeader>
      <Image
        alt={name}
        className="z-0 min-h-[250px] w-full rounded-md object-cover"
        src={src}
        width={500}
        height={500}
      />
    </Card>
  )
}
export const LocationCarousel = () => {
  return (
    <div className="min-h-[250px] w-full">
      <Swiper
        spaceBetween={15}
        slidesPerView={4}
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
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 15 },
        }}
      >
        {SAMPLE_LOCATIONS.map((location, i) => (
          <SwiperSlide key={i}>
            <div className="mx-1 mb-10">
              <LocationCard location={location} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
