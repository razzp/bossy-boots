import { isUndefined } from '../guards/isUndefined';
import { AssertionError } from '../internal/AssertionError';

import type { NotUndefined } from '../aliases/NotUndefined';

function assertIsNotUndefined<T>(value: T): asserts value is NotUndefined<T> {
    if (isUndefined(value)) {
        throw new AssertionError('Value is not defined.');
    }
}

export { assertIsNotUndefined };
