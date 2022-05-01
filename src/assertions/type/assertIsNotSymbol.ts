import { isSymbol } from '../../guards/type/isSymbol';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function assertIsNotSymbol<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'symbol'> {
    if (isSymbol(value)) {
        throw new AssertionError('Value should not be symbol');
    }
}

export { assertIsNotSymbol };
