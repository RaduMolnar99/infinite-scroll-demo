

export const ADD_ITEMS_REQUESTED = "ITEMS_ADD_REQUESTED"
export const ADD_ITEMS_SUCCEEDED = "ITEMS_ADD_SUCCEEDED"

export const UPDATE_ITEM_REQUESTED = "ITEM_UPDATE_REQUESTED"
export const UPDATE_ITEM_SUCCEEDED = "ITEM_UPDATE_SUCCEEDED"

export const DELETE_ITEM_REQUESTED = "ITEM_DELETE_REQUESTED"
export const DELETE_ITEM_SUCCEEDED = "ITEM_DELETE_SUCCEEDED"

export const GET_ITEMS_REQUESTED = "ITEMS_GET_REQUESTED"
export const GET_ITEMS_SUCCEEDED = "ITEMS_GET_SUCCEEDED"

// Actions

export const addItemRequested = (item) => {
    return{
        type    : ADD_ITEMS_REQUESTED,
        payload : {
            ...item
        }
    }
}

export const addItemSucceeded= (item) => {
    return{
        type    : ADD_ITEMS_SUCCEEDED,
        payload : {
            ...item
        }
    }
}
export const updateItemRequested = (item) => {
    return{
        type    : UPDATE_ITEM_REQUESTED,
        payload : {
            ...item
        }
    }
}

export const updateItemSucceeded= (item) => {
    return{
        type    : UPDATE_ITEM_SUCCEEDED,
        payload : {
            ...item
        }
    }
}

export const deleteItemRequested = (item) => {
    return{
        type    : DELETE_ITEM_REQUESTED,
        payload : {
            ...item
        }
    }
}

export const deleteItemSucceeded= (item) => {
    return{
        type    : DELETE_ITEM_SUCCEEDED,
        payload : {
            ...item
        }
    }
}

export const getItemsRequested = (params) => {
    return{
        type    : GET_ITEMS_REQUESTED,
        payload : {
            ...params
        }
    }
}

export const getItemsSucceed = (items) => {
    return{
        type    : GET_ITEMS_SUCCEEDED,
        payload : {
            ...items
        }
    }
}

