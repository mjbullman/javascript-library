import { describe, test, expect } from 'vitest'
import { interpolationSearch } from '@/src/algorithms/search/interpolationSearch'

describe('Interpolation Search Tests', () => {
     test('Finds element in middle', () => {
        const array = [0, 1, 2, 3, 4, 5, 6, 7]
        expect(interpolationSearch (5, array)).to.equal(5)
    })

    test('Finds element at start', () => {
        const array = [10, 20, 30, 40, 50]
        expect(interpolationSearch (10, array)).to.equal(0)
    })

    test('Finds element at end', () => {
        const array = [10, 20, 30, 40, 50]
        expect(interpolationSearch (50, array)).to.equal(4)
    })

    test('Returns -1 when element not found (smaller)', () => {
        const array = [10, 20, 30, 40, 50]
        expect(interpolationSearch (5, array)).to.equal(-1)
    })

    test('Returns -1 when element not found (larger)', () => {
        const array = [10, 20, 30, 40, 50]
        expect(interpolationSearch (60, array)).to.equal(-1)
    })

    test('Works with single-element array (found)', () => {
        const array = [42]
        expect(interpolationSearch (42, array)).to.equal(0)
    })

    test('Works with single-element array (not found)', () => {
        const array = [42]
        expect(interpolationSearch (7, array)).to.equal(-1)
    })

    test('Works with empty array', () => {
        const array: number[] = []
        expect(interpolationSearch (5, array)).to.equal(-1)
    })
})
