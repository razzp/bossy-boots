import { isNull } from '../../src/guards/isNull';

test('Given a defined input, returns false', () => {
    expect(isNull('foo')).toBe(false);
});

test('Given a null input, returns true', () => {
    expect(isNull(null)).toBe(true);
});
