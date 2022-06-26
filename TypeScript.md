# O que é TypeScript?

TypeScript é JavaScript com sintaxe para tipos.
>Informações da [documentação](https://www.typescriptlang.org/pt/)


TypeScript é uma linguagem de programação fortemente tipada que se baseia no JavaScript, dando-lhe melhor ferramentas em qualquer escala.

## Mais So adiciona tipos ao JavaScript ?

Além de sistema de tipos estáticos para a linguagem foram introduzidas farias funcionalidades que ajudam nós desenvolvedores no momento de desenvolvimento e nos possibilita um melhor ao suporte ao paradigmas de programação Orientado a Objetos (POO), com a inclusão a escopo de visibilidade de propriedades e métodos para as classes, inclusão do suporte a interfaces


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

#

## Como definimos os tipos no TypeScript

Para definir um tipo de uma variável utilizamos o sinal (dois pontos) ':' após o nome da variável (antes da sua inicialização/ atribuição de valor)

```Typescript
const nomeDaVariavel:tipoDaVariavel = 'valor da variavel aqui'
```

### Quais são os tipos de dados nativos do Typescript e como utilizar


### String, Number, Object e Boolean

Partindo do pressuposto que você já domina o JavaScript não irei explicar os tipos de dados comuns do JavaScript apenas mostra um exemplo de como os definir eles no TypeScript

```Typescript
const variavelString:string = 'valor da variavel string aqui'
const variavelNumero:number = 42
const variavelBoolean:boolean = true
const variavelObject:object{ id:number, name:string } = { id: 42, name: 'produto' }
```

Para estes tipos nativos da linguagem o compilador consegue fazer inferência de tipos dinamicamente, em outras palavras você não precisa ficar tipando 100% das suas variáveis e objetos que o próprio compilador irá fazer isto por você.

Porém quando partimos para vetores/Arrays temos um cenário diferente, precisamos informar que teremos um array de determinado tipo, de vários tipos ou de tipos indefinidos.
Para isso precisamos entender dois tipos novos que são o ANY e o UNION

Any é um tipo indefinido que ao ser declarado você está informando para o compilador que aquele valor pode ser de qualquer tipo possível.

Union é um tipo flexível que pode ter mais de um tipo embutido

EX: para fazer seta definição utilizamo o sinal de pipe ‘ | ’

A variavel Fatura pode ser do tipo numero  ou string
```Typescript
const variavelFatura:number | string = 42.000.00
const variavelFatura:number | string = 'sem valores a pagar'
```
Sabendo da existência do any e Union agora iremos tipar nossas arrays. 

Para tipar um array definimos o nome dela depois colocamos o tipo e em sequência abrimos e fechamos os brackets(colchetes)

Para tipar uma array que só terá número declaramos da seguinte forma

```Typescript
const arrayDeNumeros:number[] = [42, 7, 6, 3, 9]
```
Para tipar uma array que só terá strings declaramos da seguinte forma

```Typescript
const arrayDeStrings:string[] = ['sem', 'valores', 'a', 'pagar']
```

Para tipar uma array que terá números e strings ou qualquer coisa declaramos da seguinte forma

```Typescript
const arrayDeNumerosOuStrings:any[] = ['valores', 69, {id: 3}, 'carros']
```

Para tipar uma array que terá strings e números declaramos da seguinte forma

```Typescript
const arrayDeStringsNumeros:(string | number)[] = ['sem', 6, 'valores', 69, 'pagar', 63, 39]
```

Aqui vemos mais uma forma de declarar um tipo para uma variavel do tipo array/vetor utilizando os tipos envolvidos entre parenteses ``` '( )' ``` e separados por pipe ``` '|' ``` ex: ```const nomeDaVariavel:( number | string | { id: number})[] = [396, 'gold', {id:1}]```
