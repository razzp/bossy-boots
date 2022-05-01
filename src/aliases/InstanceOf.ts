type InstanceOf<T> = T extends Array<infer X>
    ? InstanceOf<X>
    : T extends {
          prototype: infer P;
      }
    ? P
    : never;

export { InstanceOf };
