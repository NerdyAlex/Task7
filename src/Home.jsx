// import { Link } from "react-router-dom"

import layer from "./assets/Layer_1.png"
import point from './assets/pointimg.png'
import point2 from './assets/pointimg2.png'
import point3 from './assets/pointimg3.png'
import greenup from './assets/greenup.png'
import reddown from './assets/reddown.png'
import location from './assets/locImg.png'
import arrowright from './assets/arrowright.png'
import arrowright2 from './assets/arrowright2.png'
import { useNavigate } from "react-router-dom"

export default function Home(){
    const navi = useNavigate()

    function create(){
        setTimeout(() => {
            navi('/outlet-creation')
        }, 3000 )
        
    }

    return(
        <div className="w-screen h-screen items-center  flex flex-col">
            <div className=" navbar flex items-center justify-between">
                <img src={layer} className="layer" />
                <div>

                    <p>Hi Lexy,</p>
                    <p>Good Afternoon</p>
                </div>

                <div className="z-10  flex justify-between w-[150px] ">
                    <svg className="cursor-pointer w-8 h-8 fill-[white] stroke-[white] stroke-[2px] text-[white]" viewBox="0 0 40 40">
                        <path d="M21.3575 5.57999C21.1824 5.39659 20.972 5.2506 20.7389 5.15085C20.5058 5.05111 20.2548 4.99968 20.0013 4.99968C19.7477 4.99968 19.4968 5.05111 19.2637 5.15085C19.0306 5.2506 18.8201 5.39659 18.645 5.57999L5.52003 19.33C5.26649 19.5955 5.09646 19.9295 5.03101 20.2907C4.96557 20.6519 5.0076 21.0244 5.15188 21.3619C5.29616 21.6995 5.53635 21.9873 5.84267 22.1896C6.14898 22.3919 6.50794 22.4998 6.87503 22.5H10V32.5C10 33.163 10.2634 33.7989 10.7323 34.2678C11.2011 34.7366 11.837 35 12.5 35H15C15.6631 35 16.299 34.7366 16.7678 34.2678C17.2366 33.7989 17.5 33.163 17.5 32.5V30C17.5 29.337 17.7634 28.7011 18.2323 28.2322C18.7011 27.7634 19.337 27.5 20 27.5C20.6631 27.5 21.299 27.7634 21.7678 28.2322C22.2366 28.7011 22.5 29.337 22.5 30V32.5C22.5 33.163 22.7634 33.7989 23.2323 34.2678C23.7011 34.7366 24.337 35 25 35H27.5C28.1631 35 28.799 34.7366 29.2678 34.2678C29.7366 33.7989 30 33.163 30 32.5V22.5H33.125C33.4923 22.5003 33.8516 22.3927 34.1583 22.1906C34.465 21.9885 34.7056 21.7007 34.8502 21.3631C34.9948 21.0255 35.037 20.6528 34.9717 20.2913C34.9063 19.9299 34.7362 19.5956 34.4825 19.33L21.3575 5.57999Z"
                        />
                    </svg>
                    <svg className="hover w-8 h-8 fill-[transparent]  stroke-[white] stroke-[1.38px] text-[white]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z" />
                        <path d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z" />
                    </svg>

                </div>
            </div>
            
            
            <div onClick={() => { create() }} className=" flex justify-center w-screen">
                <div className="w-[80%] hover:cursor-pointer justify-between px-6 py-[0.64rem] rounded-md mt-16 bg-redload flex items-center ">
                    <div className="flex items-center">
                        <img src={location} />
                        <p className="text-white ml-3">Outlets Creation</p>
                    </div>
                    <img src={arrowright2} />
                </div>
            </div>
            
            <div className="container ">
                
                <div className="outletcard cardEffect">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center justify-start "><img className="w-18 h-18" src={point} /><p className="font-nunito text-[59px] ml-4 text-gray font-light">70</p></div>
                        <div className="flex items-center mt-1 px-[0.3rem] py-[0.2rem] font justify-between border-green-600 border-[1px] rounded-md"><img src={greenup} /><p className="w-[30px] text-[95%] pl-1">3%</p></div>
                    </div>
                    <div className="mt-7 flex items-center justify-between"><p className="text-[90%]">Approved outlets in the last month</p> <img src={arrowright}/></div>
                </div>
                <div className="outletcard cardEffect">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center justify-start "><img className="w-18 h-18" src={point2} /><p className="font-nunito text-[50px] ml-4 text-gray font-light">24</p></div>
                        <div className="flex items-center mt-1 px-[0.3rem] py-[0.2rem] font justify-between border-red-600 border-[1px] rounded-md"><img src={reddown} /><p className="w-[30px] text-[95%] pl-1">10%</p></div>
                    </div>
                    <div className="mt-7 flex items-center justify-between"><p className="text-[90%]">Declined outlets in the last month</p> <img src={arrowright} /></div>
                </div>

                <div className="outletcard cardEffect">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center justify-start "><img className="w-18 h-18" src={point3} /><p className="font-nunito text-[59px] ml-4 text-gray font-light">70</p></div>
                    </div>
                    <div className="mt-7 flex items-center justify-between"><p className="text-[90%]">Pending outlets</p> <img src={arrowright} /></div>
                </div>

                {/* <div className="outletcard">box2</div>
                <div className="outletcard">box3</div> */}
            </div>
        </div>
    )
}