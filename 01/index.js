"use strict";
const testo = 'Aqui tem um testo';
const num = 98;
const arr = [1, 2, 3, 4, 5];
console.log(testo);
const newArray = [...new Array(10).keys()];
console.log(newArray);
const meSentiment = 'I am very happy && mas paresse a mesma coisa, mas não é o mesmo!';
console.log(meSentiment);
const vamosParaAsClasses = 'Vamos para as classes';
console.log(vamosParaAsClasses);
// ++++++++++++==========================================================+++++++++++++++++++++++++++
// Language: typescript
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(2, 10, 2020);
console.log('aniversario', aniversario);
// para criar um objeto de uma classe com valores predefinidos colocamos os valores no construtor atribuindo com o operador '='
class NewData {
    constructor(dia = 1, mes = 1, ano = 1970) {
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
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
// Desafio de class de produtos
// Criar uma classe produto com os atributos nome, preco e desconto
// Criar um construtor que recebe os valores do produto
// Objetivo: criar um produto com valores predefinidos (Valotr predefinido 0)
// Objeto: criar um produto passando dois e tres poarametros
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
}
class Product {
    constructor(nome, preco, desconto = Math.random()) {
        this.nome = nome;
    }
}
const produto01 = new Produto('Lapis', 2);
const produto02 = new Product('Caneta', 5);
console.log('Produto01', produto01);
console.log('Produto02', produto02);
