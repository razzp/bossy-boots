import { assertIsNotTypeOf } from '../../../src/assertions/type/assertIsNotTypeOf';
import { AssertionError } from '../../../src/AssertionError';

test('Given type(s) that match the input, throws', () => {
    const bool = true;
    const string = 'foo';

    expect(() => assertIsNotTypeOf(bool, 'boolean')).toThrow(AssertionError);
    expect(() => assertIsNotTypeOf(bool, 'boolean', 'string')).toThrow(
        AssertionError
    );
    expect(() => assertIsNotTypeOf(string, 'string')).toThrow(AssertionError);
    expect(() => assertIsNotTypeOf(string, 'string', 'boolean')).toThrow(
        AssertionError
    );
});

test('Given type(s) that do not match the input, does not throw', () => {
    expect(() => assertIsNotTypeOf(null, 'boolean')).not.toThrow();
    expect(() => assertIsNotTypeOf(null, 'string')).not.toThrow();
    expect(() => assertIsNotTypeOf(null, 'string', 'boolean')).not.toThrow();
});
