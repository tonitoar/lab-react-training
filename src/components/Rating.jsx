function Rating (props) {

    const { children } = props;
    const roundedRating = Math.round(children); // Round the rating value
  
    const stars = '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating); // Create a string of stars and empty stars

    return(
        <>
        <div>{stars}</div>
        </>
    );
}

export default Rating; 

 /*
'★'.repeat(roundedRating): Esta parte del código utiliza la función repeat() en la cadena '★' para repetir el símbolo de estrella relleno (★) roundedRating número de veces. La función repeat() crea una nueva cadena repitiendo la cadena original un número determinado de veces. En este caso, repite el símbolo de estrella relleno roundedRating veces.

'☆'.repeat(5 - roundedRating): Esta parte del código utiliza la función repeat() en la cadena '☆' para repetir el símbolo de estrella vacío (☆) 5 - roundedRating número de veces. Aquí, restamos roundedRating de 5 para determinar el número de estrellas vacías necesarias.

Al repetir el símbolo de la estrella rellena roundedRating veces y el símbolo de la estrella vacía 5 - roundedRating veces, creamos una representación de cadena de las estrellas y las estrellas vacías basada en el valor de calificación. Por ejemplo, si roundedRating es 3, el resultado será '★★★☆☆', indicando 3 estrellas llenas y 2 estrellas vacías. */