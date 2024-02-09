import { Button, Image } from '@nextui-org/react'
import React from 'react'

export default function IndexPage() {
  const story = [
    {
      src: '/invites/IMG_7265.jpg',
      text: 'One day in Seoul...',
    },
    {
      src: '/invites/IMG_7238.jpg',
      text: 'Damn ganda nun ah. Sya na kaya yung Seoulmate ko?',
    },
    {
      src: '/invites/IMG_7237.jpg',
      text: 'I should ask her out... Naiimagine ko na mga pwede namin gawin dito sa Korea',
    },
    {
      src: '/invites/namsan.jpg',
      text: 'Pupunta kaming Namsan Tower. Doon, mangangarap kami ng mataas at abutin ng magkasama',
    },
    {
      src: '/invites/everland.jpg',
      text: 'Pupunta kaming Everland. Doon, haharapin namin ang mga takot namin habang nagsasaya sa byahe ng buhay',
    },
    {
      src: '/invites/olympic.jpg',
      text: 'Mamamamasyal kami sa mga parks. Doon, magpapahinga kami sa tabi ng isat isa pag napapagod na sa mga pagsubok ng buhay',
    },
    {
      src: '/invites/baguio.jpg',
      text: 'Pupunta kaming Baguio. Doon, titignan namin kung gano pa kalaki ang mundong lalakbayin namin',
    },
    {
      src: '/invites/busan.jpg',
      text: 'Maghahanap kaming zombies sa Busan. Doon, maghahanap kami ng kasiyahan sa maliliit na bagay. Magpapakasaya kami kahit nasa panget kami na sitwasyon',
    },
    {
      src: '/invites/IMG_7237.jpg',
      text: 'Okay sige desidido na ko. Sya na nga',
    },
    {
      src: '/invites/IMG_7247.jpg',
      text: 'WILL YOU BE MY VALENTINE?',
    },
    {
      src: '/invites/namsan_lock.jpg',
      text: 'And they lived happily ever after...',
    },
  ]

  const [selected, setSelected] = React.useState(0)
  return (
    <div className="container flex">
      <Image
        alt={'Default Image'}
        className="z-0 h-screen w-full rounded-none"
        src={story[selected].src}
      />
      <div className="m-auto flex flex-col justify-center">
        <span className="max-w-[600px] text-wrap text-3xl font-bold">
          {story[selected].text}
        </span>
        <div className="flex flex-row justify-center gap-4">
          {selected > 0 && selected + 2 < story.length && (
            <Button
              color="primary"
              variant="solid"
              size="lg"
              className="mt-10 w-[200px]"
              radius="md"
              onClick={() => setSelected(selected - 1)}
            >
              <span className="text-md">BACK</span>
            </Button>
          )}
          {selected + 2 < story.length && (
            <Button
              color="primary"
              variant="solid"
              size="lg"
              className="mt-10 w-[200px]"
              radius="md"
              onClick={() => setSelected(selected + 1)}
            >
              <span className="text-md">NEXT</span>
            </Button>
          )}
          {selected + 2 == story.length && (
            <Button
              color="danger"
              variant="solid"
              size="lg"
              className="mt-10 w-[200px]"
              radius="md"
              onClick={() => setSelected(selected + 1)}
            >
              <span className="text-md">YESSSSS!!!!!</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
