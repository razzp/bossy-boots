import { isNotBoolean } from '../../../src/guards/type/isNotBoolean';

test('Given a non-boolean input, returns true', () => {
    expect(isNotBoolean('foo')).toBe(true);
});

test('Given a boolean input, returns false', () => {
    expect(isNotBoolean(true)).toBe(false);
    expect(isNotBoolean(false)).toBe(false);
});
