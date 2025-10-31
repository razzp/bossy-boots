import { AssertionError } from '../../AssertionError';
import { isNotElement } from '../../guards/instance/isNotElement';

/**
 * Assert that a value is an instance of `Element`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsElement(value: unknown): asserts value is Element {
    if (isNotElement(value)) {
        throw new AssertionError('Value should be Element');
    }
}

export { assertIsElement };
