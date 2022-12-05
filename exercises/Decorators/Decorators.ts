@decoratorClass
class DecoratorClass {
  constructor(string:string) {
    console.log(string);
  }
    public method() {
        return "DecoratorClass.method";
    }
}

function decoratorClass(constructor: Function) {
    return console.log(constructor);
}

function decoratorClass1(constructor: Function) {
    return console.log(constructor('decoratorClass2'));
}

function decoratorClass2(constructor: Function) {
    return console.log(constructor('decoratorClass2'));
}

function decoratorClass3(constructor: Function) {
    return console.log(constructor('decoratorClass2'));
}

function decoratorMethod(constructor: Function) {
    return console.log(constructor());
}
