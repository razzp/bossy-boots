import { isElement } from './isElement';

/**
 * Check that a value is *not* an instance of `Element`.
 *
 * @param value - The value to assert
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isNotElement<T>(
    value: T,
): value is Exclude<T, InstanceType<typeof Element>> {
    return !isElement(value);
}

export { isNotElement };
