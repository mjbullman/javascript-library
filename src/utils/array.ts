/**
 * Splits an array into multiple sub-arrays (chunks) of the given size.
 *
 * @param array - Initial array to chunk.
 * @param size - The chunk size.
 * @returns A new array containing sub-arrays of up to `size` elements each.
 */
export function chunk<T>(array: T[], size: number): T[][] {
    let chunked_array: T[][] = []

    for (let i = 0; i < array.length; i += size) {
        chunked_array.push(array.slice(i, i + size))
    }

    return chunked_array
}

