const TotalPrice = (props) => {
    const iva = (props.price / 100) * 21;
    return <h2>{props.price + iva}</h2>
}

export default TotalPrice;