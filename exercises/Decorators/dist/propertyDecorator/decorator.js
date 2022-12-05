import propertiesDecorator from "./propertiesDecorator.js";
const onClick = () => {
    console.log("clicou e deu certo");
    propertiesDecorator();
};
console.log("start");
console.log("start application");
const btn = document.querySelector("#btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", onClick);
