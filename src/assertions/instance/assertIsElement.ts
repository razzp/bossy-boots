import { isNotElement } from '../../guards/instance/isNotElement';
import { AssertionError } from '../../internal/AssertionError';

import type { InstanceOf } from '../../aliases/InstanceOf';

function assertIsElement<TValue>(
    value: TValue
): asserts value is InstanceOf<TValue, typeof Element> {
    if (isNotElement(value)) {
        throw new AssertionError('Value should be an instance of Element.');
    }
}

export { assertIsElement };
