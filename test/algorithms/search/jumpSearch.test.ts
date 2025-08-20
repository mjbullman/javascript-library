import { describe, expect, test } from 'vitest'
import { jumpSearch } from '@/src/algorithms/search/jumpSearch'

describe('Jump Search Tests', () => {
    test('Finds element in middle', () => {
        const array = [0, 1, 2, 3, 4, 5, 6, 7]
        expect(jumpSearch(5, 2, array)).to.equal(5)
    })

    test('Finds element at start', () => {
        const array = [10, 20, 30, 40, 50]
        expect(jumpSearch(10, 2, array)).to.equal(0)
    })

    test('Finds element at end', () => {
        const array = [10, 20, 30, 40, 50]
        expect(jumpSearch(50, 2, array)).to.equal(4)
    })

    test('Returns -1 when element not found (smaller)', () => {
        const array = [10, 20, 30, 40, 50]
        expect(jumpSearch(5, 3, array)).to.equal(-1)
    })

    test('Returns -1 when element not found (larger)', () => {
        const array = [10, 20, 30, 40, 50]
        expect(jumpSearch(60, 2, array)).to.equal(-1)
    })

    test('Works with single-element array (found)', () => {
        const array = [42]
        expect(jumpSearch(42, 4, array)).to.equal(0)
    })

    test('Works with single-element array (not found)', () => {
        const array = [42]
        expect(jumpSearch(7, 2, array)).to.equal(-1)
    })

    test('Works with empty array', () => {
        const array: number[] = []
        expect(jumpSearch(5, 5, array)).to.equal(-1)
    })

    test('Works with strings', () => {
        const array = ['a', 'b', 'c', 'd', 'e']
        expect(jumpSearch('c', 2, array)).to.equal(2)
        expect(jumpSearch('z', 2, array)).to.equal(-1)
    })
})

