import { FaGripHorizontal } from 'react-icons/fa'
import { Button, Image } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const SAMPLE_SHOTS = [
  {
    src: '/clubs/shots/01.jpg',
    name: '01',
  },
  {
    src: '/clubs/shots/02.jpg',
    name: '01',
  },
  {
    src: '/clubs/shots/03.jpg',
    name: '01',
  },
  {
    src: '/clubs/shots/04.jpg',
    name: '01',
  },
  {
    src: '/clubs/shots/06.jpg',
    name: '01',
  },
]

export const Gallery = () => {
  return (
    <>
      <div className="relative hidden sm:block ">
        <div className="grid grid-cols-2 gap-1">
          <Image
            alt={'Default Image'}
            className="z-0 h-full w-full rounded-none rounded-l-lg object-fill"
            src={'/clubs/shots/01.jpg'}
          />
          <div className="grid grid-cols-2 gap-1">
            <div className="col-span-full grid grid-cols-subgrid gap-1">
              <Image
                alt={'Default Image'}
                className="z-0 h-full w-full rounded-none object-cover"
                src={'/clubs/shots/02.jpg'}
              />
              <Image
                alt={'Default Image'}
                className="z-0 h-full w-full rounded-none rounded-tr-lg object-cover"
                src={'/clubs/shots/03.jpg'}
              />
            </div>
            <div className="col-span-full grid grid-cols-subgrid gap-1">
              <Image
                alt={'Default Image'}
                className="z-0 h-full w-full rounded-none object-cover "
                src={'/clubs/shots/04.jpg'}
              />
              <Image
                alt={'Default Image'}
                className="z-0 h-full w-full rounded-none rounded-br-lg object-cover"
                src={'/clubs/shots/06.jpg'}
              />
            </div>
          </div>
          <div className="absolute bottom-3 right-3">
            <Button startContent={<FaGripHorizontal />}>See more</Button>
          </div>
        </div>
      </div>
      <div className="min-h-[300px] w-full sm:hidden">
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          pagination={{
            dynamicBullets: true,
          }}
          centeredSlides={true}
        >
          {SAMPLE_SHOTS.map((shot, i) => (
            <SwiperSlide key={i}>
              <div className="mx-1 mb-10 mt-6">
                <Image
                  src={shot.src}
                  className="z-0 h-full min-h-[250px] w-full object-cover"
                  alt={shot.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
