const testo:string = 'Aqui tem um testo';
const num:number = 98;
const arr:Number[ ] = [1,2,3,4,5];
console.log(testo);

const newArray = [ ...new Array(10).keys()];

console.log(newArray);

const meSentiment: string = 'I am very happy && mas paresse a mesma coisa, mas não é o mesmo!';
console.log(meSentiment);

const vamosParaAsClasses: string = 'Vamos para as classes';
console.log(vamosParaAsClasses);
// ++++++++++++==========================================================+++++++++++++++++++++++++++
// Language: typescript

class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number, mes: number, ano: number) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(2, 10, 2020);
console.log('aniversario', aniversario);

// para criar um objeto de uma classe com valores predefinidos colocamos os valores no construtor atribuindo com o operador '='

class NewData {
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const exemploDeData = new NewData(2, 10, 2020);
const exemploDeData2 = new NewData();
console.log('exemploDeData', exemploDeData);
console.log('exemploDeData2', exemploDeData2);


// Class com sintaxe enxuta
class Data2 {
  constructor(public dia: number, public mes: number, public ano: number) {
  }
}

// Desafio de class de produtos
// Criar uma classe produto com os atributos nome, preco e desconto
// Criar um construtor que recebe os valores do produto
// Objetivo: criar um produto com valores predefinidos (Valotr predefinido 0)
// Objeto: criar um produto passando dois e tres poarametros

class Produto {
  nome: string;
  preco: number;
  desconto: number;

  constructor(nome: string , preco: number , desconto: number = 0) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;
  }
}

class Product {
  constructor(public nome: string, preco: number, desconto: number = Math.random()) {   
  }
}

const produto01 = new Produto('Lapis', 2);
const produto02 = new Product('Caneta', 5);

console.log('Produto01', produto01);
console.log('Produto02', produto02);