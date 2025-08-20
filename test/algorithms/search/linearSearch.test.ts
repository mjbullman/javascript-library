import { test, expect, describe } from 'vitest'
import { linearSearch } from '@/src/algorithms/search/linearSearch'

describe('Linear Search Test', () => {  
    test('Find item in the middle of the array', () => {
        const array = [0,1,2,3,4,5,6,7,8]
        const value = 5

        expect(linearSearch(value, array)).to.equal(5)
    })

    test('Find item at beginning of the array', () => {
        const array = [22,10,5,3,45,5,12,9,10]
        const value = 22

        expect(linearSearch(value, array)).to.equal(0)
    })

    test('Find item at the end of the array', () => {
        const array = [9,8,7,6,5,4,3,2,1]
        const value = 1

        expect(linearSearch(value, array)).to.equal(8)
    })


    test('Returns -1 when item not found', () => {
        const array = [12,66,2,8,4,66,33,12,67,89,34,23,1212,0]
        const value = 111

        expect(linearSearch(value, array)).to.equal(-1)
    })

   test('Find string item in the middle of the array', () => {
        const array = ['a','b','c','d']
        const value = 'd'

        expect(linearSearch(value, array)).to.equal(3)
    })
})
