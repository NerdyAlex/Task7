import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import {Link} from 'react-router-dom';
// import React, { useState } from "react";



function Sidebar(){
    // const [click, setClick] = useState(false)

 const Icons = ({ icon, text}) => (
    <div className="sidebar-icon group" >
        {icon}


        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
 );

 
    
    return(

        <div className="fixed top-0 left-0 h-screen w-16 m-0 
        flex flex-col bg-prime
        text-white shadow-lg">
            
            <Link to="/">
                <Icons icon={<FaFire size="28" />} text='Home' />
            </Link>
            
            <Link to='/create'>
                <Icons icon={<BsPlus size="32" />} text='Create' />
            </Link>
            
            <Link to='/streak'>
                <Icons icon={<BsFillLightningFill size="20" />} text='Streak' />
            </Link>
            
            <Link to="/fun">
                <Icons icon={<FaPoo size="20" />} text='Fun' />
            </Link>
            
        </div>

    )

    
}
export default Sidebar