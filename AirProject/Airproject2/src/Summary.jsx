import layer from "./assets/Layer_1.png"
import arrowleft from './assets/arrowleft.png'
import { useNavigate } from "react-router-dom"


export default function Summary(){

    const navi = useNavigate()

    function backhome() {
        navi('/home')
    }
    return(
        <div className="w-[100%] mb-14 overflow-x-hidden flex flex-col items-center">
            <div className="navbar  flex items-center justify-between">
                <img className="layer" src={layer}/>
                <div className="flex items-center">
                    <img src={arrowleft}/>
                    <p className="pl-3">Summary</p>
                </div>
            </div>

            <div className=" flex w-[90%] mt-12 mb-10 flex-col">
                <p className="tags underline underline-offset-[3px] mb-4 text-[18px]">Agent Details</p>
                <div className="mb-12  flex flex-col">
                    <label className="w-[100%] mb-4" htmlFor="msisdn">
                        <p className="tags">Airtel MSISDN</p>
                        <input id="msisdin"  className="inputs" type="tel" placeholder="+234" />
                    </label>
                    <label className="w-[100%] mb-4" htmlFor="name">
                        <p className="tags">Full Name</p>
                        <input  id="name" className="inputs" type="tel" placeholder="Enter in Last First & Middle name format" />
                    </label>
                    <label className="w-[100%] mb-4" htmlFor="nin">
                        <p className="tags">NIN</p>
                        <input  id="nin"  className="inputs" type="tel" placeholder="Enter NIN" />
                    </label>
                    <label className="w-[100%]" htmlFor="bvn">
                        <p className="tags">BVN</p>
                        <input  id="bvn"  className="inputs" type="tel" placeholder="Enter BVN" />
                    </label>

                </div>

                <p className="tags text-[18px] underline-offset-[3px] underline mb-4">Outlet Details</p>
                <div className="gridContainer">
                    <label htmlFor="blockNo">
                        <p className="tags ">House/Block Number</p>
                        <input className="input2"  type="text" placeholder="Enter Input" />
                    </label>
                    <label htmlFor="Street-name">
                        <p className="tags">Street Name</p>
                        <input className="input2"  type="text" placeholder="Enter Input" />
                    </label>
                    <label htmlFor="lga">
                        <p className="tags">LGA</p>
                        <input className="input2" type="text" placeholder="Enter Input" />
                    </label>
                    <label htmlFor="state">
                        <p className="tags">State</p>
                        <input className="input2"  type="text" placeholder="Enter Input" />                    
                    </label>
                </div>

                <div className="flex mt-8 flex-col">
                    <label htmlFor="type" className="mb-4">
                        <p className="tags">Outlet Type</p>
                        <select className="select" name="" id="" placeholder="--Select--">
                            <option value="">--Select--</option>
                            <option value="Kiosk">Kiosk</option>
                            <option value="Mini Shop">Mini Shop</option>
                            <option value="Red Shop">Red Shop</option>
                            <option value="DSO">DSO</option>
                            <option value="ESO">ESO</option>
                        </select>
                    </label>

                    <label htmlFor="site-id" className="mb-4">
                        <p className="tags ">Site ID</p>
                        <select className="select" name="" id="" placeholder="--Select--">
                            <option value="">--Select--</option>
                            <option value="Kiosk">Kiosk</option>
                            <option value="Mini Shop">Mini Shop</option>
                            <option value="Red Shop">Red Shop</option>
                            <option value="DSO">DSO</option>
                            <option value="ESO">ESO</option>
                        </select>
                    </label>

                    <label htmlFor="deal-code" className="mb-4">
                        <p className="tags">Partner Deal Code</p>
                        <select className="select" name="" id="" placeholder="--Select--">
                            <option value="">--Select--</option>
                            <option value="Kiosk">Kiosk</option>
                            <option value="Mini Shop">Mini Shop</option>
                            <option value="Red Shop">Red Shop</option>
                            <option value="DSO">DSO</option>
                            <option value="ESO">ESO</option>
                        </select>
                    </label>
                </div>
            </div>

            <div className="px-16 flex w-[100%] mt-24 justify-between">
                <button onClick={backhome} className="btns bg-white text-redload">Cancel</button>

                <button className="btns bg-redload text-white">Submit</button>
            </div>
            
        </div>
    )
}