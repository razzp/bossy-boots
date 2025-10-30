import { assertIsNotUndefined } from '../../../src/assertions/type/assertIsNotUndefined';
import { AssertionError } from '../../../src/AssertionError';

test('Given a non-undefined input, does not throw', () => {
    expect(() => assertIsNotUndefined('foo')).not.toThrow();
});

test('Given an undefined input, throws', () => {
    expect(() => assertIsNotUndefined(undefined)).toThrow(AssertionError);
});
