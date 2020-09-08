// const texto = "A porta está: ";
// const texto2 = "Cansei ";

// let porta = "fechada";


// function alteraPorta(estado){
//     porta = estado;
     
// }

// console.log(texto + porta)

// alteraEstadoPorta("aberta");
// console.log(texto + porta);

// alteraEstadoPorta('encostada');
// console.log(texto + porta);

// alteraEstadoPorta("quebrada");
// console.log(texto2 + texto + porta);


// ********Tipos de funções********

// 1 - Realiza uma tarefa, não devolve nada!
// Exp.: 
// function mostraNome(){
//     console.log("Felipe Oliveira")
// }
// mostraNome();

// 2 - Faz uma operação e retorna algo
// Exp.:

// function dividePorTres(valor){
//     return (valor / 3);
// }

// console.log(dividePorTres(102));
   // OU
// let resultado = dividePorTres(99);
// console.log(resultado);

// let texto = "O resultado é: "

// function multiplicaPorCinco(valor){
//     return (valor * 5 / 2);
// }

// console.log(texto + multiplicaPorCinco(5));

// let resultado = multiplicaPorCinco(20);

// console.log(texto + resultado);




// let hora = 20;

// if (hora >= 6 && hora < 12){
//    console.log('Bom dia!');

// } else if (hora >= 12 && hora < 18){
//    console.log('Boa tarde!');

// } else {
//    console.log('Boa noite');
// }



// let idade = 17; 
// let sexo = 'g';

// if (idade >= 18 && sexo === 'm' ){
//    console.log('você é homem maior de idade');

// } else if (idade < 18 && sexo === 'f'){
//    console.log('você é mulher maior menor de idade');
// } else {
//    console.log('dados inválidos')
// }

// let nome = 'júlia';

// if (nome === 'júlia'){
//    console.log('teste')
// } else {
//    console.log('error!')
// }

// let difficulty;
// difficulty = 'easy';

// switch (difficulty){
//    case 'easy': 
//    console.log('mode: easy');
//    break;

//    case 'normal':
//    console.log('mode: normal')
//    break;

//    case 'hard':
//    console.log('mode: hard');
//    break; 

//    default:
//       console.log('no mode select.');
// }



// let acesso;
// acesso = 'negado';

// switch (acesso){
//    case 'liberado':
//    console.log('Acesso liberado!')
//    break;

//    case 'negado':
//    console.log('negado!');
//    break;

//    default:
//    console.log('undefiend');
// }


// ****************FOR

// for (let i = 1; i <= 5; i++) {
//    if(i % 2 !== 0){
//       console.log(i);
//    } 

// }

// ***************while

// let i = 1;

// while (i <= 5) {
//    if(i % 2 !== 0){
//       console.log('texto', i);
//    } 
//    i++;
// } 


// const pessoa = {
//    nome: 'felipe',
//    idade: 26
// }

// for(let chave in pessoa) {
//    console.log(chave,pessoa['nome']);
// }


// let cadastro = ['m', 18];

// for (let pessoa of cadastro){
//    console.log(pessoa);
// }


// let maior = numeroMaior(11, 40);
// console.log(maior);

// function numeroMaior(n1 , n2) {
//    return n1 > n2 ? n1 : n2;   
// }



// let nMaior = maiorN(2, 2)
// console.log(nMaior)

// function maiorN(n1, n2){
//    return n1 > n2 ? n1 : n2;
// }

// let n1 = fizzBuzz(11);
// console.log(n1);

// function fizzBuzz(entrada){
//    if ( typeof entrada !== 'number')
//       return 'not a number';
//    if ( entrada % 3 === 0 && entrada % 5 === 0) 
//       return 'fizzBuzz';
//    if ( entrada % 3 === 0)
//       return 'fizz';
//    if ( entrada % 5 === 0)
//       return 'buzz';

//    return entrada;

// }




// criar uma função que :
// fizzbuzz 
// quando o numero for divisivel por 3 deve retornar fizz
// quando o numero for divisivel por 5 deve retornar buzz
// quando for divisivel pelos 2 numeros (3 e 5) retornar fizzbuzz
// quando não for divisivel por nenhum, retornar o numero de entrada.buzz



// let resultado = fizzBuzz(31);
// console.log(resultado);


// function fizzBuzz(entrada){
//    if (entrada % 3 === 0 && entrada % 5 === 0)
//       return 'fizzBuzz';   
//    if (entrada % 3 === 0)
//       return 'fizz';
//    if (entrada % 5 === 0)
//       return 'buzz';
//    if ( typeof entrada !== 'number')
//       return 'not a number';
   
//    return entrada;
// }



// velocidade max.= 70;
// pontosPorKm = 5;
// 1 ponto por 5 km;
// Math.Floor()


// verificarVelocidade(120);

// function verificarVelocidade(velocidade){
//    if (velocidade <= 70){
//       console.log('Dentro da valocidade permitida');
//    } else {
//       const pontos = Math.floor(((velocidade - 70) / 5));
//       if (pontos >= 12)
//          console.log('Carteira Suspensa!');
//       else 
//          console.log('Quantidade de ponto: ' + pontos);
//    }
// }





// velocidade max.= 70; == ok 
// kmPorPonto = 5; 
// 1 ponto por 5 km a mais da velocidade;
// Math.Floor()
// acima de 12 pontos = carteira suspensa


// confereVelocidade(110);

// function confereVelocidade(velocidade){
//    const maxVelo = 70;
//    const kmPorPonto = 5;


//    if (velocidade <= maxVelo){
//       console.log('Dentro da velocidade permitida!')
//    } else {
//       const pontos = Math.floor((velocidade - maxVelo) / kmPorPonto);
//       if (pontos >= 12){
//          console.log('Carteira suspensa!, Pontos atingidos: ' + pontos);
//       } else 
//          console.log('Pontos: ' + pontos);   

//    }
// }


// acessoLiberado(21, 'felipe'); 



// function acessoLiberado(idade, nome){
//    return idade >= 18 && nome === 'felipe' ? console.log('Ok') : console.log('Acesso negado, dados não correspondentes!');
// }




// par or ímpar 


// parOuImpar(10);

// function parOuImpar(quantidade){
//    let numeros = 0;
//    for (numeros = 0; numeros <= quantidade; numeros++){
//       if (numeros % 2 !== 0){
//          console.log('Nº impares: ' + numeros);
//       } else {
//          console.log('Nº pares: ' + numeros);
//       }
//    }
// }



// for (let i = 1; i <= 5; i++){
//    if (i % 2 !== 0){
//       console.log('Nº impares: ' + i)
//    } else {
//       console.log('Nº pares: ' + i)
//    }     

// }






// parImpar(10)

// function parImpar(valor){
//    let n1 = 0;
//    for (n1; n1 <= valor; n1 ++){
//       if (n1 % 2 === 0){
//          console.log('nº par: ' + n1);
//       } else {
//          console.log('nº impar: ' + n1);
//       }
//    }
// }


// const filme = {
//    titulo : 'vingadores',
//    ano : 2020,
//    diretor : 'steve',
//    personagem : 'thor'
// }

// exibePropriedade(filme);

// function exibePropriedade(ob){
//    for (pro in ob)
//       if(typeof ob[pro] === 'string')
//          console.log(pro, ob[pro])
// }



// const filme = { 
//    titulo: 'blablabla',
//    ano: '4004',
//    diretor: 'elemesmo',
//    personagem: 'nuncanemvi'
// }


// exibeProp(filme);

// function exibeProp(obj){
//    for(prop in obj){
//       if (typeof obj[prop] === 'string')
//          console.log(prop, obj[prop])
//    }
// }


// somar(10);

// function somar(limite){
//    let multiplosDe3 = 0;
//    let multiplosDe5 = 0;

//    for(i=0; i <= limite; i++){
//       if(i % 3 === 0)
//          multiplosDe3 += i;
//       if(i % 5 === 0)
//          multiplosDe5 += i;
//    }

//    console.log(multiplosDe3);
// }








// const array = [100,80,80]; 

// console.log(mediaAlunoNota(array));

// function mediaAlunoNota(notas){
//    const mediaArray = calcularMedia(notas);


//    if (mediaArray <= 59){
//       return 'Nota F'
//    } if (mediaArray >= 60 && mediaArray <= 69){
//       return 'Nota D-'
//    } if (mediaArray >= 70 && mediaArray <= 79){
//       return 'Nota C'
//    } if (mediaArray >= 80 && mediaArray <= 89){
//       return 'Nota B'
//    } if (mediaArray >= 90)
//       return 'Nota A'
// }

// function calcularMedia(array){
//    let soma = 0;
//    for (let valor of array) {
//       soma += valor;
//    }
//    return soma/(array.length);
// }







// exibirNumeroPrimos(20);


// function exibirNumeroPrimos(limite){
//    for(let numero = 2; numero <= limite; numero++){
      

//       if (numeroPrimo(numero)) console.log(numero);
//    }
// }

// function numeroPrimo(numero){
    
//       for (let divisor = 2; divisor < numero; divisor++){
//          if(numero % divisor === 0) {
//             return false;
//          }
//       }
//       return true; 
// }





// function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
//    this.marcaCelular = marcaCelular,
//    this.tamanhoTela = tamanhoTela,
//    this.capacidadeBateria = capacidadeBateria,
//    this.ligar = function() {
//       console.log('Fazendo Ligação...');
//    }

// }


// const celular = new Celular('xiaomi', 5.5, 5000);
 
// console.log(celular);





// const celular = {
//    marcaCelular : 'Xiaomi',
//    tamanhoTela: {
//       vertical: 150,
//       horizontal: 75
//    },
//    ligar: function(){
//       console.log('Fazendo ligação...');
//    }
// }

// const novoObjeto = Object.assign({
//    bateria: 5000
// },celular);
// console.log(novoObjeto);


// const objeto2 = {...celular};
// console.log(objeto2)

// const mensagem = 'minha primeira mensagem';

// const outraMsg = new String('bom dia');


// const data1 = new Date();



// let endereco = {
//    Rua: 'QSE',
//    Cidade: 'Taguatinga',
//    CEP: 72025070,
// }

// function exibirEnd(endereco){
//    for(let chave in endereco)
//       console.log(chave, endereco[chave]);
// }

// exibirEnd(endereco);



// let postagem = {
//    Titulo: 'blabla',
//    mensagem: 'blablabla',
//    Autor: 'blablabla',
//    vizualizacoes: 132,
//    comentarios: [
//      'blabla',
//      12
//    ],
//    aovivo: true,
// }

// console.log(postagem);



// function Postagem(titulo, mensagem, autor){
//    this.titulo = titulo,
//    this.mensagem = mensagem,
//    this.autor = autor,
//    this.visualizacoes = 0;
//    this.comentario = [];
//    this.estaAoVivo = true;
// }

// let nvPostagem = new Postagem('fulano', 'oiamor', 'Felipe');
// console.log(nvPostagem);



// const numeros = [1,2,3];


// //inicio 
// numeros.unshift(9);

// //meio 
// numeros.splice(3, 1, 'c');

// //final 
// numeros.push(5);


// const nomes = ['felipe', 10, 11, 'oliveira', 'saraiva'];

// console.log(nomes.includes('felipe' && 12));








// const alunos = [
//    {id:1, nome:'Felipe'},
//    {id:2, nome:'Oliveira'},
// ]


// const aluno = alunos.find(function(aluno){
//    return aluno.nome === 'Felipe';
// })

// console.log(aluno);



// // Arrow function

// const escolas = [
//    {id: 1, nome: 'catolica'},
//    {id: 2, nome: 'Claretiano'}
// ];


// console.log(escolas.find(escola => escola.nome === 'catolica'));




// const nomes = ['Felipe', 'joão', 'maria', 'julia', 'Milane'];

// nomes.push();
// nomes.unshift();
// nomes.splice();
// console.log(nomes);


// // exclui elemento do Final 

// nomes.pop();
// console.log(nomes);

// // exclui elemento do Inicio

// nomes.shift();
// console.log(nomes);

// // exclui elemento referente a posição que indicar do array
// nomes.splice(0, 1);
// console.log(nomes);



// // limpar um Array

// let numbers = [1,2,3,4,5,6];
// const numeros = numbers;

// // solution 1 
// numbers.length = 0;
// console.log(numbers);



// // Solution 2
// numbers.splice(0,numbers.length);
// console.log(numeros);



// // mesclar arrays 

// // utilizando spread 

// const primeiro = [1,2,3];
// const segundo = [4,5,6,7];

// console.log(...primeiro,...segundo);


// // 2ª opção de mesclar arrays

// console.log(primeiro.concat(segundo));


// // dividir um array

// const todos = [1,2,3,4,5,6];

// console.log(todos.slice(3,6));



// // Interando arrays (forEach)

// const numbers = [1,2,3,4,5,6];

// numbers.forEach(number => console.log(number));



// // Combinando Arrays com (join);

// const numbers = [1,2,3,4,5,6];

// console.log(numbers.join('_'));




// // combinando com (Split);

// const frase = 'Minha filha, meu amor, Maria Júlia seu papai te ama!!!';

// const resultado = frase.split(' ');
// console.log(resultado);

// console.log(resultado.join('_'));


// function verificarEntrada(){
//    let nomeConvidado = document.getElementById('nomeConv').value;
//    let donoFesta = document.getElementById('donoDafesta').value;
//    let convidadosFelipe = ['Júlia', 'Milane', 'João', 'Maria', 'Gustavo'];
   


//    if (convidadosFelipe.includes(nomeConvidado) && donoFesta === 'Felipe') {
//       document.getElementById('permicaoentrada').innerText = 'Entrada permitida, boa festa!';
//    } else {
//       document.getElementById('permicaoentrada').innerText = 'Entrada negada, you are not on the list';
//    }
// }


// // requisitions AJAX 

// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/saraivafelipe27');
// xhr.send(null);

// xhr.onreadystatechange = function() {
//    if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.responseText));
//    }
// }



// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/saraivafelipe27');
// xhr.send(null);


// xhr.onreadystatechange = function() {
//    if(xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.responseText));
//    }
// }




// // PROMISES 



const minhaPromise = () => new Promise((resolve, reject) => {
   setTimeout(() => { resolve('Ok') }, 2000);
})  

minhaPromise().then(response => {
   console.log(response);
})

// var minhaPromise = function() {
//    return new Promise(function(resolve, reject) {
//       var xhr = new XMLHttpRequest();
//       xhr.open('GET', 'https://api.github.com/users/saraivafelipe27');
//       xhr.send(null);

//       xhr.onreadystatechange = function() {
//          if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                resolve(JSON.parse(xhr.responseText));
//             } else {
//                reject('Erro na requisição');
//             }
//          }
//       }
//    })
// }


// minhaPromise()
//    .then(function(response){
//       console.log(response);
//    })
//    .catch(function(error){
//       console.warn(error);
//    });


// // Utilizando AXIOS

// axios.get('https://api.github.com/users/saraivafelipe')
//    .then(function(response){
//       console.log(response);
//    })
//    .catch(function(error){
//       console.warn(error);
//    });

