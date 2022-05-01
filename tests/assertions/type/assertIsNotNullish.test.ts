import { assertIsNotNullish } from '../../../src/assertions/type/assertIsNotNullish';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given a non-nullish input, does not throw', () => {
    expect(() => assertIsNotNullish('foo')).not.toThrowError();
});

test('Given a nullish input, throws', () => {
    expect(() => assertIsNotNullish(null)).toThrowError(AssertionError);
    expect(() => assertIsNotNullish(undefined)).toThrowError(AssertionError);
});
