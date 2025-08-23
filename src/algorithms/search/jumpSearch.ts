/**
 * Performs jump search on an array. 
 *
 * @param value The number to search for
 * @param jump Step size for the jump search
 * @param array Sorted array of numbers
 *
 * @returns Index of the value, or -1 if not found
*/
export function jumpSearch<T>(value: T, array: T[]): number {
    let low: number = 0
    const length: number = array.length
    const step: number = Math.round(Math.sqrt(length))

    while (array[Math.min(step + low, length)] < value) {
        low += step
        if (low >= length) {
            return -1
        }
    }

    const high = Math.min(low + step, array.length);
    
    for (let i = low; i <= high; i++) {
        if (value === array[i]) {
            return i
        }
    }

    return -1
}
