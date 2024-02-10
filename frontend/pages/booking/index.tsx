import DefaultLayout from '@/layouts/default'
import { MainTitle } from '@/components/shared/typography'
import { Card, Image } from '@nextui-org/react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Gallery } from '@/components/booking'
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="p-b-8 md:p-b-10 flex flex-col gap-4">
        <div className="flex flex-row py-5">
          <Card className="max-h-[80px] max-w-[80px]">
            <Image
              alt={'Default Image'}
              className="z-0 object-cover"
              src={'/clubs/lakbay.png'}
            />
          </Card>
          <div className="ml-2">
            <MainTitle>Lakbay Freediving Club</MainTitle>
            <div className="mt-1 flex flex-row items-center">
              <FaMapMarkerAlt size={20} color="gray" />
              <span className=" from-gray-100  font-bold">
                Mabini, Batangas
              </span>
            </div>
          </div>
        </div>
        <Gallery />
      </section>
    </DefaultLayout>
  )
}
