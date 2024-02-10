import React, { ReactNode } from 'react'
import { Checkbox, CheckboxGroup, cn } from '@nextui-org/react'
import { GiSwimfins, GiWeight } from 'react-icons/gi'
import { PiBowlFoodLight, PiBowlFoodFill } from 'react-icons/pi'
import { FaCar } from 'react-icons/fa'
import { MdOutlineBreakfastDining, MdFoodBank } from 'react-icons/md'

type Props = {
  icon: ReactNode
  label: string
  value: string
  price: string
}

const AddonOption = ({ icon, label, price, value }: Props) => {
  return (
    <Checkbox
      aria-label={value}
      classNames={{
        base: cn(
          'inline-flex max-w-md w-full bg-content1 m-0',
          'hover:bg-content2 items-center justify-start',
          'cursor-pointer gap-4 rounded-lg border-2 border-default p-4',
          'data-[selected=true]:border-primary',
        ),
        label: 'w-full',
      }}
      value={value}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon}
          <span className="ml-3 text-base font-semibold">{label}</span>
        </div>
        <span className="font-bold">&#8369;{price}</span>
      </div>
    </Checkbox>
  )
}

export const AddOns = () => {
  const [groupSelected, setGroupSelected] = React.useState<any[]>([])

  return (
    <div className="flex flex-row gap-1">
      <CheckboxGroup
        value={groupSelected}
        onValueChange={setGroupSelected}
        className="w-full"
      >
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex w-full flex-grow flex-col gap-4">
            <AddonOption
              value="finsL"
              icon={<GiSwimfins size={30} />}
              label="Long Fins"
              price="500"
            />
            <AddonOption
              value="finsS"
              icon={<GiSwimfins size={30} />}
              label="Short Fins"
              price="500"
            />
            <AddonOption
              value="weights"
              icon={<GiWeight size={30} />}
              label="Weights"
              price="250"
            />
            <AddonOption
              value="transport"
              icon={<FaCar size={30} />}
              label="Carpool"
              price="400"
            />
          </div>
          <div className="flex w-full flex-col gap-4">
            <AddonOption
              value="FBM"
              icon={<MdFoodBank size={30} />}
              label="Full Board Meals"
              price="1,000"
            />
            <AddonOption
              value="Breakfast"
              icon={<MdOutlineBreakfastDining size={30} />}
              label="Breakfast"
              price="250"
            />
            <AddonOption
              value="Lunch"
              icon={<PiBowlFoodLight size={30} />}
              label="Lunch"
              price="250"
            />
            <AddonOption
              value="Dinner"
              icon={<PiBowlFoodFill size={30} />}
              label="Dinner"
              price="250"
            />
          </div>
        </div>
      </CheckboxGroup>
    </div>
  )
}
