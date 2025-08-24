/**
 * Linear Search Algorithm
 * 
 * Finds the position of a target value in an array by checking each element
 * sequentially from start to end until the target is found or array ends.
 * Works on both sorted and unsorted arrays.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * @param value - The target value to search for
 * @param array - The array to search in
 * @returns The index of the target value, or -1 if not found
 */
export function linearSearch<T> (value: T, array: T[]): number {
    for(let i = 0; i <= array.length - 1; i++) {
        if (value == array[i]) {
            return i 
        }
    }
    
    return -1
}
