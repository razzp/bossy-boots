import type { Nullish } from './Nullish';

type NotNullish<T> = T extends Nullish<T> ? never : T;

export { NotNullish };
