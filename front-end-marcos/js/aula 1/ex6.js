let lado1 =3;
let lado2 = 3;
let lado3 = 3;

if(lado1 === lado2 && lado2 === lado3){
    console.log("Equilatero")
}

else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Isósceles")
}

else {
    console.log("Escaleno")
}