import { binarySearch } from '@/src/algorithms/search/binarySearch'

/**
 * Exponential Search Algorithm
 * 
 * Finds the position of a target value in a sorted array using exponential search.
 * First finds a range where the element is present, then uses binary search within
 * that range.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(log n) due to binary search on subarray
 * 
 * @param value - The target value to search for
 * @param array - The sorted array to search in
 * @returns The index of the target value, or -1 if not found
 */
export function exponentialSearch<T>(value: T, array: T[]): number {
    const length: number = array.length 

    if (length === 0) {
        return -1
    }

    if (array[0] === value) {
        return 0
    } 

    let bound = 1
    while (bound < length && array[bound] <= value) {
        bound *= 2
    }

    const low = Math.floor(bound / 2);
    const high = Math.min(bound, length);

    const result = binarySearch(value, array.slice(low, high));

    return result === -1 ? -1 : low + result;
}
