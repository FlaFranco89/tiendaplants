import React from "react";
import "./ItemListContainer.css";

function ItemListContainer (props) {
    return (
        <h2 className="mensaje">{props.greeting}</h2>
    );
}

export default ItemListContainer;