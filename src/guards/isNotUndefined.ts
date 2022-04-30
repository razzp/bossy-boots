import type { NotUndefined } from '../aliases/NotUndefined';

function isNotUndefined<T>(value: T): value is NotUndefined<T> {
    return value !== undefined;
}

export { isNotUndefined };
