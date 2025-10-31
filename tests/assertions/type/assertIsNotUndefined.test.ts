import { AssertionError } from '../../../src/AssertionError';
import { assertIsNotUndefined } from '../../../src/assertions/type/assertIsNotUndefined';

test('Given a non-undefined input, does not throw', () => {
    expect(() => assertIsNotUndefined('foo')).not.toThrow();
});

test('Given an undefined input, throws', () => {
    expect(() => assertIsNotUndefined(undefined)).toThrow(AssertionError);
});
