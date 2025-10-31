import { AssertionError } from '../../../src/AssertionError';
import { assertIsUndefined } from '../../../src/assertions/type/assertIsUndefined';

test('Given a non-undefined input, throws', () => {
    expect(() => assertIsUndefined('foo')).toThrow(AssertionError);
});

test('Given an undefined input, does not throw', () => {
    expect(() => assertIsUndefined(undefined)).not.toThrow();
});
