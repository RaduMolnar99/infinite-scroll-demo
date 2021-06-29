import React, { useState } from "react"


export const FormItem = ({ onAddItem }) => {

    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [available, setAvailable] = useState(false)

    const onAddClick = () => {
        if(!name || !country){
            return
        }
        const item = {
            name,
            country,
            available
        }
        onAddItem(item)
        setName('')
        setCountry('')
        setAvailable(false)
    }
    
    const onNameChange = (name) =>{
        setName(name)
    }

    const onCountryChange = (country) =>{
        setCountry(country)
    }

    const onAvailableClick = (available) =>{
        setAvailable(!available)
    }

    return (
        <div style={{ display: "flex" }}>
            <div style={{ paddingRight: "10px" }}>
                Name: <input value={name} onChange={(event) => onNameChange(event.target.value)}/>
            </div>
            <div style={{ paddingRight: "10px" }}>
                Country: <input value={country} onChange={(event) => onCountryChange(event.target.value)}/>
            </div>
            <div style={{ paddingRight: "10px", display: "flex" }}>
                Available: <div style={{ cursor: "pointer" }} onClick={() => onAvailableClick(available)}>
                    {available ? "True" : "False"}
                </div>
            </div>
            <div style={{ paddingRight: "10px", cursor: "pointer", color: "green" }} onClick={() => onAddClick()}>
              Add
            </div>
        </div>
    )
}