import { useInfiniteScroll } from "../hooks/useInfiniteScroll"
import React, { useEffect, useState } from "react"
import { Item } from "./Item"
import { addItemRequested, deleteItemRequested, getItemsRequested, updateItemRequested } from "../store/actions"
import { FormItem } from "./FormItem"


const List = () => {

    const {
        data, page, loading, refreshing, loadMore, 
        loadPrevious, refresh, search, filter, updateItem,
        deleteItem, addItem
    } = useInfiniteScroll(getItemsRequested, addItemRequested, updateItemRequested, deleteItemRequested)

    const [filterText, setFilterText] = useState("")
    const [filterField, setFilterField] = useState("")
    
    useEffect(()=>{
        filter(filterField, filterText)
    },[filterText, filterField])

    console.log("Here", data)
    console.log("Loading", loading)
    console.log("Refreshing", refreshing)

    const mappedData = data.map((value) => {
        return (
            <Item item={value} onUpdateItem={updateItem} onDeleteItem={deleteItem}/>
        )
    })
    
    return (
        <div>
            <div>
        Data: {mappedData}
            </div>
            <div>
                Search: <input onChange={(event) => search(event.target.value)}/>
            </div>
            <div>
                Filter by <input onChange={(event) => setFilterField(event.target.value)}/>
                with value <input onChange={(event) => setFilterText(event.target.value)}/>
            </div>
            <div>
        Page: {page}
            </div>
            <div>
                Loading: {loading && <div>True</div>}
            </div>
            <div>
        Refreshing: {refreshing && <div>True</div>}
            </div>
            <button onClick={loadPrevious}>Load Previous</button>
            <button onClick={loadMore}>Load More</button>
            <div style={{ paddingBottom: "10px" }}>
                <FormItem onAddItem={addItem}/>
            </div>
        </div>
    )
}
export default List