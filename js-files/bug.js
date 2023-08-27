const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    console.log(promedio);
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
