import { DayPicker, DateRange } from 'react-day-picker'
import { useState } from 'react'

export const Calendar = () => {
  const defaultSelected: DateRange = {
    from: new Date(),
    to: new Date(),
  }
  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >(defaultSelected)

  return (
    <>
      <div className="h-[350px] xl:hidden">
        <DayPicker
          mode="range"
          selected={selectedDateRange}
          onSelect={setSelectedDateRange}
          numberOfMonths={1}
          showOutsideDays={true}
          disabled={{ before: new Date() }}
        />
      </div>
      <div className="hidden h-[350px] xl:block">
        <DayPicker
          mode="range"
          selected={selectedDateRange}
          onSelect={setSelectedDateRange}
          numberOfMonths={2}
          disabled={{ before: new Date() }}
        />
      </div>
    </>
  )
}
