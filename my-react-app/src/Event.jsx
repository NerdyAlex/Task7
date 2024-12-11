


function Button(){
    
    // const shoot = (event) => { event.target.textContent = "I'm Dead 💀💀"}
    let i = 0
    const shoot = () => {
        
        
        if(i < 3){
            i++
            console.log(i + " I'm Dead 💀💀")
        }
        else{
            i++
            console.log(i + " Stop Shooting💀💀")
        }
    }


    return(<>
        <button onClick={shoot}>Shot Me 😁😁</button>
    </>)
}
export default Button