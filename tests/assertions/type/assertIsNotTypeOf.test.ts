import { assertIsNotTypeOf } from '../../../src/assertions/type/assertIsNotTypeOf';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given type(s) that match the input, throws', () => {
    const bool = true;
    const string = 'foo';

    expect(() => assertIsNotTypeOf(bool, 'boolean')).toThrowError(
        AssertionError
    );
    expect(() => assertIsNotTypeOf(bool, 'boolean', 'string')).toThrowError(
        AssertionError
    );
    expect(() => assertIsNotTypeOf(string, 'string')).toThrowError(
        AssertionError
    );
    expect(() => assertIsNotTypeOf(string, 'string', 'boolean')).toThrowError(
        AssertionError
    );
});

test('Given type(s) that do not match the input, does not throw', () => {
    expect(() => assertIsNotTypeOf(null, 'boolean')).not.toThrowError();
    expect(() => assertIsNotTypeOf(null, 'string')).not.toThrowError();
    expect(() =>
        assertIsNotTypeOf(null, 'string', 'boolean')
    ).not.toThrowError();
});
