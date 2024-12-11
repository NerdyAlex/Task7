import React, {useState} from "react"

function Hooks(){

    const [name, setName] = useState('Guest');
    const [num, setNum] = useState(0)
    const [comm, setComm] = useState('')
    const [sel, setSel] = useState('')
    const [city, setCity] = useState('')

    function chang(event){
        setName(event.target.value)
    }
    function number(event) {
        setNum(event.target.value)
    }
    function comment(event) {
        setComm(event.target.value)
    }
    function talent(event) {
        setSel(event.target.value)
    }
    function living(event) {
        setCity(event.target.value)
    }

    return(
        <div>
            <input type="text" value={name} onChange={chang}/>
            <p>Name: {name}</p>

            <input type="number" value={num} onChange={number} />
            <p>Number: {num} years old</p>

            <textarea value={comm} placeholder="tell us abort yourself" onChange={comment}></textarea>
            <p>Comment: {comm}</p>

            <select value={sel} onChange={talent}>
                <option value="">Select an option</option>
                <option value="Singing">Singing</option>
                <option value="Dancing">Dancing</option>
                <option value="Learning new stuff">Learning new stuff</option>
            </select>
            <p>Talents: {sel}</p>

            <label>
                <input type="radio" value={'Nigeria'} 
                    checked={city === 'Nigeria'}
                    onChange={living}/>
                Nigeria
            </label>
            <br />
            <label >
                <input type="radio" value={'Ghana'}
                    checked={city === 'Ghana'} 
                    onChange={living}/>
                Ghana
            </label>
            <br />
            <label>
                <input type="radio" value={'Poland'}
                    checked={city === 'Poland'} 
                    onChange={living}/>
                Poland
            </label>
        <p>City: {city}</p>

        </div>
    )

}
export default Hooks