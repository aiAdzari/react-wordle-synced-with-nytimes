import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { solution } from '../../lib/words'
import { useState } from 'react'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

const haveSameWord = (solution: string) => {
  for (let i = 0; i < solution.length; i++) {
    if (solution.indexOf(solution[i], i + 1) >= 0) {
      return 'Y'
    }
  }
  return 'N'
}

export const AnswerModal = ({ isOpen, handleClose }: Props) => {
  const [IsAnswerShowUp, SetIsAnswerShowUp] = useState(false)

  return (
    <BaseModal title="Answer Hints" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
        Move your mouse over or click the black block to get hints. You can
        choose whatever prompt you want at the moment.
      </p>
      <hr />
      <p className="text-m text-gray-500 dark:text-gray-300 mt-4">
        1.The first letter of the word is:
      </p>
      <div className="flex justify-center mb-1 mt-3">
        <Cell isHidden={!IsAnswerShowUp} value={solution[0]} status="correct" />
      </div>
      <p className="text-m text-gray-500 dark:text-gray-300">
        2.The word has two or more identical letters: <br />
      </p>

      <div className="flex justify-center mb-1 mt-3">
        <div className="bg-black"></div>
        <Cell
          value={haveSameWord(solution)}
          status={haveSameWord(solution) === 'Y' ? 'correct' : 'absent'}
          isHidden={!IsAnswerShowUp}
        />
      </div>

      {IsAnswerShowUp ? (
        <div>
          <p className="text-m text-gray-500 dark:text-gray-300 mt-4">
            The word is :
          </p>
          <div className="flex justify-center mb-1 mt-4">
            <Cell
              value={solution[0]}
              status="correct"
              isRevealing={true}
              isCompleted={true}
            />
            <Cell value={solution[1]} status="correct" />
            <Cell value={solution[2]} status="correct" />
            <Cell value={solution[3]} status="correct" />
            <Cell value={solution[4]} status="correct" />
          </div>
        </div>
      ) : (
        <div>
          <p className="text-m text-gray-500 dark:text-gray-300 mt-4">
            If you still can't guess the word, you can click the button to get
            the final answer.
          </p>
          <button
            type="button"
            className="inline-flex justify-center items-center text-center mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              SetIsAnswerShowUp(true)
            }}
          >
            I give up
          </button>
        </div>
      )}

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        The above is the analysis of today's wordle, you can continue to play
        words on other dates or refresh, enjoy!
      </p>
    </BaseModal>
  )
}
