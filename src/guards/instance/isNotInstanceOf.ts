import { isInstanceOf } from './isInstanceOf';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

function isNotInstanceOf<TValue, TPrototypes extends Function[]>(
    value: TValue,
    ...prototypes: TPrototypes
): value is NotInstanceOf<TValue, TPrototypes> {
    return !isInstanceOf(value, ...prototypes);
}

export { isNotInstanceOf };
