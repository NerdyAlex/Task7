
import { useReducer } from "react"

const currentstate = {
    firststate: 0
}

export default function Counter() {

    function reducer(state, action){
        switch(action.type){
            case "add":
                return {firststate: state.firststate + 1}
            case "sub":
                return { firststate: state.firststate - 1 }
            case "reset":
                return currentstate

            default:
                return state
        }
    }

    const [count, dispatch] = useReducer(reducer, currentstate)



    return (
        <div className="flex p-8 m-4 border-black border-[1px] h-[250px] text-xl">
            <button  className="outline-8 p-[1.2rem] h-[30%] border-black border-[2px] mr-[2rem]" onClick={() => {dispatch({type: 'add'})}}>Increment</button>
            <button className="outline-8 p-[1.2rem] h-[30%] border-black border-[2px] mr-[2rem]" onClick={() => { dispatch({ type: 'sub'}) }}>Decrement</button>
            <button className="outline-8 p-[1.2rem] h-[30%] border-black border-[2px] mr-[2rem]" onClick={() => { dispatch({ type: 'reset'}) }}>Reset</button>
            <h2 className="p-[1.2rem] h-[30%]  mr-[2rem]">{count.firststate}</h2>
        </div>
    )

    // const user = useContext(NameContext)
    // return (
    //     <div className='text-2xl border-0 p-3 m-5'>
    //         <h2>Hello there, {user}</h2>
    //     </div>
    // )
}



