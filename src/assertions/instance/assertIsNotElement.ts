import { isElement } from '../../guards/instance/isElement';
import { AssertionError } from '../../internal/AssertionError';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

function assertIsNotElement<TValue>(
    value: TValue
): asserts value is NotInstanceOf<TValue, typeof Element> {
    if (isElement(value)) {
        throw new AssertionError('Value should not be Element');
    }
}

export { assertIsNotElement };
