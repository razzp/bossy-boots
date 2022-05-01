import type { TypeOf } from '../../aliases/TypeOf';

function isNullish<TValue>(
    value: TValue
): value is TypeOf<TValue, 'null' | 'undefined'> {
    return value === null || value === undefined;
}

export { isNullish };
