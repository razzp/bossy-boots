import { AssertionError } from '../../src/AssertionError';
import { guarantee } from '../../src/utils/guarantee';

test('Given a value that is non-nullish, returns that value', () => {
    expect(guarantee('foo')).toBe('foo');
    expect(guarantee(1)).toBe(1);
    expect(guarantee(true)).toBe(true);
    expect(guarantee(false)).toBe(false);
    expect(guarantee(NaN)).toBeNaN();
});

test('Given a value that is nullish, throws', () => {
    expect(() => guarantee(null)).toThrow(AssertionError);
    expect(() => guarantee(undefined)).toThrow(AssertionError);
});
