function Random ({min, max}) {

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//  (max - min + 1) inclous el maxim dintre de la equacio; Calcula el intervalo de valores posibles, incluidos el mínimo y el máximo. Añadiendo 1 se tiene en cuenta el rango inclusivo.
// Math.random() * (máx - mín + 1): Genera un número aleatorio de coma flotante entre 0 (inclusivo) y el intervalo (excluyente). Por ejemplo, si el rango es de 1 a 10, generará un número entre 0 (inclusivo) y 11 (exclusivo).
// .... + min Añade el valor mínimo al resultado, desplazando el rango para que empiece en min en lugar de 0.

//Usando Math.floor(Math.random() * (max - min + 1)) + min, podemos generar un número entero aleatorio dentro del rango inclusivo de min a max.

//Por otro lado, Math.floor(Math.random() * (max - min)) sin añadir 1 al rango excluiría el valor máximo del posible rango de números generados. Esto puede no ser deseable en ciertos casos en los que se desea incluir el valor máximo.

    return(
<>
<p> Random value between {min} and {max}:</p>
<p>{randomNum}</p>
</>
    );
}

export default Random; 