let numeros = 4;
avance = 1;
let divisores = [];
perfectos  = [];
Contador = 1;

while (true) {
    contador = 1;
    while (contador < avance) {
        if (avance%contador == 0) {
            divisores. push(contador);
        }
        Contador++;
    }

    let verificar = (divisores. reduce((a, b) => a + b, 0 ));

    if (avance == verificar) {
        perfectos. push(avance);
    }

    divisores = [];

    if (perfectos. longitud == numeros) {
        quebrar
    } 
    {
        avance++;
    }
}
consola. log("Cantidad de perfectos: ", numeros, "Números perfectos: ", perfectos);