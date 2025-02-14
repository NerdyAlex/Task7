import { useState, useContext } from "react"
import { useData } from "../UseData.jsx"




export default function Form1(){

    const {data, updateData} = useData()

    const [value, setValue] = useState(data.datafile1.value)
    const [value2, setValue2] = useState(data.datafile1.value2)
    const [value3, setValue3] = useState(data.datafile1.value3)
    const [value4, setValue4] = useState(data.datafile1.value4)

    

   


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
        updateData("datafile1", {
            ...data.datafile1, // Keep existing properties
            value: value,
            value2: value2,
            value3: value3,
            value4: value4, // Update only username
        });

    }


    return (
        <div>
            <div className="px-4 py-2 mb-4">
                <p className="font-inter font-[600] text-xl text-gray">Agent Details</p>
                <p className="mt-2 font-nunito font-[200] italic text-sm text-gray">Please fill the details accordingly</p>
            </div>

            <div className="px-7 mb-8  flex flex-col">
                <label className="w-[100%] mb-4" htmlFor="msisdn">
                    <p className="tags">Airtel MSISDN</p>
                    <input value={value} id="msisdin" onChange={(e) => highlightChange(e, setValue)} className="inputs" type="tel" placeholder="+234" />
                </label>
                <label className="w-[100%] mb-4" htmlFor="name">
                    <p className="tags">Full Name</p>
                    <input value={value2} id="name" onChange={(e) => highlightChange(e, setValue2)} className="inputs" type="tel" placeholder="Enter in Last First & Middle name format" />
                </label>
                <label className="w-[100%] mb-4" htmlFor="nin">
                    <p className="tags">NIN</p>
                    <input value={value3} id="nin" onChange={(e) => highlightChange(e, setValue3)} className="inputs" type="tel" placeholder="Enter NIN" />
                </label>
                <label className="w-[100%]" htmlFor="bvn">
                    <p className="tags">BVN</p>
                    <input value={value4} id="bvn" onChange={(e) => highlightChange(e, setValue4)} className="inputs" type="tel" placeholder="Enter BVN" />
                </label>

            </div>


        </div>
    )

}