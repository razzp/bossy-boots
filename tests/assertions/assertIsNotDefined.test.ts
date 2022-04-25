import { assertIsNotDefined } from '../../src/assertions/assertIsNotDefined';
import { AssertionError } from '../../src/internal/AssertionError';

test('Given a defined input, throws', () => {
    expect(() => assertIsNotDefined('foo')).toThrowError(AssertionError);
});

test('Given an undefined input, does not throw', () => {
    expect(() => assertIsNotDefined(null)).not.toThrowError();
    expect(() => assertIsNotDefined(undefined)).not.toThrowError();
});
