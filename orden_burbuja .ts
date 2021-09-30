function orden_burbuja () {
   let lista: number = [19, 23, 4, 6];
   let i : number = 0;
   let n = lista.length - 1;
   let k: number = 0;
   for ( i < n; i + 1;) {
      for (k < n; k + 1;) {
         if ( lista[k] > lista[k + 1]) {
            let aux= lista [k]
            lista [k] = lista [k + 1] 
            lista [k + 1] = aux
         } 
      }
   }
}