import React, { ReactNode } from 'react'
import { Checkbox, CheckboxGroup, RadioGroup, cn } from '@nextui-org/react'
import { GiSwimfins, GiWeight } from 'react-icons/gi'
import { PiBowlFoodLight } from 'react-icons/pi'
import { FaCar } from 'react-icons/fa'

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
    <div className="flex w-full flex-col gap-1">
      <CheckboxGroup
        value={groupSelected}
        onValueChange={setGroupSelected}
        classNames={{
          base: 'w-full',
        }}
      >
        <AddonOption
          value="fins"
          icon={<GiSwimfins size={30} />}
          label="Fins Rental"
          price="500"
        />
        <RadioGroup size="sm"></RadioGroup>
        <AddonOption
          value="weights"
          icon={<GiWeight size={30} />}
          label="Weights Rental"
          price="250"
        />
        <AddonOption
          value="food"
          icon={<PiBowlFoodLight size={30} />}
          label="Food"
          price="300"
        />
        <AddonOption
          value="transport"
          icon={<FaCar size={30} />}
          label="Carpool"
          price="400"
        />
      </CheckboxGroup>
    </div>
  )
}
