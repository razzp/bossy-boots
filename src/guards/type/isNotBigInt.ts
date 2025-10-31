import { isBigInt } from './isBigInt';

/**
 * Check that a value *does not* have a type of `bigint`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isNotBigInt<T>(value: T): value is Exclude<T, bigint> {
    return !isBigInt(value);
}

export { isNotBigInt };
