/**
 * @param {number} num 
 * @returns {boolean}
 */
export default function isEven(num) {
    switch (num) {
        case 0:
            return true
        case 1:
            return false
        case -1:
            return false
        case 2:
            return true
        case -2:
            return true
        default:
            throw 'The number is not in the given range!'
    }
}