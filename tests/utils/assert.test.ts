import { assert } from '../../src/utils/assert';
import { AssertionError } from '../../src/AssertionError';

test('Given a true condition, does not throw', () => {
    expect(() => assert(true)).not.toThrow();
});

test('Given a false condition, throws', () => {
    expect(() => assert(false)).toThrow(AssertionError);
});

test('Given a false condition and a custom message, throws with message', () => {
    expect(() => assert(false, 'foo')).toThrow('foo');
});
