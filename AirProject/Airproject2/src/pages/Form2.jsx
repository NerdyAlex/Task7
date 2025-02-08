export default function Form2(){
    const highlight = (e) => {
        if (e.target.value != '') {
            e.target.style.borderColor = '#ED1D24'
        }
        else {
            e.target.style.borderColor = '#63636354'
        }
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
                            <input className="input2" onChange={e => { highlight(e) }} type="text" placeholder="Enter Input" />
                        </label>
                        <label htmlFor="Street-name">
                            <p className="tags">Street Name</p>
                            <input className="input2" onChange={e => { highlight(e) }} type="text" placeholder="Enter Input" />
                        </label>
                        <label htmlFor="lga">
                            <p className="tags">LGA</p>
                            <input className="input2" onChange={e => { highlight(e) }} type="text" placeholder="Enter Input" />
                        </label>
                        <label htmlFor="state">
                            <p className="tags">State</p>
                            <input className="input2" onChange={e => { highlight(e) }} type="text" placeholder="Enter Input" />
                        </label>
                    </div>
                    <p className="my-4 font-inter font-[550] text-[15px] text-[#4847E0] pr-5 h-[40px]">Fetch my location coordinates</p>                
                </div>
            </div>

            <div className="px-7 flex flex-col">
                <label htmlFor="type" className="mb-4">
                    <p className="tags text-[16px]">Outlet type</p>
                    <select onChange={e => { highlight(e) }} className="select" name="" id="" placeholder="--Select--">
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
                    <select onChange={e => { highlight(e) }} className="select" name="" id="" placeholder="--Select--">
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
                    <select onChange={e => { highlight(e) }} className="select" name="" id="" placeholder="--Select--">
                        <option value="">--Select--</option>
                        <option value="Kiosk">Kiosk</option>
                        <option value="Mini Shop">Mini Shop</option>
                        <option value="Red Shop">Red Shop</option>
                        <option value="DSO">DSO</option>
                        <option value="ESO">ESO</option>
                    </select>
                </label>

                

                {/* <label htmlFor="site-id">
                    <p>Site ID</p>
                    <select name="" id="" placeholder="--Select--">
                        <option value="">--Select--</option>
                        <option value="Kiosk">Kiosk</option>
                        <option value="Mini Shop">Mini Shop</option>
                        <option value="Red Shop">Red Shop</option>
                        <option value="DSO">DSO</option>
                        <option value="ESO">ESO</option>
                    </select>
                </label>

                <label htmlFor="deal-code">
                    <p>Partner Deal Code</p>
                    <select name="" id="" placeholder="EKY_">
                        <option value="">EKY_</option>
                        <option value="Kiosk">Kiosk</option>
                        <option value="Mini Shop">Mini Shop</option>
                        <option value="Red Shop">Red Shop</option>
                        <option value="DSO">DSO</option>
                        <option value="ESO">ESO</option>
                    </select>
                </label> */}

            </div>

            
        </div>
            

    )
}