import React from "react"


export const Item = ({ item, onUpdateItem, onDeleteItem }) => {

    const onAvailabilityClick = (item) => {
        const newItem = {
            ...item,
            available: !item.available
        }
        onUpdateItem(newItem)
    }
    const onRemoveClick = (item) => {
        onDeleteItem(item)
    }
  
    return (
        <div style={{ display: "flex" }}>
            <div style={{ paddingRight: "10px" }}>
                {item.id}
            </div>
            <div style={{ paddingRight: "10px" }}>
                {item.name}
            </div>
            <div style={{ paddingRight: "10px" }}>
                {item.country}
            </div>
            <div style={{ paddingRight: "10px", cursor: "pointer" }} onClick={() => onAvailabilityClick(item)}>
                {item.available ? "True" : "False"}
            </div>
            <div style={{ paddingRight: "10px", color: "red", cursor: "pointer" }} onClick={() => onRemoveClick(item)}>
                Remove
            </div>
        </div>
    )
}