import { DataDispatch } from "./contexts/DataContext"
import { useContext } from "react"

const dataDispatch = useContext( DataDispatch )

export const FILTER_TYPES = { 
    CATEGORY: 'c',
    AREA: 'a',
}

export const fetchAndDispatch = (url) => {
    axios.get(url).then( response => {
        dataDispatch(response.data.meals ? response.data.meals : [''])
    }).catch(err=>console.error(err))
}  