import { isElement } from '../../guards/instance/isElement';
import { AssertionError } from '../../internal/AssertionError';

function assertIsNotElement<T>(value: T): asserts value is Exclude<T, Element> {
    if (isElement(value)) {
        throw new AssertionError('Value should not be an instance of Element.');
    }
}

export { assertIsNotElement };
