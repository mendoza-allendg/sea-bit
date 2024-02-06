import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { LocationCard, type Location } from './LocationCard'

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
