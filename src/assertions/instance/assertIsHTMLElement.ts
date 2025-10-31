import { AssertionError } from '../../AssertionError';
import { isNotHTMLElement } from '../../guards/instance/isNotHTMLElement';

/**
 * Assert that a value is an instance of `HTMLElement`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsHTMLElement(value: unknown): asserts value is HTMLElement {
    if (isNotHTMLElement(value)) {
        throw new AssertionError('Value should be Element');
    }
}

export { assertIsHTMLElement };
