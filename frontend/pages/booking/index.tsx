import DefaultLayout from '@/layouts/default'
import { MainTitle } from '@/components/shared/typography'
import Image from 'next/image'
import { Card } from '@nextui-org/react'
import {
  BookingSummary,
  Calendar,
  Gallery,
  PackageSelection,
  AddOns,
} from '@/components/booking'
import { SectionBase } from '@/components/shared/base'
// import { useForm } from 'react-hook-form'

export default function IndexPage() {
  // const { control, handleSubmit } = useForm({
  //   defaultValues: {
  //     email: '',
  //     password: '',
  //   },
  // })

  return (
    <DefaultLayout>
      <section className="p-b-8 md:p-b-10 flex flex-col gap-4">
        <div className="flex flex-row items-center py-5">
          <Card className="max-h-[50px] max-w-[50px]">
            <Image
              alt={'Default Image'}
              className="z-0 object-cover"
              src={'/clubs/lakbay.png'}
              width={500}
              height={500}
            />
          </Card>
          <div className="ml-2">
            <MainTitle>Lakbay Freediving</MainTitle>
          </div>
        </div>
        <Gallery />
        <div className="md:flex md:justify-between">
          <div className="md:pr-4">
            <SectionBase title={'Packages'}>
              <PackageSelection />
            </SectionBase>
            <SectionBase title={'Add ons'}>
              <AddOns />
            </SectionBase>
            <SectionBase title={'Select Dates'}>
              <Calendar />
            </SectionBase>
          </div>
          <div className="flex-1 justify-end pt-5">
            <BookingSummary />
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
