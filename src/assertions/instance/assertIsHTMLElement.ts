import { isNotHTMLElement } from '../../guards/instance/isNotHTMLElement';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value is an instance of `HTMLElement`.
 * @memberof Assertions.Instance
 * @since 1.2.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsHTMLElement(value: unknown): asserts value is HTMLElement {
    if (isNotHTMLElement(value)) {
        throw new AssertionError('Value should be Element');
    }
}

export { assertIsHTMLElement };
