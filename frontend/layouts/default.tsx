import { Header } from '@/components/shared/Header'
import { Link } from '@nextui-org/link'
import NextHead from 'next/head'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col h-screen justify-center items-center">
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
      <main className="container mx-auto px-6 lg:px-20 xl:px-36 2xl:px-44 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">NextUI</p>
        </Link>
      </footer>
    </div>
  )
}
