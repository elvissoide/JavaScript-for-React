const calcularPrecioFinal = function (a, b, ...args) {
    let suma = 0;
    let total = suma + a + b;
    if (args.length > 0) {
        args.forEach(e => total += e);
    }
    total *= 1.1; // Aplica un incremento del 10%
    total = Math.round(total * 100) / 100; // Redondea a 2 decimales
    return total;
}

console.log(calcularPrecioFinal(15, 25, 10, 30, 5));
