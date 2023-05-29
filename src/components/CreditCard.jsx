function CreditCard(props) {
  // console.log(props)

  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  return (
    <>
      <img src={type === 'Visa' ? '/visa.png' : 'mastercard.png'} alt={type} />
        <p>.... .... .... {number.slice(-4)}</p> 
        <p>
            Expires {expirationMonth}/{expirationYear.toString().slice(-2)}
        </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </>
  );
}

export default CreditCard;

// {number.slice(-4)} --> extarer los 4 ultimos digitos
// tot el que son numeros i has de treballar amb ells, converteixlos en STRING ( .toString() )