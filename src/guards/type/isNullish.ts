import type { Nullish } from '../../aliases/Nullish';

function isNullish<T>(value: T): value is Nullish<T> {
    return value === null || value === undefined;
}

export { isNullish };
