import layer from "./assets/Layer_1.png"
import arrowleft from './assets/arrowleft.png'

export default function Outlet(){
    return(
        <div className="w-screen h-screen items-center  flex flex-col">
            <div className="navbar flex items-center">
                <img src={layer} className="layer" />
                <div className="flex items-center justify-between">
                    <img src={arrowleft} />
                    <p className="pl-2">Outlet Creation</p>
                </div>
            </div>

            <div className="mt-16 slider bg-slate-300 rounded-full h-[5px] w-[80%]">
                <div className="top-0 left-0 bg-redload rounded-full w-1/4 h-[5px]"></div>
            </div>

            
        </div>

    )
}