import { assertIsDefined } from '../assertions/assertIsDefined';

function guarantee<T, U = T>(value: T, fallback?: U): NonNullable<T | U> {
    const result = value ?? fallback;

    assertIsDefined(result);

    return result;
}

export { guarantee };
