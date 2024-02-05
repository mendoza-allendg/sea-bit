import React from 'react'
import { Button, Card, CardFooter, Image } from '@nextui-org/react'

export type Club = {
  name: string
  src: string
  location: string
}

export const ClubCard = ({ club }: { club: Club }) => {
  const { src, name, location } = club

  return (
    <Card className="max-h-[250px] w-full">
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 min-h-[140px] object-fill"
        src={src}
      />
      <CardFooter className="flex items-center">
        <div className="flex flex-grow flex-col">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{name}</span>
            <span className="text-tiny">{location}</span>
          </div>
        </div>
        <Button radius="full" size="sm" color="primary" variant="solid">
          Book
        </Button>
      </CardFooter>
    </Card>
  )
}
