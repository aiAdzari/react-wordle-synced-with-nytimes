import {
  getIndex,
  getLastGameDate,
  getNextGameDate,
  getWordOfDay,
} from './words'

describe('solutionIndex', () => {
  test('last game date', () => {
    expect(getLastGameDate(new Date(2022, 5, 17))).toEqual(
      new Date(2022, 5, 17)
    )
    expect(getLastGameDate(new Date(2022, 5, 18))).toEqual(
      new Date(2022, 5, 18)
    )
    expect(getLastGameDate(new Date(2022, 5, 18, 15, 42, 0))).toEqual(
      new Date(2022, 5, 18)
    )

    expect(getLastGameDate(new Date(2022, 5, 23, 15, 42, 0))).toEqual(
      new Date(2022, 5, 23)
    )

    expect(getLastGameDate(new Date(2022, 5, 24))).toEqual(
      new Date(2022, 5, 24)
    )
    expect(getLastGameDate(new Date(2022, 5, 25))).toEqual(
      new Date(2022, 5, 25)
    )
    expect(getLastGameDate(new Date(2022, 5, 25, 15, 42, 0))).toEqual(
      new Date(2022, 5, 25)
    )
  })

  test('next game date', () => {
    expect(getNextGameDate(new Date(2022, 5, 17))).toEqual(
      new Date(2022, 5, 18)
    )
    expect(getNextGameDate(new Date(2022, 5, 18))).toEqual(
      new Date(2022, 5, 19)
    )
    expect(getNextGameDate(new Date(2022, 5, 18, 15, 42, 0))).toEqual(
      new Date(2022, 5, 19)
    )

    expect(getNextGameDate(new Date(2022, 5, 23, 15, 42, 0))).toEqual(
      new Date(2022, 5, 24)
    )

    expect(getNextGameDate(new Date(2022, 5, 24))).toEqual(
      new Date(2022, 5, 25)
    )
    expect(getNextGameDate(new Date(2022, 5, 25))).toEqual(
      new Date(2022, 5, 26)
    )
    expect(getNextGameDate(new Date(2022, 5, 25, 15, 42, 0))).toEqual(
      new Date(2022, 5, 26)
    )
  })

  test('index', () => {
    expect(getIndex(new Date(2022, 6, 28))).toEqual(404)

    expect(getIndex(new Date(2022, 6, 29))).toEqual(405)
    expect(getIndex(new Date(2022, 6, 30))).toEqual(406)
    expect(getIndex(new Date(2022, 6, 28, 15, 42, 0))).toEqual(404)

    expect(getIndex(new Date(2022, 6, 29, 15, 42, 0))).toEqual(405)

    expect(getIndex(new Date(2022, 6, 30))).toEqual(406)
  })

  test('word of the day', () => {
    expect(() => getWordOfDay(-1)).toThrowError('Invalid index')
    expect(getWordOfDay(0)).toEqual('CIGAR')
    expect(getWordOfDay(1)).toEqual('REBUT')
    expect(getWordOfDay(255)).toEqual('RUPEE')
  })
})
