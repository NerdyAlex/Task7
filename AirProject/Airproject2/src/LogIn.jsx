// import { Link } from "react-router-dom"
import {useState} from 'react'
import { useNavigate } from "react-router-dom"

import eye1 from './assets/eye1.png'
import eye2 from './assets/eye3.png'

export default function Login({logo}){

    const [see, setSee] = useState(false)
    const [user, setUser] = useState('')
    const [code, setCode] = useState('')
    const navi = useNavigate()
    


    const highlight = (e) => {
        if(e.target.value != ''){
            e.target.style.borderColor = '#ED1D24'
        }
        else{
            e.target.style.borderColor = '#63636354'
        }
    }

    const hide = () => {
<<<<<<< HEAD
=======
        
>>>>>>> ac46409fc0247d51eb0b0d9dce4ce5cfb88774e0
        setSee(!see)
    }

    const btn = (e) => {
        e.target.style.backgroundColor = '#ED1D24';
        setTimeout(() => navi('/home'), 2500)
        
    }

    
   


    return(
        <div className="flex w-[400px] h-screen  items-center flex-col px-6 py-5">
            <img className="mt-3  w-32" src={logo} />

            
            <div className="mt-10 w-[100%]">
                <div className='flex flex-col items-center'>
                    <p className="pb-2 font-nunito border-b-2 px-5 border-[#CF2A2A] text-textgray text-[15px] font-[700]">LOG IN</p>
                    <hr className="text-[#d7dce2] h-[6px] w-[80%]"/>

                    <div className="mt-8 w-[95%] flex flex-col">

                        <label  className="w-[100%] font-[550] text-gray font-inter text-[14px]" htmlFor="auuid">AUUID
                            <input id="highlight" value={user} onChange={(e) => {setUser(e.target.value),  highlight(e)}}
                        placeholder="Enter Text" className="inputfield  text-[13px]" type="text" />
                        </label>
                       
                        <label className="mt-4 font-[550]  w-[100%] text-gray font-inter text-[14px]" htmlFor="passcode">Password
                            <div className="flex relative">
                                <input id="highlight" value={code} onChange={(e) => {setCode(e.target.value),  highlight(e)}}
                                 placeholder="Enter Password" className="inputfield text-[13px]" type={see ? 'text' : "password"} name="passcode" />
<<<<<<< HEAD
                                <img onClick={hide} src={see ? eye1 : eye2} id='eye' className="cursor-pointer w-5 h-5 absolute mt-[0.9rem] left-[295px]" />
=======
                                <img onClick={hide}  src={see ? eye1 : eye2} id='eye' className="opacity-1 w-[22px] h-[22px] text-black absolute mt-[0.9rem] left-[295px]" />
>>>>>>> ac46409fc0247d51eb0b0d9dce4ce5cfb88774e0
                            </div>
                        </label>


                        <div className="flex items-center text-[14px] justify-between mt-2">
                            <label htmlFor="remember me " className="flex  items-center">
                                <input  className="mr-1 rounded checked:accent-redload border-[1px] h-[20px] w-[20px]" type="checkbox" name="remember me"/> Remember me
                            </label>
                            <a href="#" className="text-redload   hover:text-[red]">Forget Password?</a>
                        </div>
                        
                    
                            
                            <button onClick={(e) => btn(e)} className="mt-28 w-[100%] font-[400] flex items-center justify-center
                            tracking-wide h-[57px] rounded-md font-plex text-[#ffff] bg-[#919090]">
                            Login
                            </button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
