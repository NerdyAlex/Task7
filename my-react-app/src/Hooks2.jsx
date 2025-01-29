import React, { useState, useEffect } from "react"
// import React, {useEffect } from "react"


function Hooks2(){
    const [sec, setsec] = useState(0)
        
    useEffect(() => {
        let time = setTimeout(() => {
            setsec(s => s + 1)
        }, 1000)
        
        return () => {
            clearTimeout(time)
        }
    }, [sec])
    

    return(
        <div>
            <p>Second: {sec}s</p>
            
            
        </div>
    )

}
export default Hooks2