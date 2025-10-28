import { assertIsNotNullish } from '../../../src/assertions/type/assertIsNotNullish';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given a non-nullish input, does not throw', () => {
    expect(() => assertIsNotNullish('foo')).not.toThrow();
});

test('Given a nullish input, throws', () => {
    expect(() => assertIsNotNullish(null)).toThrow(AssertionError);
    expect(() => assertIsNotNullish(undefined)).toThrow(AssertionError);
});
