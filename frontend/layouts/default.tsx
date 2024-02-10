import { Footer } from '@/components/shared/Footer'
import { Header } from '@/components/shared/Header'
import NextHead from 'next/head'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
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
      {/* TODO: change padding for responsiveness */}
      <main className="container mx-auto flex-grow px-6 lg:px-20 xl:px-36 2xl:px-44">
        {children}
      </main>
      <Footer />
    </div>
  )
}
