import { isNotNull } from '../../../src/guards/type/isNotNull';

test('Given a non-null input, returns true', () => {
    expect(isNotNull('foo')).toBe(true);
    expect(isNotNull(undefined)).toBe(true);
});

test('Given a null input, returns false', () => {
    expect(isNotNull(null)).toBe(false);
});
