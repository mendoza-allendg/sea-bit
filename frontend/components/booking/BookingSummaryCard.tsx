import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@nextui-org/react'

export const BookingSummaryCard = () => {
  return (
    <Card shadow={'lg'} className="ml-auto min-w-[250px] max-w-[400px] p-3">
      <CardHeader className="gap-3">
        <span className="text-2xl">Summary</span>
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
        <Button
          color="primary"
          variant="solid"
          size="lg"
          radius="md"
          className="w-full"
        >
          <span className="text-base font-bold">Reserve</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
