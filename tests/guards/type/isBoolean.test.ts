import { isBoolean } from '../../../src/guards/type/isBoolean';

test('Given a non-boolean input, returns false', () => {
    expect(isBoolean('foo')).toBe(false);
});

test('Given a boolean input, returns true', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
});
