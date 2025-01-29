import React, {useContext} from 'react';
import {UserContext} from './Comp1.jsx';

function Comp4(){
    const user = useContext(UserContext)

    return (
        <div className='box'>
            <h2>Component4</h2>
            <h3>{`Bye ${user}`}</h3>
        </div>
    )
    
}
export default Comp4