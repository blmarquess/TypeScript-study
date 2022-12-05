var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { createInput, domCreate } from "./propertyDecorator/domCreate.js";
import { domInjector } from "./propertyDecorator/domInjector.js";
import domSelector from "./propertyDecorator/domSelector.js";
import propertiesDecorator from "./propertyDecorator/propertiesDecorator.js";
const onClick = () => {
    console.log("clicou e deu certo");
    propertiesDecorator();
};
class Form {
    constructor(...inputs) {
        var _a;
        const form = domCreate("div");
        const btn = domCreate("button", "submit");
        btn.textContent = "Submit";
        inputs
            .map((name) => createInput(name))
            .forEach((inp) => form.appendChild(inp));
        (_a = domSelector("body")) === null || _a === void 0 ? void 0 : _a.appendChild(form);
        form.appendChild(btn);
    }
}
__decorate([
    domInjector("#submit"),
    __metadata("design:type", HTMLButtonElement)
], Form.prototype, "button", void 0);
const btn = new Form("first name", "last name", "profissão");
btn.button.addEventListener("click", onClick);
