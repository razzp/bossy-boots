import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

function isNullish(value: unknown): value is null | undefined {
    return isNull(value) || isUndefined(value);
}

export { isNullish };
