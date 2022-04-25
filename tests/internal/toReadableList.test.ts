import { toReadableList } from '../../src/internal/toReadableList';

test('Given a single item, returns expected result', () => {
    expect(toReadableList(['foo'])).toBe('foo');
});

test('Given two items, returns expected result', () => {
    expect(toReadableList(['foo', 'bar'])).toBe('foo or bar');
});

test('Given two or more items, returns expected result', () => {
    expect(toReadableList(['foo', 'bar', 'baz'])).toBe('foo, bar or baz');
});
