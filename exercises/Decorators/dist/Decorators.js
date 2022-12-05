"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const inspect_1 = require("./inspect");
const calcTimeExec_1 = require("./calcTimeExec");
const loopRange_1 = require("./loopRange");
let DecoratorClass = class DecoratorClass {
    constructor(string) {
        console.log(string);
    }
    static method(par = "method params") {
        const time = (0, loopRange_1.loopRange)(5498723);
        const data = `Utilizando decorator de métodos loopCalc = ${time}`;
        console.log("🚀 -> DecoratorClass -> data", data);
        return data;
    }
};
__decorate([
    inspect_1.inspect,
    (0, calcTimeExec_1.calcTimeExec)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], DecoratorClass, "method", null);
DecoratorClass = __decorate([
    decoratorClass,
    __metadata("design:paramtypes", [String])
], DecoratorClass);
function decoratorClass(constructor) {
    return console.log(constructor.name);
}
const test = DecoratorClass.method();
console.log("🚀 -> test", test);