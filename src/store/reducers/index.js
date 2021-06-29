import { ADD_ITEMS_SUCCEEDED, DELETE_ITEM_SUCCEEDED, GET_ITEMS_SUCCEEDED, UPDATE_ITEM_SUCCEEDED } from "../actions"

import { combineReducers } from "redux"


const initialState = {
    entities: {

    }
}

const itemsReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_ITEMS_SUCCEEDED:{
            console.log("ADD STORE", action.payload)
            const item = action.payload
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [item.id]: item
                }
            }
        }
        case GET_ITEMS_SUCCEEDED:{
            console.log("GET STORE", action.payload)
            const items = action.payload
            return {
                ...state,
                entities: {
                    ...items
                }
            }
        }
        case UPDATE_ITEM_SUCCEEDED:{
            console.log("UPDATE STORE", action.payload)
            const item = action.payload
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [item.id]: item
                }
            }
        }
        case DELETE_ITEM_SUCCEEDED: {
            console.log("DELETE STORE", action.payload)
            const item = action.payload
            delete state.entities[item.id]
            return {
                ...state,
                entities: {
                    ...state.entities
                }
            }
        }
        default:{
            return state
        }
    }
}

export default combineReducers({
    items: itemsReducer
})
