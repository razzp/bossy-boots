import { AssertionError } from '../../../src/AssertionError';
import { assertIsTypeOf } from '../../../src/assertions/type/assertIsTypeOf';

test('Given type(s) that match the input, does not throw', () => {
    const bool = true;
    const string = 'foo';

    expect(() => assertIsTypeOf(bool, 'boolean')).not.toThrow();
    expect(() => assertIsTypeOf(bool, 'boolean', 'string')).not.toThrow();
    expect(() => assertIsTypeOf(string, 'string')).not.toThrow();
    expect(() => assertIsTypeOf(string, 'string', 'boolean')).not.toThrow();
});

test('Given type(s) that do not match the input, throws', () => {
    expect(() => assertIsTypeOf(null, 'boolean')).toThrow(AssertionError);
    expect(() => assertIsTypeOf(null, 'string')).toThrow(AssertionError);
    expect(() => assertIsTypeOf(null, 'string', 'boolean')).toThrow(
        AssertionError,
    );
});
