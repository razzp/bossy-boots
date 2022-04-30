import { assertIsUndefined } from '../../src/assertions/assertIsUndefined';
import { AssertionError } from '../../src/internal/AssertionError';

test('Given a defined input, throws', () => {
    expect(() => assertIsUndefined('foo')).toThrowError(AssertionError);
});

test('Given an undefined input, does not throw', () => {
    expect(() => assertIsUndefined(undefined)).not.toThrowError();
});
