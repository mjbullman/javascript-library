/**
 * Check if two opjects are the same.
 *
 * @param firstObject - first object used in comparision.
 * @param secondObject - second objetc used in comparison.
 */
export function isSame(firstObject: any, secondObject: any): boolean {
    if (
        firstObject === null ||
        firstObject === undefined ||
        secondObject === null ||
        secondObject === undefined
    ) {
        return false;
    }

    for (const key in firstObject) {
        console.log(key)
    }

    return true
}

/**
 * Check if provided object is empty
 *
 * @param object - the param we will check if empty.
 */
export function isEmpty(object: any): boolean {
    if (object === null || object === undefined) {
        return true
    }

    // if not an object then cannot be empty.
    if (typeof object !== 'object') {
        return false
    }

    // if the object has keys then its not empty.
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            return false
        }
    }

    return true
}
