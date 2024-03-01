import React, { ReactNode } from 'react'
import { RadioGroup, useRadio, VisuallyHidden, cn } from '@nextui-org/react'

type Props = {
  description: string
  value: string
  children: ReactNode
  price: string
}
const PackageOption = (props: Props) => {
  const {
    Component,
    children,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props)

  const { price } = props

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        'tap-highlight-transparent group inline-flex flex-row-reverse items-center justify-between hover:opacity-70 active:opacity-50',
        'border-default cursor-pointer gap-4 rounded-lg border-2 p-4 md:w-[200px]',
        'data-[selected=true]:border-primary',
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-foreground opacity-70">
            {description}
          </span>
        )}
        <span className="mt-4 text-lg font-bold">&#8369;{price}</span>
      </div>
    </Component>
  )
}

export const PackageSelection = () => {
  return (
    <RadioGroup size="sm">
      <div className="flex flex-col flex-wrap gap-2 md:flex-row">
        <PackageOption
          description="Introduction to freeediving"
          price="1,750"
          value="1"
        >
          <span className="text-base font-bold">Introduction</span>
        </PackageOption>
        <PackageOption
          description="Fun dive with coaches"
          price="750"
          value="2"
        >
          <span className="text-base font-bold">Fun Dive</span>
        </PackageOption>
        <PackageOption
          description="Stay the night for socials"
          price="1,300"
          value="1F"
        >
          <span className="text-base font-bold">Accomodation</span>
        </PackageOption>
      </div>
    </RadioGroup>
  )
}
