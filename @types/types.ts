
const numericVar:number = 0

const stringVar:string = 'String as text'

const trueFalse:boolean = true

const objectEmployee: { id:number, name:string, manager:boolean } = { id: 1, name: 'Bruno', manager: true }

const arrayOfStrings: string[] = ['Person', 'Dog', 'Cat', 'Car']

const arrayOfNumbers: number[] = [3, 6, 9]

// Union type
let carModel: number | string

carModel = 93
carModel = 'Ferrari'


// tipos auto inferidos pelo compilador
const numero = 7
const letter = 'text'
const verdade = true
const arrayWithoutTypeString = ['Person', 'Dog', 'Cat', 'Car']
const arrayWithoutTypeNumber = [6, 3, 9, 6, 3, 9]
const arrayWithoutTypeAny = [396, 'gold', 7, 'cache', 'network', 42, {id:1}]
