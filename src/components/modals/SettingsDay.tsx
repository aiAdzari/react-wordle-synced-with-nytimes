import { BaseModal } from './BaseModal'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { useState } from 'react'
import { format } from 'date-fns'

type Props = {
  isOpen: boolean
  handleClose: () => void
  selectedDay: Date
  selectedDayFlag: Function
}

export const DayModal = ({ isOpen, handleClose, selectedDayFlag }: Props) => {
  const [selectedDay, setSelectedDay] = useState<Date>()

  const footer = selectedDay ? (
    <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
      You selected {format(selectedDay, 'PPP')}.
    </p>
  ) : (
    <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
      {' '}
      Which day's nytimes word do you want to play?
    </p>
  )

  return (
    <BaseModal
      title="Historical Backtrack"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <DayPicker
        fromDate={new Date(2022, 5, 19)}
        toDate={new Date()}
        mode={'single'}
        selected={selectedDay}
        onSelect={setSelectedDay}
        footer={footer}
      />
      <button
        type="button"
        className="inline-flex justify-center items-center text-center mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
        onClick={() => {
          selectedDayFlag(selectedDay)
          window.location.reload()
        }}
      >
        go
      </button>
    </BaseModal>
  )
}
