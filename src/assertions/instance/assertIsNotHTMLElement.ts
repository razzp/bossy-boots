import { isHTMLElement } from '../../guards/instance/isHTMLElement';
import { AssertionError } from '../../AssertionError';

/**
 * Assert that a value is *not* an instance of `HTMLElement`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsNotHTMLElement<T>(
    value: T
): asserts value is Exclude<T, InstanceType<typeof HTMLElement>> {
    if (isHTMLElement(value)) {
        throw new AssertionError('Value should not be HTMLElement');
    }
}

export { assertIsNotHTMLElement };
