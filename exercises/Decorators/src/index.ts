import { createInput, domCreate } from "./propertyDecorator/domCreate.js";
import { domInjector } from "./propertyDecorator/domInjector.js";
import domSelector from "./propertyDecorator/domSelector.js";
import propertiesDecorator from "./propertyDecorator/propertiesDecorator.js";

const onClick = () => {
  console.log("clicou e deu certo");
  propertiesDecorator();
};

class Form {
  @domInjector("#submit")
  public button: HTMLButtonElement;

  constructor(...inputs: string[]) {
    const form = domCreate("div");
    const btn = domCreate("button", "submit");
    btn.textContent = "Submit";

    inputs
      .map((name: string) => createInput(name))
      .forEach((inp) => form.appendChild(inp));

    domSelector("body")?.appendChild(form);
    form.appendChild(btn);
  }
}

const btn = new Form("first name", "last name", "profissão");
btn.button.addEventListener("click", onClick);
