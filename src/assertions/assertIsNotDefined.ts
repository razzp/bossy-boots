import { isDefined } from '../guards/isDefined';
import { AssertionError } from '../internal/AssertionError';

import type { NotDefined } from '../aliases/NotDefined';

function assertIsNotDefined<T>(value: T): asserts value is NotDefined<T> {
    if (isDefined(value)) {
        throw new AssertionError('Value should not be defined.');
    }
}

export { assertIsNotDefined };
