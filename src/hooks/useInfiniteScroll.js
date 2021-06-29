
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getItemsList } from "../store/selectores"
import { useDispatch } from "react-redux"


export const useInfiniteScroll = (fetchAllAction, addAction, updateAction, deleteAction ) => {
    const dispatch = useDispatch()
    const data = useSelector(getItemsList)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [filterFiled, setFilterField] = useState("")
    const [filterValue, setFilterValue] = useState("")

    useEffect( () =>{
        if(!loading){
            setLoading(true)
            dispatch(fetchAllAction({ page, searchText, filterFiled, filterValue  }))
            setLoading(false)
            setRefreshing(false)
        }
    }, [page, refreshing])

    const filter = (field, value) => {
        setFilterField(field)
        setFilterValue(value)
        setPage(1)
        setRefreshing(true)
    }

    const search = (search) => {
        setSearchText(search)
        setPage(1)
        setRefreshing(true)
    }

    const refresh = () => {
        setPage(1)
        setRefreshing(true)
    }
    const loadMore = () => {
        setPage(page+1)
    }
    const loadPrevious = () => {
        setPage(page - 1)
    }

    const addItem = (item) => {
        dispatch(addAction(item))
        setPage(1)
        setRefreshing(true)
    }


    const updateItem = (item) => {
        dispatch(updateAction(item))
    }

    const deleteItem = (item) => {
        dispatch(deleteAction(item))
        setPage(1)
        setRefreshing(true)
    }
    return {
        data, page, loading, refreshing, loadMore, loadPrevious, 
        search, filter, refresh, updateItem, deleteItem, addItem 
    }
}
