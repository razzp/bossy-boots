import { assertIsNotBoolean } from '../../../src/assertions/type/assertIsNotBoolean';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given a non-boolean input, does not throw', () => {
    expect(() => assertIsNotBoolean('foo')).not.toThrowError();
});

test('Given a boolean input, throws', () => {
    expect(() => assertIsNotBoolean(true)).toThrowError(AssertionError);
    expect(() => assertIsNotBoolean(false)).toThrowError(AssertionError);
});
