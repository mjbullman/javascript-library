/**
 * Bubble Sort Algorithm
 * 
 * Repeatedly steps through the array, compares adjacent elements,
 * and swaps them if they are in the wrong order. This process is
 * repeated until the array is sorted. Works with numbers, strings,
 * or objects using a custom comparator function.
 * 
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @template T - The type of elements in the array
 * @param array - The array to sort
 * @param compareFn - Comparator function returning:
 *   - a negative number if a < b
 *   - 0 if a == b
 *   - a positive number if a > b
 * @returns The sorted array
 */
export function bubbleSort<T>(data: T[], compareFn: (a: T, b: T) => number): T[] {
    let swapped: boolean
    const length: number = data.length

    do {
        swapped = false

        for (let i = 0; i < length - 1; i++) {
            if (compareFn(data[i], data[i + 1]) > 0) {
                [data[i], data[i + 1]] = [data[i + 1], data[i]]
                swapped = true
            }
        }
    }
    while (swapped)

    return data
}
