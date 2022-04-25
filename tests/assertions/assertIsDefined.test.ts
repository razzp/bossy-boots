import { assertIsDefined } from '../../src/assertions/assertIsDefined';
import { AssertionError } from '../../src/internal/AssertionError';

test('Given a defined input, does not throw', () => {
    expect(() => assertIsDefined('foo')).not.toThrowError();
});

test('Given an undefined input, throws', () => {
    expect(() => assertIsDefined(null)).toThrowError(AssertionError);
    expect(() => assertIsDefined(undefined)).toThrowError(AssertionError);
});
