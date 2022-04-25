import type { Defined } from '../aliases/Defined';

function isDefined<T>(value: T): value is Defined<T> {
    return value !== null && value !== undefined;
}

export { isDefined };
