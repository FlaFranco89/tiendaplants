import react, {useState} from "react";

function ItemCount ({stock, initial, onAdd}) {
    const [countItems, setCountItems] = useState(initial);

    const onIncrement = (stock) => {
        return countItems + 1 <= stock ? setCountItems (countItems + 1) : countItems;
    }

    const onDecrement = () => {
        return countItems - 1 >= 0 ? setCountItems (countItems - 1) : 0;
    }

    return (
        <div>
            <button onClick={onDecrement}>-</button>
            <input type="text" value={countItems} readOnly></input>
            <button onClick={() => onIncrement(stock)}>+</button>
            <button onClick={onAdd}>Agregar</button>
        </div>
    ); 
}

export default ItemCount;