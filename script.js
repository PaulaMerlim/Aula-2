// Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
console.log("Exercício 1");
let Idade1 = 19;
if (Idade1 >=18) {
    console.log ( "Sim, é maior de idade");
}
console.log("----------------------------------------------------------------")

//Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true.
console.log("Exercício 2")
let Idade2 = 18;
let EspecieHumana = true;
if (Idade2 >=18 && EspecieHumana == true){
    console.log ("Sim, maior que 18 e sim é humano!");
}
console.log ("----------------------------------------------------------------")

//  Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro.
console.log ("Exercício 3");
let MesNiver = 1;
if ( MesNiver == 1 || MesNiver == 12 ){
    console.log ("Sim, faz aniversário em janeiro ou dezembro")
}
// Se o usuário fizer aniversário em Janeiro ou Dezembro, criei uma mensgem de felicitação.
// E se o usuário não fizer aniversário em nenhuma desses dois meses, criei outro tipo de mensagem.
// Praticando o Aprendizado.
console.log ("----------------------------------------------------------------")

console.log ("Praticando o Aprendizado!");
let MesNiver2 = 12; // Aqui é a resposta do usuário.

if ( MesNiver2 == 1 ){
    console.log ("Parabéns, você faz aniverário em janeiro!")
}     else{if ( MesNiver2 == 12 ){
        console.log ("Parabéns, você faz aniversário em dezembro")
    }
        else{console.log ("Não, você não faz aniversário em Janeiro ou Dezembro!")
    }}

    console.log ("fim!");

    console.log ("----------------------------------------------------------------")
    console.log ("Desafio Bônus 1");
// Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R.

let nome = "Rodrigo";
let resultado = nome.split(""); 
let tamanho = nome.length;
if (resultado[0] == "R"){
    console.log("Primeiro nome iniciado com letra R")
};
console.log ("----------------------------------------------------------------")

// 2. Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E.
console.log ("Desafio Bônus 2");

let NomeCompleto = "Edno de Assis Rodrigues"
let Sobrenome = NomeCompleto.split(" ");
let PrimeiroNome = Sobrenome[0];
let PrimeiraLetra = PrimeiroNome.split("")
let TamanhoS = (NomeCompleto.length-PrimeiroNome.length)-(Sobrenome.length-1);
if(PrimeiraLetra[0] == "E"){
    console.log (PrimeiroNome, ', seu primeiro nome começa com a letra E')
}
if(TamanhoS>6){
    console.log ("Seu sobrenome tem mais que seis letras:", TamanhoS, "ao todo.")
}




    



