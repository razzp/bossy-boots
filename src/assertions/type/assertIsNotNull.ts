import { isNull } from '../../guards/type/isNull';
import { AssertionError } from '../../internal/AssertionError';

import type { NotNull } from '../../aliases/NotNull';

function assertIsNotNull<T>(value: T): asserts value is NotNull<T> {
    if (isNull(value)) {
        throw new AssertionError('Value is null.');
    }
}

export { assertIsNotNull };
