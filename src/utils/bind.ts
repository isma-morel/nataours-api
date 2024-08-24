export function autoBind(instance: any) {
  const proto = Object.getPrototypeOf(instance);
  const propertyNames = Object.getOwnPropertyNames(proto);

  for (const name of propertyNames) {
    const descriptor = Object.getOwnPropertyDescriptor(proto, name);
    if (
      descriptor &&
      typeof descriptor.value === "function" &&
      name !== "constructor"
    ) {
      instance[name] = instance[name].bind(instance);
    }
  }
}
