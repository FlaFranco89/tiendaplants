import React from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import "./ItemListContainer.css";

function ItemListContainer (props) {
    return (
        <div className="mensaje">
            <h2>{props.greeting}</h2>
            <ItemCount stock={10} initial={1} />
        </div>
    );
}

export default ItemListContainer;