import { isNull } from '../../../src/guards/type/isNull';

test('Given a non-null input, returns false', () => {
    expect(isNull('foo')).toBe(false);
    expect(isNull(undefined)).toBe(false);
});

test('Given a null input, returns true', () => {
    expect(isNull(null)).toBe(true);
});
