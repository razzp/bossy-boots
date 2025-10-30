import { assertIsNotBoolean } from '../../../src/assertions/type/assertIsNotBoolean';
import { AssertionError } from '../../../src/AssertionError';

test('Given a non-boolean input, does not throw', () => {
    expect(() => assertIsNotBoolean('foo')).not.toThrow();
});

test('Given a boolean input, throws', () => {
    expect(() => assertIsNotBoolean(true)).toThrow(AssertionError);
    expect(() => assertIsNotBoolean(false)).toThrow(AssertionError);
});
