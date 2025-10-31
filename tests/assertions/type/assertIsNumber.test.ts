import { AssertionError } from '../../../src/AssertionError';
import { assertIsNumber } from '../../../src/assertions/type/assertIsNumber';

test('Given a non-number input, throws', () => {
    expect(() => assertIsNumber('foo')).toThrow(AssertionError);
});

test('Given a number input, does not throw', () => {
    expect(() => assertIsNumber(1)).not.toThrow();
});
