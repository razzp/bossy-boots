import { assertIsString } from '../../../src/assertions/type/assertIsString';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given a non-string input, throws', () => {
    expect(() => assertIsString(1)).toThrowError(AssertionError);
});

test('Given a string input, does not throw', () => {
    expect(() => assertIsString('foo')).not.toThrowError();
});
