type NotUndefined<T> = T extends undefined ? never : T;

export { NotUndefined };
