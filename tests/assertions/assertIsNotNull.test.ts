import { assertIsNotNull } from '../../src/assertions/assertIsNotNull';
import { AssertionError } from '../../src/internal/AssertionError';

test('Given a defined input, does not throw', () => {
    expect(() => assertIsNotNull('foo')).not.toThrowError();
});

test('Given a null input, throws', () => {
    expect(() => assertIsNotNull(null)).toThrowError(AssertionError);
});
