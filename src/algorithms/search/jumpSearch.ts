/**
 * Performs jump search on an array. 
 *
 * @param value The number to search for
 * @param jump Step size for the jump search
 * @param array Sorted array of numbers
 *
 * @returns Index of the value, or -1 if not found
*/
export function jumpSearch<T>(value: T, jump: number, array: T[]): number {
    let low: number = 0
    const length: number = array.length - 1 

    for (let i = 0; i <= length; i += jump) {
        if (value === array[i]) {
            return i
        }
        else if (value < array[i]) {
            low = i - jump
            break
        }

        // keep track of the last block start.
        low = i
    }

    const high = Math.min(low + jump, array.length - 1);
    
    for (let i = low; i <= high; i++) {
        if (value === array[i]) {
            return i
        }
    }

    return -1
}
