/**
 * Interpolation Search Algorithm
 * 
 * Finds the position of a target value in a sorted array using interpolation search.
 * Repeatedly divides the search interval 
 * 
 * Time Complexity: O(log(log(n)))
 * Space Complexity: O(1)
 * 
 * @param value - The target value to search for
 * @param array - The sorted array to search in
 * @returns The index of the target value, or -1 if not found
 */

export function interpolationSearch<T>(value: T, array: T[]): number {
    let low = 0;
    let high = array.length - 1;

    while (low <= high && value >= array[low] && value <= array[high]) {
        if (low === high) {
            return array[low] === value ? low : -1;
        }

        if (array[low] === array[high]) {
            return array[low] === value ? low : -1;
        }

        let mid = low + Math.floor(
            ((value - array[low]) * (high - low)) /
            (array[high] - array[low])
        );

        mid = Math.max(low, Math.min(mid, high)); // clamp

        if (array[mid] === value) {
            return mid;
        } else if (array[mid] < value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

