import { isNotTypeOf } from '../../guards/type/isNotTypeOf';
import { AssertionError } from '../../internal/AssertionError';
import { toReadableList } from '../../internal/toReadableList';

import type { PrimitivesMap } from '../../interfaces/PrimitivesMap';
import type { TypeOf } from '../../aliases/TypeOf';

function assertIsTypeOf<TTypes extends (keyof PrimitivesMap)[]>(
    value: unknown,
    ...types: TTypes
): asserts value is TypeOf<TTypes> {
    if (isNotTypeOf(value, ...types)) {
        const expected = toReadableList(types);

        throw new AssertionError(`Value should be of type ${expected}.`);
    }
}

export { assertIsTypeOf };
