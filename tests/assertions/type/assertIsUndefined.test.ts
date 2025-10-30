import { assertIsUndefined } from '../../../src/assertions/type/assertIsUndefined';
import { AssertionError } from '../../../src/AssertionError';

test('Given a non-undefined input, throws', () => {
    expect(() => assertIsUndefined('foo')).toThrow(AssertionError);
});

test('Given an undefined input, does not throw', () => {
    expect(() => assertIsUndefined(undefined)).not.toThrow();
});
