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
    <p>You selected {format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  )

  return (
    <BaseModal
      title="Choose a day to game!"
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
