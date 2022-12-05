export function domCreate(element, id = "") {
    const newElement = document.createElement(element);
    newElement.id = id;
    return newElement;
}
export function createInput(name) {
    const label = domCreate("label");
    label.textContent = name;
    const input = domCreate("input");
    input.id = name;
    label.appendChild(input);
    return label;
}
