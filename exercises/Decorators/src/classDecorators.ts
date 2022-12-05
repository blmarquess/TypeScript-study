import { inspect } from "./inspect";
import { calcTimeExec } from "./calcTimeExec";
import { loopRange } from "./loopRange";

@decoratorClass
class DecoratorClass {
  constructor(string: string) {
    console.log(string);
  }
  @inspect
  @calcTimeExec()
  public static method(par: string = "method params"): string {
    const time = loopRange(5498723);
    const data = `Utilizando decorator de métodos loopCalc = ${time}`;
    console.log("🚀 -> DecoratorClass -> data", data);
    return data;
  }
}

function decoratorClass(constructor: Function) {
  return console.log(constructor.name);
}

const test = DecoratorClass.method();
console.log("🚀 -> test", test);
