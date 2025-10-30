import { assertIsNullish } from '../../../src/assertions/type/assertIsNullish';
import { AssertionError } from '../../../src/AssertionError';

test('Given a non-nullish input, throws', () => {
    expect(() => assertIsNullish('foo')).toThrow(AssertionError);
});

test('Given a nullish input, does not throw', () => {
    expect(() => assertIsNullish(null)).not.toThrow();
    expect(() => assertIsNullish(undefined)).not.toThrow();
});
