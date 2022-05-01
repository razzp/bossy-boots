import { assertIsNotNull } from '../../../src/assertions/type/assertIsNotNull';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given a non-null input, does not throw', () => {
    expect(() => assertIsNotNull('foo')).not.toThrowError();
});

test('Given a null input, throws', () => {
    expect(() => assertIsNotNull(null)).toThrowError(AssertionError);
});
