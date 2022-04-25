import type { Defined } from './Defined';

type NotDefined<T> = T extends Defined<T> ? never : T;

export { NotDefined };
