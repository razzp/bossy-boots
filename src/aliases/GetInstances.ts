type GetInstances<T> = T extends Array<infer X>
    ? GetInstances<X>
    : T extends {
          prototype: infer P;
      }
    ? P
    : never;

export { GetInstances };
