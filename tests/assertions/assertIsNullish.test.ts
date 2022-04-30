import { assertIsNullish } from '../../src/assertions/assertIsNullish';
import { AssertionError } from '../../src/internal/AssertionError';

test('Given a non-nullish input, throws', () => {
    expect(() => assertIsNullish('foo')).toThrowError(AssertionError);
});

test('Given a nullish input, does not throw', () => {
    expect(() => assertIsNullish(null)).not.toThrowError();
    expect(() => assertIsNullish(undefined)).not.toThrowError();
});
