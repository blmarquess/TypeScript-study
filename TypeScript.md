# O que é TypeScript?

TypeScript é JavaScript com sintaxe para tipos.
>Informações da [documentação](https://www.typescriptlang.org/pt/)


TypeScript é uma linguagem de programação fortemente tipada que se baseia no JavaScript, dando-lhe melhor ferramentagem em qualquer escala.

## Mais So adiciona tipos ao JavaScript ?

Alem de seistema de tipos estaticos para a linguagem foram introduzidas farias funcionalidades que ajudam nós desenvolvedores no momento de desenvolivimento e nos posibilita um melhor ao suporte ao paradigmas de programação Orientado a Objetos (POO), com a inclusão a escopo de visibilidade de propriedades e metodos para as classes, inclusão do suporte a interfaces


## Isso aumenta a verbosidade da linguagem e a produtividade ?

Ao aumentar a verbosidade da linguagem reduz um pouco a produtividade no início do aprendizado porém aumenta muito ao longo do tempo e com melhoria muito significativa na qualidade do desenvolvimento.

Quando utilizar um editor de código/IDE que tem uma boa integração com a linguagem o dev conta com respostas de erro em tempo de desenvolvimento evitando assim erros que só seriam pegos em tempo de execução e teriam que ser procurados para ser corrigido



```typescript
Exemplo: 

function somaDoisNumeros(num1: number, num2:number):number{
  return num1 + num2;
}

const soma1 = somaDoisNumeros(2,5) // 7

const somaComErro = somaDoisNumeros(2,'5') // Erro na assinatura dos tipos dos parâmetros * é apontado pela IDE

const somaComErro = somaDoisNumeros(2,a) // Erro na assinatura dos tipos dos parâmetros * é apontado pela IDE
```

Somando o TypeScript com um Linter os erros por conta de chamadas incorretas de funções ou métodos serão praticamente dizimados.

