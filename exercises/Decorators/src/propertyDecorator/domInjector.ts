export function domInjector(selector: string) {
  return function (target: any, propertyKey: string): any {
    const getter = () => document.querySelector(selector);
    console.log("DOMInjector");
    return getter();
  };
}
