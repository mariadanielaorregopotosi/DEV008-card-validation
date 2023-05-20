//se crea una const el cual no se puede moditicar es un valor unico
const validator = {
  // se crea una de las pruebas unitarias isValid(una funcion) acepta un parametro llamado numeroDeTarjeta
  //representa el numero de tarjeta a validar
  isValid: function (numeroTarjeta) {
    // 0:CONVIERTO EN ARRAY se crea una contante se le da el nombre de convertir numero en arreglo
    //esto es igua al parametro o numero el cual le indicamos que nos lo convierta a un array
    const convertirNumeroEnArreglo = numeroTarjeta.split("");
    //1:REVERSO NUMERO TARJETA
    //creamos otra const le damos el nombre de tarjetaRverses y indicamos que queremos reversar
    //el convertirNumeroEnArreglo y aplicamos el . reverse
    const tarjetaReverse = convertirNumeroEnArreglo.reverse();
    // 2: Doble cada segundo dígito
    const tarjetaDoblarNumero = [];
    //El método forEach() ejecuta la función indicada una vez por cada elemento del array.
    tarjetaReverse.forEach(function (elemento, index) {
      if (index % 2 !== 0) {
        const doble = elemento * 2;
        return tarjetaDoblarNumero.push(doble.toString());
      }
      return tarjetaDoblarNumero.push(elemento);
    });
    //3:TARJETA LISTA PARA SUMAR
    const tarjetaListaParaSumar = [];
    tarjetaDoblarNumero.forEach(function (elemento) {
      if (elemento > 9) {
        let sumaDeDigitos = 0;
        const elementoConvertidoArreglo = elemento.split("");
        elementoConvertidoArreglo.forEach(function (digito) {
          sumaDeDigitos = sumaDeDigitos + Number(digito);
        });
        return tarjetaListaParaSumar.push(sumaDeDigitos);
      }
      return tarjetaListaParaSumar.push(Number(elemento));
    });

    // 3: Suma los dígitos
    let totalSuma = 0;
    tarjetaListaParaSumar.forEach(function (elemento) {
      totalSuma = totalSuma + elemento;
    });

    //const suma = tarjetaArray.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    if (totalSuma % 10 === 0) {
      return true;
    } else {
      return false;
    }
    // 4: Verifica si es válido
    // const esValida = suma % 10 === 0; //condicional para retornar en verdadero;
  },

  maskify(numeroTarjeta) {
    //se utiliza para almacenar el valor de la longitud de una cadena de texto. elemplo un numero de tarjeta
    //numeroTarjeta es una cadena de texto que representa un número de tarjeta
    //numeroTarjeta.length, obtendremos el número de caracteres en esa cadena.
    //La propiedad length es una propiedad incorporada la cantidad de elementos en un array
    const longitud = numeroTarjeta.length;
    const ultimosCuatroDigitos = numeroTarjeta.substr(-4); // Obtener los últimos cuatro dígitos

    let caracteresEnmascarados = "";
    for (let i = 0; i < longitud - 4; i++) {
      caracteresEnmascarados += "#"; 
      // Agregar un carácter de enmascaramiento por cada dígito excepto los últimos cuatro
    }

    return caracteresEnmascarados + ultimosCuatroDigitos;
  },
};

export default validator;
