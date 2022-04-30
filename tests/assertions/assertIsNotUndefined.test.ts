import { assertIsNotUndefined } from '../../src/assertions/assertIsNotUndefined';
import { AssertionError } from '../../src/internal/AssertionError';

test('Given a non-undefined input, does not throw', () => {
    expect(() => assertIsNotUndefined('foo')).not.toThrowError();
});

test('Given an undefined input, throws', () => {
    expect(() => assertIsNotUndefined(undefined)).toThrowError(AssertionError);
});
