import { assert } from '../../src/utils/assert';
import { AssertionError } from '../../src/internal/AssertionError';

test('Given a true condition, does not throw', () => {
    expect(() => assert(true)).not.toThrowError();
});

test('Given a false condition, throws', () => {
    expect(() => assert(false)).toThrowError(AssertionError);
});

test('Given a false condition and a custom message, throws with message', () => {
    expect(() => assert(false, 'foo')).toThrowError('foo');
});
