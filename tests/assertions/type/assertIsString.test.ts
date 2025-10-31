import { AssertionError } from '../../../src/AssertionError';
import { assertIsString } from '../../../src/assertions/type/assertIsString';

test('Given a non-string input, throws', () => {
    expect(() => assertIsString(1)).toThrow(AssertionError);
});

test('Given a string input, does not throw', () => {
    expect(() => assertIsString('foo')).not.toThrow();
});
