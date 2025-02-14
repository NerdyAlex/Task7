import { useState } from "react"
import { useData } from "../UseData.jsx"


export default function Form2(){

    const {data, updateData} = useData()

    const [value, setValu1] = useState(data.datafile2.value)
    const [value2, setValu2] = useState(data.datafile2.value2)
    const [value3, setValu3] = useState(data.datafile2.value3)
    const [value4, setValu4] = useState(data.datafile2.value4)
    const [value5, setValu5] = useState(data.datafile2.value5)
    const [value6, setValu6] = useState(data.datafile2.value6)
    const [value7, setValu7] = useState(data.datafile2.value7)



    const highlight = (e) => {
        if (e.target.value != '') {
            e.target.style.borderColor = '#ED1D24'
        }
        else {
            e.target.style.borderColor = '#63636354'
        }


    }

    const highlightChange = (e, setter) => {
        highlight(e)
        setter(e.target.value)
        updateData('datafile2', {
            ...data.datafile2, 
            value: value,
            value2: value2,
            value3: value3,
            value4: value4,
            value5: value5,
            value6: value6,
            value7: value7,
        
            
        })

    }

    
    return(
        <div>
            <div className="px-4 py-2 mb-4">
                <p className="font-inter font-[600] text-xl text-gray">Outlet Details</p>
                <p className="mt-2 font-nunito font-[200] italic text-sm text-gray">Please fill the details accordingly</p>
            </div>

            <div className="px-7  flex flex-col">
                <div >
                    <p className="text-zinc-600 text-[16px] mb-3 font-[700] ">Outlet Address</p>
                    <div className="gridContainer">
                        <label htmlFor="blockNo">
                            <p className="tags ">House/Block Number</p>
                            <input className="input2" value={value} onChange={e => highlightChange(e, setValu1)} type="text" placeholder="Enter Input" />
                        </label>
                        <label htmlFor="Street-name">
                            <p className="tags">Street Name</p>
                            <input className="input2" value={value2} onChange={e => highlightChange(e, setValu2)} type="text" placeholder="Enter Input" />
                        </label>
                        <label htmlFor="lga">
                            <p className="tags">LGA</p>
                            <input className="input2" value={value3} onChange={e => highlightChange(e, setValu3)} type="text" placeholder="Enter Input" />
                        </label>
                        <label htmlFor="state">
                            <p className="tags">State</p>
                            <input className="input2" value={value4} onChange={e => highlightChange(e, setValu4)} type="text" placeholder="Enter Input" />
                        </label>
                    </div>
                    <p className="my-4 font-inter font-[550] text-[15px] text-[#4847E0] pr-5 h-[40px]">Fetch my location coordinates</p>                
                </div>
            </div>

            <div className="px-7 flex flex-col">
                <label htmlFor="type" className="mb-4">
                    <p className="tags text-[16px]">Outlet type</p>
                    <select value={value5} onChange={e => highlightChange(e, setValu5)} className="select" name="" id="" >
                        <option value="">--Select--</option>
                        <option value="Kiosk">Kiosk</option>
                        <option value="Mini Shop">Mini Shop</option>
                        <option value="Red Shop">Red Shop</option>
                        <option value="DSO">DSO</option>
                        <option value="ESO">ESO</option>
                    </select>
                </label>

                <label htmlFor="site-id" className="mb-4">
                    <p className="tags text-[16px]">Site ID</p>
                    <select value={value6} onChange={e => highlightChange(e, setValu6)} className="select" name="" id="" placeholder="--Select--">
                        <option value="">--Select--</option>
                        <option value="Kiosk">Kiosk</option>
                        <option value="Mini Shop">Mini Shop</option>
                        <option value="Red Shop">Red Shop</option>
                        <option value="DSO">DSO</option>
                        <option value="ESO">ESO</option>
                    </select>
                </label>
                
                <label htmlFor="deal-code" className="mb-4">
                    <p  className="tags text-[16px]">Partner Deal Code</p>
                    <select value={value7} onChange={e => highlightChange(e, setValu7)} className="select" name="" id="" placeholder="--Select--">
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
            

    )
}