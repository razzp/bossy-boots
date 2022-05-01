import { isNotTypeOf } from '../../guards/type/isNotTypeOf';
import { AssertionError } from '../../internal/AssertionError';
import { toReadableList } from '../../internal/toReadableList';

import type { TypeOf } from '../../aliases/TypeOf';
import type { Primitive } from '../../aliases/Primitive';

function assertIsTypeOf<TTypes extends Primitive[]>(
    value: unknown,
    ...types: TTypes
): asserts value is TypeOf<TTypes> {
    if (isNotTypeOf(value, ...types)) {
        throw new AssertionError(`Value should be ${toReadableList(types)}`);
    }
}

export { assertIsTypeOf };
