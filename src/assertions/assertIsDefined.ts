import { isNotDefined } from '../guards/isNotDefined';
import { AssertionError } from '../internal/AssertionError';

import type { Defined } from '../aliases/Defined';

function assertIsDefined<T>(value: T): asserts value is Defined<T> {
    if (isNotDefined(value)) {
        throw new AssertionError('Value is not defined.');
    }
}

export { assertIsDefined };
