import { useContext } from "react";
import { DataContext } from "./ProviderContext";

export const useData = () => {
    const context = useContext(DataContext)

    if(!context){
        throw new Error('useData is error')
    }
    return context
}