import type { TypeOf } from '../../aliases/TypeOf';

function isUndefined<TValue>(
    value: TValue
): value is TypeOf<TValue, 'undefined'> {
    return value === undefined;
}

export { isUndefined };
