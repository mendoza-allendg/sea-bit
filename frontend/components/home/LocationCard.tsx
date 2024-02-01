import React from 'react'
import { Card, CardHeader, Image } from '@nextui-org/react'

export type Location = {
  name: string
  src: string
}

export const LocationCard = ({ location }: { location: Location }) => {
  const { name, src } = location

  return (
    <Card className="max-h-[250px]">
      <CardHeader className="absolute top-1 z-10 flex-col !items-start">
        <p className="text-tiny font-bold uppercase text-white/60">New!</p>
        <span className="text-large font-bold text-white">{name}</span>
      </CardHeader>
      <Image
        alt={name}
        className="z-0 min-h-[250px] w-full object-cover"
        src={src}
      />
    </Card>
  )
}
