import { isNotUndefined } from './isNotUndefined';

//import type { Undefined } from '../aliases/Undefined';

function isUndefined(value: unknown): value is undefined {
    return !isNotUndefined(value);
}

export { isUndefined };
