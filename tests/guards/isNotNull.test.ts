import { isNotNull } from '../../src/guards/isNotNull';

test('Given a defined input, returns true', () => {
    expect(isNotNull('foo')).toBe(true);
});

test('Given a null input, returns false', () => {
    expect(isNotNull(null)).toBe(false);
});
