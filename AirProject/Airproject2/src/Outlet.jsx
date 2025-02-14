import layer from "./assets/Layer_1.png"
import arrowleft from './assets/arrowleft.png'
import Form1 from './pages/Form1.jsx'
import Form3 from './pages/Form3.jsx'
import Form2 from './pages/Form2.jsx'


import { useState } from "react"

import { useNavigate } from "react-router-dom"







export default function Outlet(){

    

    const [step, setStep] = useState(0) 
    
    const navi = useNavigate()

    function backhome() {
        navi('/home')
    }
    function summary() {
        navi('/summary')
    }
    const pages = [
        <Form1 />,
        <Form2  />,
        <Form3  />,
    ]

   
   const [index, setIndex] = useState(0 )

   const next = () => {
        if(index == pages.length - 1){
            summary()

            
         
        }
        else{
            
            setIndex(i => i + 1)
            setStep(s => s + 1)
           
            
            
         
        }
       
       
    }

    const progress = (step / 3 ) * 100

    const back = () => {
        if(index == 0){
            backhome() 
            
        }
        else{
            setIndex(i => (i - 1))
            setStep(s => s -1)
           
        }
        
       
        

    }

    return(
        <div className="w-[100%] overflow-x-hidden flex flex-col items-center">

            
            <div className="navbar  flex items-center justify-between">
                <img className="layer" src={layer}/>

                <div className="flex items-center">
                    <img src={arrowleft}/>
                    <p className="pl-3">Outlet Creation</p>
                </div>
            </div>

            <div className="w-[100%] flex flex-col mt-14 mb-14  items-center justify-center">
                <div className=" relative rounded-full h-1.5 w-[75%] bg-slate-300">
                    <div style={{
                        left: `${progress}%`
                    }} id='slider' className="lefty absolute bg-redload h-1.5 rounded-full w-1/3"></div>
                </div>
                
            </div>
           
            <div className=" flex w-[90%] mb-10 flex-col">
                
                {pages[index]}

                
                
                <div className="px-7 flex w-[100%] mt-24 justify-between">
                    <button  onClick={back} className="btns bg-white text-redload">Back</button>
                    
                    <button onClick={next} className="btns bg-redload text-white">Next</button>
                </div>
            </div>
           


        </div>
    )
}
