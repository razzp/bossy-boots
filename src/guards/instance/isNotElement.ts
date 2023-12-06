import { isElement } from './isElement';

/**
 * Check that a value is *not* an instance of `Element`.
 * @memberof Guards.Instance
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {boolean}
 */
function isNotElement<T>(
    value: T
): value is Exclude<T, InstanceType<typeof Element>> {
    return !isElement(value);
}

export { isNotElement };
