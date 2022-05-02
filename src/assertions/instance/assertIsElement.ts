import { isNotElement } from '../../guards/instance/isNotElement';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that value is an instance of `Element`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsElement(value: unknown): asserts value is Element {
    if (isNotElement(value)) {
        throw new AssertionError('Value should be Element');
    }
}

export { assertIsElement };
