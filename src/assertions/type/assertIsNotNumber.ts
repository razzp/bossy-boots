import { isNumber } from '../../guards/type/isNumber';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function assertIsNotNumber<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'number'> {
    if (isNumber(value)) {
        throw new AssertionError('Value should not be number');
    }
}

export { assertIsNotNumber };
