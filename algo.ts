const buscar_el_mayor = ( n : number): number =>{
    let numero = n - 1
    while (numero < n ) {
        console.log ("¿cuantos numeros queres sumar?");
        numero = readNuberLine ();
        if ( numero < n) {
            console.log ("al menos tine que ser", n);
        } else {

        }
    } return numero;
} 

const cargarlista = (total: number): Array<number> => {
    let ingresados : number = 0;
    let cargados: Array<number> [];
    while (cargados.length < total) {
        console.log ("ingrese un numero");
        ingresados = readNuberLine ();
        cargados.push (ingresados);
    }
    return cargados;
}