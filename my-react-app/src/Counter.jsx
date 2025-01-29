import React, {useState} from 'react'

function Counter(){

const [counter, setCounter] = useState(0)

const add = () =>{
    setCounter(c => c + 1)
}

const sub = () =>{
    setCounter(c => c - 1)
}

    const reset = () =>{
    setCounter(0)
}

return(
    <>
        <p className='num'>{counter}</p>
        <div className='count'>
            <button onClick={add}>+</button>
            
            <button onClick={reset}>Reset</button>
            <button onClick={sub}>-</button>
        </div>
    </>
    
)

}

export default Counter