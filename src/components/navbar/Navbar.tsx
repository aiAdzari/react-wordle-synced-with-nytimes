import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
  RefreshIcon,
} from '@heroicons/react/outline'
import { GAME_TITLE } from '../../constants/strings'
import { CalendarIcon } from '@heroicons/react/solid'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsDayModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
  setRefresh: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsDayModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
  setRefresh,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5">
        <div className="right-icons">
          <InformationCircleIcon
            className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
          <CalendarIcon
            className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
            onClick={() => setIsDayModalOpen(true)}
          />
        </div>
        <p className="text-xl ml-2.5 font-bold dark:text-white">{GAME_TITLE}</p>
        <div className="right-icons">
          <RefreshIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setRefresh(true)}
          />
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
