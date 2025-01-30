import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Splash({ logo}){
    

    const navi = useNavigate()


    useEffect(() => {
        const timer = setTimeout(() => navi('/login'), 8000)


        return () => {
            clearTimeout(timer)
        }
    }, [navi])

    const puff = (e) => e.target.style.display = 'none'
    const img = (e) => e.target.style.top = '20%'

   
    
    return(
        <div className="overflow-hidden w-screen h-screen bg-redload load-div" >
            <div onAnimationEnd={(e) => puff(e)} className=" animate-slide overlay .z-0 bg-[#CF2A2A] w-[250%] h-[150px] "></div>
            <img className="animate-img z-10 top-2/3 loader w-32" src={logo} onAnimationEnd={(e) => img(e)}/>
            
        </div>
        
    )
}

//{loading, logo}