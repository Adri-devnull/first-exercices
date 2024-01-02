const WriteMessage = (props) => {
    const name = props.name;
    const material = props.material;
    const size = props.size;
    const note = props.note;
    return <h2>{name} ha hecho un pedido de {material} {size}. Ha dejado apuntado la siguiente nota:
        {note}</h2>
}

export default WriteMessage;