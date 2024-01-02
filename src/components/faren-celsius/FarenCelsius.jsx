const FarenCelsius = (props) => {
    return <h2> {(props.degrees - 32) / 1.8}</h2>
}

export default FarenCelsius;