function mayorArray(array) {
    if (array.length === 0) {
      return null;
    }
    
    if (array.length === 1) {
      return array[0];
    }
    
    let mayor = array[0];
    
    for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) {
        mayor = array[i];
      }
    }
    
    let numelementos = 0;
    while (numelementos < array.length) {
      console.log(array[numelementos]);
      numelementos++;
    }
    
    let impares = 0;
    
    let numimpares = 0;
    do {
      if (array[numimpares] % 2 !== 0) {
        impares++;
      }
      numimpares++;
    } while (numimpares < array.length);
    console.log("La cantidad de números impares es: " + impares)
    
    return mayor;
  }
  