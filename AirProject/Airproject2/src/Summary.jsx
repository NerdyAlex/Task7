import layer from "./assets/Layer_1.png"
import arrowleft from './assets/arrowleft.png'
import { useNavigate } from "react-router-dom"

import { useData } from "./UseData.jsx"




export default function Summary(){

    const {data} = useData()

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
                        <input id="msisdin" placeholder={data.datafile1.value} readOnly className="inputs" type="tel"/>
                    </label>
                    <label className="w-[100%] mb-4" htmlFor="name">
                        <p className="tags">Full Name</p>
                        <input id="name" placeholder={data.datafile1.value2} disabled className="inputs" type="tel" />
                    </label>
                    <label className="w-[100%] mb-4" htmlFor="nin">
                        <p className="tags">NIN</p>
                        <input id="nin" placeholder={data.datafile1.value3} disabled className="inputs" type="tel"/>
                    </label>
                    <label className="w-[100%]" htmlFor="bvn">
                        <p className="tags">BVN</p>
                        <input id="bvn" placeholder={data.datafile1.value4} disabled  className="inputs" type="tel"  />
                    </label>

                </div>

                <p className="tags text-[18px] underline-offset-[3px] underline mb-4">Outlet Details</p>
                <div className="gridContainer">
                    <label htmlFor="blockNo">
                        <p className="tags ">House/Block Number</p>
                        <input className="input2" placeholder={data.datafile2.value} disabled type="text" />
                    </label>
                    <label htmlFor="Street-name">
                        <p className="tags">Street Name</p>
                        <input className="input2" placeholder={data.datafile2.value2} disabled type="text" />
                    </label>
                    <label htmlFor="lga">
                        <p className="tags">LGA</p>
                        <input className="input2" placeholder={data.datafile2.value3} disabled type="text" />
                    </label>
                    <label htmlFor="state">
                        <p className="tags">State</p>
                        <input className="input2" placeholder={data.datafile2.value4} disabled type="text" />                    
                    </label>
                </div>

                <div className="flex mt-8 flex-col">
                    <label htmlFor="type" className="mb-4">
                        <p  className="tags">Outlet Type</p>
                        <select disabled value={data.datafile2.value5} className="select" name="" id="" >
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
                        <select disabled value={data.datafile2.value6}  className="select" name="" id="">
                            <option value="">--Select--</option>
                            <option value="Kiosk">Kiosk</option>
                            <option value="Mini Shop">Mini Shop</option>
                            <option value="Red Shop">Red Shop</option>
                            <option value="DSO">DSO</option>
                            <option value="ESO">ESO</option>
                        </select>
                    </label>

                    <label htmlFor="deal-code" className="mb-4">
                        <p  className="tags">Partner Deal Code</p>
                        <select disabled value={data.datafile2.value7} className="select" name="" id="" >
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

                <button onClick={backhome} className="btns bg-redload text-white">Submit</button>
            </div>
            
        </div>
    )
}