import React, {useState, createContext} from 'react';
import Comp2 from "./Comp2.jsx"

export const UserContext = createContext()

function Comp1(){
    const [user, setUser] = useState('Lexy')

    return(
        <div className='box'>
            <h2>Component1</h2>
            <UserContext.Provider value={user}>
                <h3>Hello {user}</h3>
                <Comp2 user={user} />
            </UserContext.Provider>
            
            
        </div>
    )

}
export default Comp1