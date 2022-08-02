// //Faça um algoritmo que entre com o nome e o salário de um funcionário e mostre seu novo salário, sabendo que o mesmo teve um aumento de 10%.
// var nome = prompt("Informe seu nome");
// console.log(nome);
// var salario = parseFloat(prompt("Informe seu salario"));
// console.log(salario);

// var novosalario = salario + salario * 0.1;
// console.log(`O novo salario de ${nome} é ` + novosalario);

// Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem ser somado os dois, caso contrário multiplique A por B. Ao final docálculo atribuir o valor para uma variável C.

// var a = parseInt(prompt("Informe o valor de A"));
// var b = parseInt(prompt("Informe o valor de B"));
// console.log(`O valor de A é ` + a);
// console.log(`O valor de B é ` + b);

// if (a == b) {
//   var resultado = a + b;
// } else {
//   var resultado = a * b;
// }
// console.log(`O resultado da condição é: ` + resultado);

// c = resultado;
// console.log(`O valor de C é: ` + c);

// escreva um algoritmo que receba o ano de nascimento e retorne a idade da pessoa baseada o ano atual

// var anoNascimento = parseFloat(prompt("Informe o ano do seu nascimento"));
// var anoAtual = parseFloat(prompt("Em qual ano estamos?"));

// console.log("O ano do seu nascimento é " + anoNascimento);
// console.log("O ano atual é " + anoAtual);

// var idade = anoAtual - anoNascimento;
// console.log("Sua idade é " + idade);

// escreva um algoritmo que receba o ano de nascimento da pessoa e retorne a idade em dias da pessoa considere que todos os anos tenham 365 dias

// var anoNascimento = parseFloat(prompt("Informe o ano do seu nascimento"));
// var anoAtual = parseFloat(prompt("Em qual ano estamos?"));

// console.log("O ano do seu nascimento é " + anoNascimento);
// console.log("O ano atual é " + anoAtual);

// var idade = (anoAtual - anoNascimento) * 365;
// console.log("Sua idade em dias é  " + idade);

// faça um algoritmo que receba 3 notas de uma aluno, calcule a média e mostre a condiçao APROVADO/REPROVADO para ser aprovado o aluno deverá atingir nota mínima 7

// var nota1 = parseFloat(prompt("Informe a primeira nota"));
// var nota2 = parseFloat(prompt("Informe a segunda nota"));
// var nota3 = parseFloat(prompt("Informe a segunda nota"));

// console.log("As notas são: " + nota1, nota2, nota3);

// var media = (nota1 + nota2 + nota3) / 3;
// console.log("A media é: " + media);

// if (media >= 7) {
//   console.log("Aluno aprovado");
// } else {
//   console.log("Aluno reprovado");
// }

// faça um algoritmo  para o medir o consumo médio de um veículo. os valores de entrada são: distância percorrida; litros de combustível comsumido; retorna o consumo/KM

// var distanciaPercorrida = parseFloat(
//   prompt("Informe a distancia percorrida em KM")
// );
// var litrosconsumidos = parseFloat(
//   prompt("Informe a quantidade de litros consumidos")
// );

// console.log("A distancia percorrida em KM é " + distanciaPercorrida);
// console.log("A quantidade de litros consumidos " + litrosconsumidos);

// var consumoLitro = distanciaPercorrida / litrosconsumidos;
// console.log(`O consumo de combustivel do carro é ${consumoLitro} KM/litro`);

// faça um algoritmo que receba o ano de nascimento e com este valor informe a faixa de idade até 12: criança entre 12 e 18: adolescente entre 19 e 30: jovem entre 31 e 40 adulto entre 41 e 59 meia idade acima de 60 idoso acima de 90, ta na borda kkkk (brincadeira, não precisa dessa)

// var anoNascimento = parseFloat(prompt("Informe o ano de nascimento"));
// var anoAtual = new Date(Date.now()).getFullYear();
// console.log("O ano de nascimento é " + anoNascimento);

// console.log(anoAtual);
// var idade = anoAtual - anoNascimento;
// var faixaetaria = "nao definido";

// if (idade <= 12) {
//   faixaetaria = "criança";
// } else if (idade > 12 && idade <= 18) {
//   faixaetaria = "adolescente";
// } else if (idade > 19 && idade <= 30) {
//   faixaetaria = "jovem";
// } else if (idade > 31 && idade <= 40) {
//   faixaetaria = "adulto";
// } else if (idade > 41 && idade <= 59) {
//   faixaetaria = "meia idade";
// } else if (idade > 60 && idade <= 89) {
//   faixaetaria = "idoso";
// } else if (idade >= 90) {
//   faixaetaria = "fazendo hora extra";
// }

// console.log(`A pessoa é ${faixaetaria}`);

// faça um algoritmo que calcule a taxa IMC de uma pessoa para isso deverá receber a altura em centimetros e o peso

// var peso = parseFloat(prompt("Informe o peso"));
// var altura = parseFloat(prompt("Informe a altura"));

// console.log("O peso é: " + peso);
// console.log("A altura é: " + altura);

// var imc = peso / altura ** 2;
// console.log("O imc é: " + imc);

// Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano. Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do crédito de acordo com a tabela abaixo. Mostre uma mensagem informando o saldo médio e o valor do crédito
// de 0 a 200	nenhum crédito
// de 201 a 400	20% do valor do saldo médio
// de 401 a 600	30% do valor do saldo médio
// acima de 601	40% do valor do saldo médio

// var saldoMedio = parseFloat(prompt("Informe o saldo medio"));

// console.log(saldoMedio);

// uma lanchonete está precisando agilizar o atendimento, faça um algoritimo que receba o nome do produto, a quantidade e o valor unitário, retorne o valor total dos itens
//

// var nomeProduto = (window.prompt("Informe o nome do produto"));
// console.log(nomeProduto);

// var quantProduto parseFloat(prompt("Quantidade do produto"));
// var valorUnit parseFloat(prompt("Quantidade do produto"));

// console.log(quantProduto);
// console.log(valorUnit);

// let alunos = [
//   ["Mika", 8, 9, 10],
//   ["Laura", 7, 6, 9],
//   ["Bruna", 8, 9, 10],
//   ["Carlos", 8, 9, 10],
//   ["Val", 8, 9, 10],
// ];

// for (posicao in alunos) {
//   console.log(alunos[posicao][0]);
// }

// var numReal = parseFloat(prompt("Informe um numero real"));

// console.log("O numero real é: " + numReal);

// var dobro = numReal * 2;
// var tercaParte = numReal / 3;

// console.log(`O dobro desse numero é: ${dobro}`);
// console.log(`A Terça parte desse numero é: ${tercaParte}`);

// var distanciaM = parseFloat(prompt("Informe a distancia em metro"));

// console.log(`A distancia em metro é ${distanciaM}`);

// var distanciaCM = distanciaM * 100;
// var distanciaMM = distanciaM * 1000;
// var distanciaPol = distanciaM * 39.37;
// var distanciaJarda = distanciaM * 1.094;
// var distanciaMilha = distanciaM / 1609;

// console.log(`A distancia em Centimento é ${distanciaCM}`);
// console.log(`A distancia em Milimitros é ${distanciaMM}`);
// console.log(`A distancia em Polegadas é ${distanciaPol}`);
// console.log(`A distancia em Jardas é ${distanciaJarda}`);
// console.log(`A distancia em Milhas é ${distanciaMilha}`);

// const valorHoraExtra = 50;
// let salarioBase = parseFloat(prompt("Informe o salario base"));
// let quantHorasExtras = parseFloat(prompt("Qual a quantidade de horas extras"));

// console.log("O salario base é: " + salarioBase);
// console.log("O O funcionario fez o total de horas extras: " + quantHorasExtras);

// let salarioBruto = salarioBase + valorHoraExtra * quantHorasExtras;

// console.log("Salario bruto é: " + salarioBruto);

// let totalDesconto = salarioBruto * 0.18;
// let salarioLiquido = salarioBruto - totalDesconto;

// console.log("O total de descontos é: " + totalDesconto);
// console.log("E o salario liquido é: " + salarioLiquido);

// function calcularValorMaca(quantMaca) {
//   let valorMaca = 0.0;

//   if (quantMaca < 12) {
//     valorMaca = 1.3;
//   } else {
//     valorMaca = 1;
//   }

//   let valorCompra = valorMaca * quantMaca;

//   return valorCompra;
// }

// let quantMaca = parseInt(prompt("Quantas maçãs deseja comprar?"));
// console.log("O valor da compra é: ", calcularValorMaca(quantMaca));

// let numeroInt = parseInt(prompt("Digite um numero inteiro"));

let productValue = Number(window.prompt("Qual o valor do produto?"));
let product = Math.trunc(productValue / 100);
let discount = productValue * (product * 0.05);
let newValue = productValue - discount;
console.log(`O valor com desconto é R$${newValue}`);
