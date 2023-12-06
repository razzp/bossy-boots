import { isHTMLElement } from '../../guards/instance/isHTMLElement';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value is *not* an instance of `HTMLElement`.
 * @memberof Assertions.Instance
 * @since 1.2.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotHTMLElement<T>(
    value: T
): asserts value is Exclude<T, InstanceType<typeof HTMLElement>> {
    if (isHTMLElement(value)) {
        throw new AssertionError('Value should not be HTMLElement');
    }
}

export { assertIsNotHTMLElement };
