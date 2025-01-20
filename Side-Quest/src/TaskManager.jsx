import { useState, useEffect, useRef,  useReducer} from "react"

const currentvalue = {
    task: '',
    tasks: [],
    num: 0
}
function reducer(state, action){


    switch(action.type){
        case 'Add task':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                task: "",
                num: state.num + 1
            }
        case "Set input":
            return{
                ...state,
                task: action.payload
            }
            
        case 'Remove task':
            return{
                ...state,
                tasks: state.tasks.filter((_, i) => i !== action.payload),
                num: state.num - 1
            }

        case 'Reset tasks':
            return{
                task: '',
                tasks: [],
                num: 0

            }
        default:
            return state
        
    }

}

function TaskManager(){
    const focusinput = useRef(null)
    const [load, setLoad] = useState(true)
    const [tasked, dispatch] = useReducer(reducer, currentvalue)


    // const [task, setTask] = useState('')
    // const [tasks, setTasks] = useState([])
    // const [load, setLoad] = useState(true)
    // const num = useRef(0)
    
   

    const add = () => {
        if(tasked.task.trim() !== ''){
            dispatch({ type: 'Add task', payload: tasked.task})
            focusinput.current.focus()
            
            
        }
        else{
            alert("enter a task")
        }
        
    }
    const removal = (index) => {
        dispatch({type: 'Remove task', payload: index})
    }
//store task in local
    useEffect(() => {
        if(!load){
            localStorage.setItem('tasks', JSON.stringify(tasked.tasks))
        }
       
    }, [tasked.tasks, load])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('tasks'))
        if(saved){
            dispatch({type: "Add task", payload: saved})
        }
        setLoad(false)
    }, [])
    
    return(
        <div className="flex h-[50%] w-[500px] flex-col justify-center">
            <div className="flex align-middle justify-between w-[80%] border-[2px] border-slate-950">
                <input type="text" onChange={e => dispatch({ type: 'Set input', payload: e.target.value })} 
                value={tasked.task} placeholder="enter a task"
                className="w-[70%] border-0 outline-dotted bg-neutral-700 text-xl text-white" />
                <button onClick={add} className="w-[30%] border-0 outline-none bg-blue-950 text-xl text-white">Add</button>
            </div>

            <ul className="w-[80%]">
                
                {tasked.tasks.length > 0 ? ( 
                tasked.tasks.map((item, index) => <li onClick={() => removal(index)} className="bg-gray-800 text-white p-2 my-1 rounded" key={index}>
                    {item}
                </li>
                    )) : (<li className="bg-gray-800 text-white p-2 my-1 rounded" key={"no-index"}>no task avaliable</li>)} 
            </ul>
            <div>
                <div className="rounded p-2 w-[130px] h-[40px] bg-slate-800 text-white ">Total tasks: {tasked.num}</div>
                 <button onClick={() => dispatch({ type: 'Reset tasks' })} 
                    className="w-[130px] my-1 h-[40px] rounded outline-none bg-blue-950 text-xl text-white">Reset</button> 
            </div>


        </div>
    )
}

export default TaskManager

/*
flex h-[50%] w-[500px] flex-col justify-center
flex align-middle justify-between w-[80%] border-[2px] border-slate-950
className="w-[70%] border-0 outline-none bg-neutral-700 text-xl text-white"
className="bg-gray-800 text-white p-2 my-1 rounded"
className="flex h-[50%] w-[500px] flex-col justify-center"
className="flex align-middle justify-between w-[80%] border-[2px] border-slate-950"
create a use State for the input flied
create a usestae for the container in which the task will be inputed to


*/