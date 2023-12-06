import { isBigInt } from './isBigInt';

/**
 * Check that a value *does not* have a type of `bigint`.
 * @memberof Guards.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotBigInt<T>(value: T): value is Exclude<T, bigint> {
    return !isBigInt(value);
}

export { isNotBigInt };
