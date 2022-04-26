import { assertIsDefined } from '../assertions/assertIsDefined';

function guarantee<T>(value: T): NonNullable<T>;
function guarantee<T, U>(value: T, fallback: U): NonNullable<T | U>;
function guarantee(value: unknown, fallback?: unknown): NonNullable<unknown> {
    const result = value ?? fallback;

    assertIsDefined(result);

    return result;
}

export { guarantee };
