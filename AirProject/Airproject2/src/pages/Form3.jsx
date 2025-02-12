import cam from '/src/assets/cam.png'


export default function Form3(){

    return(
        

        <div>
            <div className="px-4 py-2 mb-2">
                <p className="font-inter font-[600] text-xl text-gray">Outlet Checklist</p>
                <p className="mt-2 font-nunito font-[200] italic text-sm text-gray">Please select appropraitely</p>
            </div>

            <div className="px-7  flex flex-col">
                <div className='mt-5'>
                    <p className='mb-2 font-inter font-[700] underline-offset-[4px] text-gray text-[16px] underline'>Certification</p>
                    <div className='flex items-center justify-between'>
                        <p className='tagxs'>Agent’s SSCE Certificate</p>
                        <img src={cam}/>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='tagxs'>Partner’s NCC Certificate</p>
                        <img src={cam} />
                    </div>
                </div>

                <div className='mt-6'>
                    <p className='mb-2 font-inter font-[700] underline-offset-[4px] text-gray text-[16px] underline'>Exterior Structure</p>
                    <label className='flex items-center justify-between'>
                        <p className='tagxs'>Outlet is brick & mortar/kiosk affixed to the ground</p>
                        <input type="checkbox" className='checks'/>
                    </label>
                    <label className='flex items-center justify-between'>
                        <p className='tagxs'>SIM registration external signage</p>
                        <input type="checkbox" className='checks' />
                    </label>
                    <label className='flex items-center justify-between'>
                        <p className='tagxs'>Outlet is well lit</p>
                        <input type="checkbox" className='checks  '  />
                    </label>
                </div>

                <div className='mt-6'>
                    <p className='mb-2 font-inter font-[700] underline-offset-[4px] text-gray text-[16px] underline'>Interior Structure</p>
                    <label className='flex items-center justify-between'>
                        <p className='tagxs'>There is available white background </p>
                        <input type="checkbox" className='checks' />
                    </label>
                    <label className='flex items-center justify-between'>
                        <p className='tagxs'>Visible Airtel logo </p>
                        <input type="checkbox" className='checks' />
                    </label>
                    <label className='flex items-center justify-between'>
                        <p className='tagxs'>There is enough light illumination</p>
                        <input type="checkbox" className='checks  ' />
                    </label>
                </div>

                <div className='mt-12 flex items-center justify-between'>
                    <p className='tagxs'>Upload Agent Photo</p>
                    <img src={cam} />
                </div>

                
            </div>
           
        </div>
    )
}