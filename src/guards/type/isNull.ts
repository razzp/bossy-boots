import type { TypeOf } from '../../aliases/TypeOf';

function isNull<TValue>(value: TValue): value is TypeOf<TValue, 'null'> {
    return value === null;
}

export { isNull };
