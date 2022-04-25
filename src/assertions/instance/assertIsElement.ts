import { isNotElement } from '../../guards/instance/isNotElement';
import { AssertionError } from '../../internal/AssertionError';

function assertIsElement(value: unknown): asserts value is Element {
    if (isNotElement(value)) {
        throw new AssertionError('Value should be an instance of Element.');
    }
}

export { assertIsElement };
