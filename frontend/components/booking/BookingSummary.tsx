import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@nextui-org/react'

type ButtonProps = {
  isFull?: boolean
}
const ReservationButton = (props: ButtonProps) => {
  const { isFull = false } = props
  return (
    <Button
      color="primary"
      variant="solid"
      size="lg"
      radius="md"
      {...(isFull && { className: 'w-full' })}
    >
      <span className="text-base font-bold">Reserve</span>
    </Button>
  )
}

export const BookingSummary = () => {
  return (
    <>
      <div className="hidden md:block">
        <Card shadow={'lg'} className="ml-auto min-w-[250px] max-w-[400px] p-3">
          <CardHeader className="gap-3">
            <span className="text-2xl font-semibold">Summary</span>
          </CardHeader>
          <CardBody className="mt-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between">
                <span className="text-base">Introduction</span>
                <span className="text-base">&#8369;1,750 PHP</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-base">Long fins rental</span>
                <span className="text-base">&#8369;500 PHP</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-base">Weights rental</span>
                <span className="text-base">&#8369;250 PHP</span>
              </div>
              <Divider className="self-center" />
              <div className="flex flex-row justify-between">
                <span className="text-lg font-bold">Total</span>
                <span className="text-lg font-bold">&#8369;2,500 PHP</span>
              </div>
            </div>
          </CardBody>
          <CardFooter>
            <ReservationButton isFull />
          </CardFooter>
        </Card>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 flex h-20 w-full border-t-[1px] border-solid border-gray-300 bg-white py-1.5 md:hidden">
        <div className="container mx-auto flex w-full items-center justify-between px-6 lg:px-10 xl:px-20 2xl:px-48">
          <div className="flex flex-col">
            <span className="text-base font-bold">&#8369;2,500 PHP</span>
            <span className=" font-semibold underline">Jan. 7-8</span>
          </div>
          <ReservationButton />
        </div>
      </div>
    </>
  )
}
