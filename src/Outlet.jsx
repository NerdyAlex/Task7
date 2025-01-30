import layer from "./assets/Layer_1.png"
import arrowleft from './assets/arrowleft.png'


export default function Outlet(){
    return(
        <div className="w-screen h-screen overflow-x-hidden flex flex-col items-center">
            <div className="navbar flex items-center justify-between">
                <img className="layer" src={layer}/>

                <div className="flex items-center">
                    <img src={arrowleft}/>
                    <p className="pl-3">Outlet Creation</p>
                </div>
            </div>

            <div className="mt-14 relative rounded-full h-2 w-[75%] bg-slate-300">
                <div className="absolute bg-redload h-2 rounded-full w-1/4"></div>
            </div>
        </div>
    )
}