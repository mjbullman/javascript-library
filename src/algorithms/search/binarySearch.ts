/**
 * Binary Search Algorithm
 * 
 * Finds the position of a target value in a sorted array using binary search.
 * Repeatedly divides the search interval in half by comparing the target with 
 * the middle element.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * @param value - The target value to search for
 * @param array - The sorted array to search in
 * @returns The index of the target value, or -1 if not found
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


