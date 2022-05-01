import { isString } from '../../../src/guards/type/isString';

test('Given a non-string input, returns false', () => {
    expect(isString(1)).toBe(false);
});

test('Given a string input, returns true', () => {
    expect(isString('foo')).toBe(true);
});
