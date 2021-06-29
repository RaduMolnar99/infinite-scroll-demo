let itemsList = [
    {
        id        : 1,
        name      : "Ha1",
        country   : "RO",
        available : true
    },
    {
        id        : 2,
        name      : "Ha2",
        country   : "UK",
        available : true
    },
    {
        id        : 3,
        name      : "Ha1",
        country   : "RO",
        available : false
    },
    {
        id        : 4,
        name      : "Ha2",
        country   : "RO",
        available : false
    },
    {
        id        : 5,
        name      : "Ha1",
        country   : "RO",
        available : false
    }, {
        id        : 6,
        name      : "Ha1",
        country   : "RO",
        available : true
    },
    {
        id        : 7,
        name      : "Ha3",
        country   : "RO",
        available : false
    },
    {
        id        : 8,
        name      : "Ha1",
        country   : "RO",
        available : true
    },
    {
        id        : 9,
        name      : "Ha1",
        country   : "RO",
        available : false
    },
    {
        id        : 10,
        name      : "Ha1",
        country   : "RO",
        available : false
    },
    {
        id        : 11,
        name      : "Ha1",
        country   : "RO",
        available : true
    },
    {
        id        : 12,
        name      : "Ha1",
        country   : "RO",
        available : true
    }
]

let idCursor = 12


export const addData = (item) => {
    idCursor = idCursor + 1
    const newItem = {
        ...item,
        id: idCursor
    }
    itemsList.push(newItem)
    return newItem
}

export const getData = ({ page, searchText, filterFiled, filterValue, defaultPagination = 4 }) => {
    console.log(itemsList)
    if (page > 0) {
        const filteredList = filterFiled !== "" && filterFiled ?
            itemsList.filter((value) => {
                console.log(value)
                return value[filterFiled] === filterValue
            }) : itemsList
        const searchedList = searchText !== "" && searchText ?
            filteredList.filter((value) => value.name === searchText) : filteredList
        console.log(searchedList)
        const sliceStart = (page - 1) * defaultPagination
        const sliceEnd = page * defaultPagination
        return searchedList.slice(sliceStart, sliceEnd)
    }
    return []
}

export const updateData = (item) => {
    itemsList = itemsList.map((value) =>  item.id===value.id ? item : value)
    return item
}

export const deleteData = (item) => {
    itemsList = itemsList.filter((value) => value.id!==item.id)
    return item
}
