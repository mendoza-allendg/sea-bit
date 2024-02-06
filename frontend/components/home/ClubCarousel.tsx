import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { type Club, ClubCard } from './ClubCard'

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
            <div className="mx-1 mb-10 mt-6">
              <ClubCard club={club} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
