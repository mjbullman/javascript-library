/**
 * Performs linear seach on an array.
 *
 * @param value - The value to seach for.
 * @param array - The array to search in.
 */
export function linearSearch<T> (value: T, array: T[]): number {
    for(let i = 0; i <= array.length - 1; i++) {
        if (value == array[i]) {
            return i 
        }
    }
    
    return -1
}
