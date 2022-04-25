import { assertIsTypeOf } from '../../../src/assertions/type/assertIsTypeOf';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given type(s) that match the input, does not throw', () => {
    const bool = true;
    const string = 'foo';

    expect(() => assertIsTypeOf(bool, 'boolean')).not.toThrowError();
    expect(() => assertIsTypeOf(bool, 'boolean', 'string')).not.toThrowError();
    expect(() => assertIsTypeOf(string, 'string')).not.toThrowError();
    expect(() =>
        assertIsTypeOf(string, 'string', 'boolean')
    ).not.toThrowError();
});

test('Given type(s) that do not match the input, throws', () => {
    expect(() => assertIsTypeOf(null, 'boolean')).toThrowError(AssertionError);
    expect(() => assertIsTypeOf(null, 'string')).toThrowError(AssertionError);
    expect(() => assertIsTypeOf(null, 'string', 'boolean')).toThrowError(
        AssertionError
    );
});
