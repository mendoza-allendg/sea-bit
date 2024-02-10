
import React, { ReactNode } from "react";
import {RadioGroup, useRadio, VisuallyHidden, cn} from "@nextui-org/react";

type Props = {
  description: string;
  value: string
  children: ReactNode
  price: string
}
export const CustomRadio = (props: Props) => {
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
  } = useRadio(props);

  const { price } = props;

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
        "max-w-[350px] cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
        "data-[selected=true]:border-primary",
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
          <span className="text-small text-foreground opacity-70">{description}</span>
        )}
        <span className="font-bold text-lg mt-4">&#8369;{price}</span>
      </div>
    </Component>
  );
};

export const PackageSelection = () => {
  return (
    <RadioGroup>
      <div className="flex flex-col sm:flex-row gap-2">
      <CustomRadio description="Introduction to freeediving" price="1,750" value="1">
        <span className="font-bold text-base">Introduction</span>
      </CustomRadio>
      <CustomRadio description="Fun dive with coaches" price="750" value="2">
        <span className="font-bold text-base">Fun Dive</span>
      </CustomRadio>
      <CustomRadio description="Stay the night for socials" price="1,300" value="1F">
        <span className="font-bold text-base">Accomodation</span>
      </CustomRadio>
      </div>
    </RadioGroup>
  );
}