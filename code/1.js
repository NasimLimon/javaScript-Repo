const accountId = "12345";
let accountEmail = "limon@gmail.com";
var accountPassword = "654321";//var not used but use let 
accountCity = "Rangpur";
let accountState;
//accountId = "6547";not allowed
console.log(accountId);
let name = "limon";
let age = 18;
let isfalse = false;

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);
console.log(typeof age)
console.log(typeof null)
console.log(typeof undefined)
//type od data type
//number
//string
//bigint
//boolean
//symbol
//null
//undefined
//object

console.log("conversion  ")
let score = "234"; //NULL=>0,undefined=>NaN
console.log(typeof score)
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
let score1 = "234asd";
console.log(typeof score)//string
let valueInNumber1 = Number(score1);
console.log(valueInNumber1);//NaN

//1=>true ,0=>false,""=>false,"limon"=>true   =>>Boolean conversion