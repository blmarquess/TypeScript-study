export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`[method: ${propertyKey}]`);
    console.log(`[args: ${JSON.stringify(args)}]`);
    const operation = originalMethod.apply(this, args);
    console.log(`Inspect in method ${propertyKey} finish!!`);
    return operation;
  };

  return descriptor;
}
