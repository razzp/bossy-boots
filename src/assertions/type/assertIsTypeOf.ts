import { isNotTypeOf } from '../../guards/type/isNotTypeOf';
import { AssertionError } from '../../internal/AssertionError';
import { toReadableList } from '../../internal/toReadableList';

import type { TypeMap } from '../../interfaces/TypeMap';
import type { TypeOf } from '../../aliases/TypeOf';

function assertIsTypeOf<T extends (keyof TypeMap)[]>(
    value: unknown,
    ...types: T
): asserts value is TypeOf<T> {
    if (isNotTypeOf(value, ...types)) {
        const expected = toReadableList(types);

        throw new AssertionError(`Value should be of type ${expected}.`);
    }
}

export { assertIsTypeOf };
