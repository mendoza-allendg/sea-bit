import { SectionBase } from '@/components/shared/base'
import LocationsLayout from '@/layouts/locations'
import { LocationList } from '@/components/home'
// import { useForm } from 'react-hook-form'

export default function IndexPage() {
  return (
    <LocationsLayout>
      <section className="p-b-8 md:p-b-10 flex flex-col items-center justify-center gap-4">
        <div className="flex min-h-[28rem] w-screen items-center justify-center rounded-b-md bg-[url('/coron-landing.jpg')] bg-cover"></div>

        <SectionBase title={'Where to?'}>
          <LocationList />
        </SectionBase>
      </section>
    </LocationsLayout>
  )
}
