import { AssertionError } from '../../src/internal/AssertionError';
import { guarantee } from '../../src/utils/guarantee';

test('Given a value that is defined, returns that value', () => {
    expect(guarantee('foo')).toBe('foo');
    expect(guarantee(1)).toBe(1);
    expect(guarantee(true)).toBe(true);
    expect(guarantee(false)).toBe(false);
    expect(guarantee(NaN)).toBeNaN();
});

test('Given a value that is undefined, throws', () => {
    expect(() => guarantee(null)).toThrowError(AssertionError);
    expect(() => guarantee(undefined)).toThrowError(AssertionError);
});

test('Given a value that is undefined, but a fallback that is defined, returns the fallback', () => {
    expect(guarantee(null, 'foo')).toBe('foo');
    expect(guarantee(undefined, 1)).toBe(1);
});

test('Given a value and fallback that are both undefined, throws', () => {
    expect(() => guarantee(null, null)).toThrowError(AssertionError);
    expect(() => guarantee(undefined, undefined)).toThrowError(AssertionError);
});
