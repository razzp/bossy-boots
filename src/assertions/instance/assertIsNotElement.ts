import { AssertionError } from '../../AssertionError';
import { isElement } from '../../guards/instance/isElement';

/**
 * Assert that a value is *not* an instance of `Element`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsNotElement<T>(
    value: T,
): asserts value is Exclude<T, InstanceType<typeof Element>> {
    if (isElement(value)) {
        throw new AssertionError('Value should not be Element');
    }
}

export { assertIsNotElement };
