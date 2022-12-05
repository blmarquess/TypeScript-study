export function domInjector(selector) {
    return function (target, propertyKey) {
        const getter = () => document.querySelector(selector);
        console.log("DOMInjector");
        return getter();
    };
}
