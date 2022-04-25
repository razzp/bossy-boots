import { AssertionError } from '../../src/internal/AssertionError';

test('Error is constructed properly', () => {
    const error = new AssertionError('foo');

    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe('AssertionError');
    expect(error.message).toBe('foo');
});
