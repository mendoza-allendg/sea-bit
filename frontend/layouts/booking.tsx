import { Footer } from '@/components/shared/Footer'
import { BookingHeader as Header } from '@/components/shared/header'
import NextHead from 'next/head'

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-x-hidden">
      <NextHead>
        <title>sea-bit</title>
        <meta key="title" content={'sea-bit'} property="og:title" />
        <meta content={'free diving booking'} property="og:description" />
        <meta content={'free diving booking'} name="description" />
        <meta
          key="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          name="viewport"
        />
        <link href="/favicon.ico" rel="icon" />
        <link href="./output.css" rel="stylesheet" />
      </NextHead>
      <Header />
      <main className="container mx-auto flex-grow px-6 lg:px-10 xl:px-20 2xl:px-48">
        {children}
      </main>
      <Footer />
    </div>
  )
}
