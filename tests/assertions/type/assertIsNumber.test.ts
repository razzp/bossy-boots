import { assertIsNumber } from '../../../src/assertions/type/assertIsNumber';
import { AssertionError } from '../../../src/AssertionError';

test('Given a non-number input, throws', () => {
    expect(() => assertIsNumber('foo')).toThrow(AssertionError);
});

test('Given a number input, does not throw', () => {
    expect(() => assertIsNumber(1)).not.toThrow();
});
