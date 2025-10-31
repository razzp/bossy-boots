import { AssertionError } from '../../../src/AssertionError';
import { assertIsNotString } from '../../../src/assertions/type/assertIsNotString';

test('Given a non-string input, does not throw', () => {
    expect(() => assertIsNotString(1)).not.toThrow();
});

test('Given a string input, throws', () => {
    expect(() => assertIsNotString('foo')).toThrow(AssertionError);
});
