import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'
import '@/styles/globals.css'
import 'react-day-picker/dist/style.css'

import { QueryProvider } from '@/components/utils/QueryProvider'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <QueryProvider>
        <Component {...pageProps} />
      </QueryProvider>
    </NextUIProvider>
  )
}
