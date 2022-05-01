import { isNotString } from '../../../src/guards/type/isNotString';

test('Given a non-string input, returns true', () => {
    expect(isNotString(1)).toBe(true);
});

test('Given a string input, returns false', () => {
    expect(isNotString('foo')).toBe(false);
});
