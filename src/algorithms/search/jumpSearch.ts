/**
 * Jump Search Algorithm
 * 
 * Finds the position of a target value in a sorted array using jump search.
 * Jumps ahead by fixed steps to find a range, then performs linear search 
 * within that range.
 * 
 * Time Complexity: O(√n)
 * Space Complexity: O(1)
 * 
 * @param value - The target value to search for
 * @param array - The sorted array to search in
 * @returns The index of the target value, or -1 if not found
 */
export function jumpSearch<T>(value: T, array: T[]): number {
    let low: number = 0
    const length: number = array.length
    const step: number = Math.round(Math.sqrt(length))

    if (length === 0) {
        return -1;
    }

    while (low < length && array[Math.min(low + step, length - 1)] < value) {
        low += step
        if (low >= length) {
            return -1
        }
    }

    const high = Math.min(low + step, length - 1);
    
    for (let i = low; i <= high; i++) {
        if (value === array[i]) {
            return i
        }
    }

    return -1
}
