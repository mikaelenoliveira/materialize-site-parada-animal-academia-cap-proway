
//---------------------------CALCULO DE MÉDIA----------------------------  
//dados de entrada;

// var nota1 = 9;
// var nota2 = 8.5;
// var nota3 = 10;
// var nota4 = 7;

// var total = nota1 + nota2 + nota3 + nota4;

// var media = total / 4;

// console.log(media);

//----------------------------ADIÇÃO---------------------------------------

// var num1 = 567;
// var num2 = 465;

// var soma = num1 + num2;

// console.log(soma);

//****************************SUBTRAÇÃO*********************************

// var num1 = 760;
// var num2 = 300;

// var subtracao = num1 - num2;

// console.log(subtracao);

//******************************MULTIPLICAÇÃO******************* */
// var num1 = 1960;
// var num2 = 2022;

// var mult = num1 * num2;
// console.log(mult);

//*****************************DIVISÃO************************** */
// var num1 = 1500;
// var num2 = 10;

// var div = num1 / num2;

// console.log(div);


//2 VALORES, SOMAR(), MULTIPLICAR = 4, DIVIDIR, 2, 
//SUBTRAIR PELO RESULTADO DA SOMA

// var valor1 = 3500;
// var valor2 = 760;

// var soma = valor1 + valor2;
// var multiplicacao = soma * 4;
// var divisao = multiplicacao / 2;
// var subtracao = divisao - soma;
// % sobra da divisão

// console.log("soma: "+soma);
// console.log("multiplição: "+multiplicacao);
// console.log("divisao: "+divisao);
// console.log("subtração "+subtracao)

//****************************COMPARAÇÃO****************************** */
//var valor1 = 10; //valor numerico tipo int
//var valor2 = 5; //tipo string, valores entre aspas "" ou ''
// = é atribuição
// == compara valor 
// === compara valor e tipo de dado
// != diferente
// console.log(valor1 === valor2);
// > maior que 
// < menor que
// >= maior ou igual
// <= menor ou igual

// if(valor1 / valor2 % 2){
//     console.log(true);
// }else{
//     console.log(false);
// }

// var condicao = ((valor1 / valor2) % 2 == 0) ? true : false;
// console.log(condicao);


///////USANDO PROMPT

var nome = prompt("Informe seu nome");

console.log("meu nome é "+ nome);


switch (diaSemana) {
    case 0:
        console.log("Amanhã é segunda :S");
        break;
    case 5:
        console.log("Sextou");
        break;
    case 6:
        console.log("Sabadou");
        break;
    default:
        console.log("Bora logo pra vim a sexta :D")
        break;
}