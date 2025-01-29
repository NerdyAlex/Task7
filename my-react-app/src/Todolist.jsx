
import React, { useState } from "react"


function Todolist(){
    const [tasks, setTasks] = useState([])
    const [newtask, setNewTask] = useState('')

    function changeinfooninput(e){
        setNewTask(e.target.value)
    }
    function add(){
        if(newtask.trim() !== ''){
            setTasks(t => [...t, newtask])
            setNewTask('')
        }
    }
    function deltask(index){
        setTasks(tasks.filter((_, i) => i !== index))
    }
    function moveup(index){
        if(index > 0){
            const toupdate = [...tasks];

            [toupdate[index], toupdate[index - 1]] =
            [toupdate[index - 1], toupdate[index]]
            setTasks(toupdate)
        }


    }
    function movedown(index) {
        if (index < tasks.length - 1) {
            const toupdate = [...tasks];

            [toupdate[index], toupdate[index + 1]] =
            [toupdate[index + 1], toupdate[index]] 
            
            setTasks(toupdate)
        }

    }




    return(
    <div className="app">
        <h1>To-Do List</h1>

        <div id="input" >
            <input type="text"
                   placeholder="enter a task..." 
                   value={newtask}
                    onChange={(e) => changeinfooninput(e)} />
            <button onClick={add}>Add</button>
        </div>

        <ol>
            {
                tasks.map((task, index) => <li className='lists' key={index}>
                    {task}
                    
                        <button onClick={() => deltask(index)}>X</button>
                        <button onClick={() => moveup(index)}>👆</button>
                        <button onClick={() => movedown(index)}>👇</button>
                    
                    </li>)
            }
        </ol>


    </div>
    );

}
export default Todolist