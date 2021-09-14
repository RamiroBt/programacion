const Busquedabinaria =(numeros: Array<number>, n1: number): number => {
let Imin: number= 0; // let es para asignar variables
let Imax: number= numeros.length -1;
do{
    let indice: number = (Imin + Imax) / 2;
    if(numeros[indice] === n1) {
        return indice;
    } else {
        if(Imin === Imax) {
            return - 1;
        } else {
            if (numeros[indice] < n1) {
                 Imin = indice + 1; 
            } else{
                Imax = indice - 1;
            }
        }
      }
    } while (Imin <= Imax)
    return - 1;
}