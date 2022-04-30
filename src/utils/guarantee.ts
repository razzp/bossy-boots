import { assertIsNotNullish } from '../assertions/assertIsNotNullish';

function guarantee<T>(value: T): NonNullable<T>;
function guarantee<T, U>(value: T, fallback: U): NonNullable<T | U>;
function guarantee(value: unknown, fallback?: unknown): NonNullable<unknown> {
    const result = value ?? fallback;

    assertIsNotNullish(result);

    return result;
}

export { guarantee };
