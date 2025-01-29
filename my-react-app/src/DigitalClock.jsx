import React, {useState, useEffect} from "react"

function DigitalClock() {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        let timer = setInterval(() => setTime(new Date()), 1)

        return () => {
            clearInterval(timer)
        }
    }, [])

    function settime(){
        let hours = zeros(time.getHours());
        let mins = zeros(time.getMinutes());
        let sec = zeros(time.getSeconds());
        let milli = zerosmilli(time.getMilliseconds());
        
        let amorpm = hours >= 12 ? "PM" : 'AM'

        return `${hours}:${mins}:${sec}:${milli} ${amorpm}`
    }
    function zeros(number){
        return (number < 10 ? '0' : '') + number

    }
    function zerosmilli(number) {
        if(number < 10){
            return '00' + number
        } 
        if (number < 100) {
            return '0' + number
        }
        else{
            return '' + number
        }

    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{settime() }</span>
            </div>
        </div>
    )
}
export default DigitalClock