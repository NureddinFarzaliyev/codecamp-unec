import { useState } from "react"
import { DataContext, DataDispatch } from "./DataContext"

export function DataProvider( {children} ) {
  const [data, setData] = useState([]) 

  return (
    <DataContext.Provider value={data}>
      <DataDispatch.Provider value={setData}>
        {children}
      </DataDispatch.Provider>
    </DataContext.Provider>
  )
}
