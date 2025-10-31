import { AssertionError } from '../../../src/AssertionError';
import { assertIsBoolean } from '../../../src/assertions/type/assertIsBoolean';

test('Given a non-boolean input, throws', () => {
    expect(() => assertIsBoolean('foo')).toThrow(AssertionError);
});

test('Given a boolean input, does not throw', () => {
    expect(() => assertIsBoolean(true)).not.toThrow();
    expect(() => assertIsBoolean(false)).not.toThrow();
});
