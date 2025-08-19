/**
 * Performs a binary search on a sorted array.
 *
 * @param value - The value to search for.
 * @param array - A sorted array of values.
 * @returns The index of `value` in the array, or -1 if not found.
 */
export function binarySearch<T>(value: T, array: T[]): number {
    let low: number = 0
    let high: number = array.length - 1

    while (low <= high) {
        const mid: number = Math.floor((low + high) / 2)

        if (array[mid] == value) {
            return mid 
        }
        else if (array[mid] < value) {
            low = mid + 1
            
        }
        else if (array[mid] > value) {
            high = mid - 1
        }
    }

    return -1
}


