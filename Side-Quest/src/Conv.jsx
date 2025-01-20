import { NameContext} from "./App.jsx"
import { useContext } from 'react'

export default function Conv() {
    const user = useContext(NameContext)
    return (
        <div className='text-2xl border-0 p-3 m-5'>
            <h2>Anyway {user} did you know....</h2>
        </div>
    )
}