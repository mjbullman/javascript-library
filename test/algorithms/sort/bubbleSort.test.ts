import { describe, expect, test } from 'vitest'
import { bubbleSort } from '@/src/algorithms/sort/bubbleSort'

describe('Bubble Sort Tests', () => {
  test('Sort numbers in ascending order', () => {
    const array = [64, 34, 25, 12, 22, 11, 90]
    const sorted = [11, 12, 22, 25, 34, 64, 90]

    expect(bubbleSort(array, (a, b) => a - b)).toEqual(sorted)
  })

  test('Sort numbers in descending order', () => {
    const array = [64, 34, 25, 12, 22, 11, 90]
    const sorted = [90, 64, 34, 25, 22, 12, 11]

    expect(bubbleSort(array, (a, b) => b - a)).toEqual(sorted)
  })

  test('Sort strings alphabetically', () => {
    const array = ['banana', 'apple', 'cherry']
    const sorted = ['apple', 'banana', 'cherry']

    expect(bubbleSort(array, (a, b) => a.localeCompare(b))).toEqual(sorted)
  })

  test('Sort objects by age property', () => {
    const people = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 20 },
      { name: 'Charlie', age: 25 }
    ]

    const sorted = [
      { name: 'Bob', age: 20 },
      { name: 'Charlie', age: 25 },
      { name: 'Alice', age: 30 }
    ]

    expect(bubbleSort(people, (a, b) => a.age - b.age)).toEqual(sorted)
  })

  test('Empty array stays empty', () => {
    const array: number[] = []
    expect(bubbleSort(array, (a, b) => a - b)).toEqual([])
  })

  test('Single element array stays unchanged', () => {
    const array = [42]
    expect(bubbleSort(array, (a, b) => a - b)).toEqual([42])
  })
})

