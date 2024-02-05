import DefaultLayout from '@/layouts/default'
import { ClubCarousel, LocationCarousel, SearchBar } from '@/components/home'
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="p-b-8 md:p-b-10 flex flex-col items-center justify-center gap-4">
        <div className="flex min-h-[28rem] w-screen items-center justify-center rounded-b-md bg-[url('/landing-page-image.jpg')] bg-cover">
          <SearchBar />
        </div>
        <div className="flex w-full py-5">
          <LocationCarousel />
        </div>
        <div className="flex w-full py-5">
          <ClubCarousel />
        </div>
      </section>
    </DefaultLayout>
  )
}
