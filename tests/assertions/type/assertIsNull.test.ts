import { assertIsNull } from '../../../src/assertions/type/assertIsNull';
import { AssertionError } from '../../../src/AssertionError';

test('Given a non-null input, throws', () => {
    expect(() => assertIsNull('foo')).toThrow(AssertionError);
});

test('Given a null input, does not throw', () => {
    expect(() => assertIsNull(null)).not.toThrow();
});
