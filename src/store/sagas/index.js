import { put, takeEvery } from 'redux-saga/effects'
import {
    ADD_ITEMS_REQUESTED,
    addItemSucceeded,
    DELETE_ITEM_REQUESTED, deleteItemSucceeded,
    GET_ITEMS_REQUESTED,
    getItemsSucceed,
    UPDATE_ITEM_REQUESTED,
    updateItemSucceeded
} from "../actions"
import { addData, deleteData, getData, updateData } from "../../constants"


function* fetchItems(action) {
    const items = getData(action.payload).reduce((items, value) => {
        items[value.id] =value
        return items
    }, {})
    yield put(getItemsSucceed(items))
}

function* addItem(action) {
    const item = addData(action.payload)
    yield put(addItemSucceeded(item))
}

function* updateItem(action) {
    const item = updateData(action.payload)
    yield put(updateItemSucceeded(item))
}

function* deleteItem(action) {
    const item = deleteData(action.payload)
    yield put(deleteItemSucceeded(item))
}

export function* saga() {
    yield takeEvery(GET_ITEMS_REQUESTED, fetchItems)
    yield takeEvery(ADD_ITEMS_REQUESTED, addItem)
    yield takeEvery(UPDATE_ITEM_REQUESTED, updateItem)
    yield takeEvery(DELETE_ITEM_REQUESTED, deleteItem)
}
