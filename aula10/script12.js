palavra = 'aleatorio';
(function(){
document.write(`esta palavra tem ${palavra.length} caracteres <br>`);
document.write(`esta palavra ${palavra} ficou ${palavra.toUpperCase()} <br>`);
document.write(`a letra '${pslsvra[2]}' é o terceiro caracter <br>`);
document.write(`${palavra} ficou ${palavra.replace(palavra[2], 'x')}`);
})(palavra)