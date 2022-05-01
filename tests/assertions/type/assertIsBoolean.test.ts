import { assertIsBoolean } from '../../../src/assertions/type/assertIsBoolean';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given a non-boolean input, throws', () => {
    expect(() => assertIsBoolean('foo')).toThrowError(AssertionError);
});

test('Given a boolean input, does not throw', () => {
    expect(() => assertIsBoolean(true)).not.toThrowError();
    expect(() => assertIsBoolean(false)).not.toThrowError();
});
