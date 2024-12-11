
import React, {useState} from "react";

function Update(){

    const [cars, setCars] = useState([])
    const [year, setYear] = useState(new Date().getFullYear())
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')

    function addcar(){
        const newcar = {y: year,
                        ma: make,
                        mo: model}
        setCars(c => ([...c, newcar]))
        setYear(new Date().getFullYear())
        setMake('')
        setModel('')
    }
    function changeyear(e){
        setYear(e.target.value)
    }
    function changemake(e) {
        setMake(e.target.value)

    }
    function changemodel(e) {
        setModel(e.target.value)

    }
   
    function removecar(index){
        setCars(cars.filter((_,i) => i !==index))
    }

    return(
        <div>
            <h2>list of cars</h2>
            <ol>
                {
                    cars.map((car, index) => <li key={index} onClick={() => removecar(index)}>{car.y} {car.mo} {car.ma}</li>)
                }
            </ol>

            <div className="inputs">
                <input id="" type="number" value={year}  onChange={changeyear}/>
                <input id="" type="text" value={make} onChange={changemake} />
                <input id="" type="text" value={model} onChange={changemodel} />
            </div>
            <button onClick={addcar}>Add</button>
        </div>
    )
}

export default Update