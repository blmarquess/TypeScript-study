export function calcTimeExec() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const oldDescriptor = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      const time1 = performance.now();
      const result = oldDescriptor.apply(this, args);
      const time2 = performance.now();
      console.log(
        `[${propertyKey}]: Tempo de execução foi ${(time2 - time1) / 100}`
      );
      result;
    };
    return descriptor;
  };
}
