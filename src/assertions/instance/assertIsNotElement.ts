import { isElement } from '../../guards/instance/isElement';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value is *not* an instance of `Element`.
 * @memberof Assertions.Instance
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotElement<T>(
    value: T
): asserts value is Exclude<T, InstanceType<typeof Element>> {
    if (isElement(value)) {
        throw new AssertionError('Value should not be Element');
    }
}

export { assertIsNotElement };
