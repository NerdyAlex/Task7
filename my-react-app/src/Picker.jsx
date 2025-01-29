import React, {useState} from 'react'

function Picker(){
    const [color, setColor] = useState('#000000')

    function bgc(e){
        setColor(e.target.value)
    }

    return(
        <div>
            <div className="box" style={{backgroundColor: color}}>
                <p>selected color: {color}</p>
            </div>
            <label >Pick a color: </label>
            <input type="color" value={color} onChange={bgc}/>
        </div>
    )
}

export default Picker