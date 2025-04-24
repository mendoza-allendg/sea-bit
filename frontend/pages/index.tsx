import DefaultLayout from '@/layouts/default'
import { LocationList } from '@/components/home'
import { SectionBase } from '@/components/shared/base'

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="p-b-8 md:p-b-10 flex flex-col items-center justify-center gap-4">
        <div className="flex min-h-[28rem] w-screen items-center justify-center rounded-b-md bg-[url('/landing-page-image.jpg')] bg-cover"></div>
        <SectionBase title={'Where to?'}>
          <LocationList />
        </SectionBase>
        {/* <SectionBase title={'Find your favorite clubs'}>
          <ClubList />
        </SectionBase> */}
      </section>
    </DefaultLayout>
  )
}
