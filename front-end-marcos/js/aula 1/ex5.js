let ano = 2036;

if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0 ) {
    console.log("É bissexto")
}
else {
    console.log("Não é bissexto")
}

//outra forma de resolver 
if((ano % 4 === 0 && !(ano % 100 === 0)) || ano % 400 === 0) {
    console.log("É bissexto")
}
else {
    console.log("Não é bissexto")
}