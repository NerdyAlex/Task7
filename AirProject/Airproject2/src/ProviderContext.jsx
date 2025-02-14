import { createContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext()



export default function ProviderContext({ children }){

    

    const [data, setData] = useState({
        datafile1 : {},
        datafile2: {},

        

    })

    const updateData = (sou, newData) => {
        setData(d => ({
            ...d,
            [sou]: {...d[sou], ...newData}
        }))
    }

    return(
        <DataContext.Provider value={{ data, updateData }}>
           {children}
        </DataContext.Provider>
    )



}
