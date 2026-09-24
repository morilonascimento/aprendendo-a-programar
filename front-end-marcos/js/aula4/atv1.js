function saudacao(nome) {
    console.log("Olá," + nome + "!")
}

saudacao("João")
saudacao("Maria")
saudacao("Pedro")

function soma(a,b) {
    return a + b;
}

let resultado = soma(3,5);
console.log(resultado)

function soma(a,b) {
    return a + b;
}

function subtracao(a,b) {
    return a - b;
}

function mutiplicacao(a,b) {
    return a * b;
}

function divisao(a,b) {
    if(a === 0 && b === 0) {
        console.log("não é posivel dividir nenhum numero por 0")
    }
    return a / b;
}

let r = soma(3,5);
console.log(r)

let re = subtracao(5,3);
console.log(re)

let res = mutiplicacao(3,5);
console.log(res)

let resu = divisao(6,0);
console.log(resu)


const somaArrow =(a, b) => {
    return a + b;
};

const somaCurta = (a, b) => a + b;

console.log (somaArrow(4, 4));
console.log (somaCurta(4, 4));