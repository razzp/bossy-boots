import { isNotElement } from '../../guards/instance/isNotElement';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value is an instance of `Element`.
 * @memberof Assertions.Instance
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsElement(value: unknown): asserts value is Element {
    if (isNotElement(value)) {
        throw new AssertionError('Value should be Element');
    }
}

export { assertIsElement };
