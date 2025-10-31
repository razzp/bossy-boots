import { AssertionError } from '../../../src/AssertionError';
import { assertIsNotNull } from '../../../src/assertions/type/assertIsNotNull';

test('Given a non-null input, does not throw', () => {
    expect(() => assertIsNotNull('foo')).not.toThrow();
});

test('Given a null input, throws', () => {
    expect(() => assertIsNotNull(null)).toThrow(AssertionError);
});
