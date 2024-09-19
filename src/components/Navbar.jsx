import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";

import { ImCross } from "react-icons/im";

const Navbar = () => {
    let [show, setShow]= useState(false);
  return (
    <nav className=' bg-[#F40404] py-4'>
        <div className=" max-w-container mx-auto">
            <div className=" flex items-center">
                <div className="w-1/4">
                <img src={Logo} alt="" />
                </div>
                <div className="w-3/4">
                <ul className={`lg:flex lg:justify-end text-center lg:static absolute  z-[2] top-0 left-0 ease-in-out duration-300  ${show == true ? " right-0  top-[128px] md:top-[150px] w-[30%]" : "left-[-100%] w-full"}`}>
                    <li className='font-pops font-semibold lg:text-[16px] text-[12px] text-white  hover:text-[#282828] duration-300 ease-in-out lg:p-4 p-1 ]'> Home</li>
                    <li className='font-pops font-semibold lg:text-[16px] text-[12px] text-white hover:text-[#282828] duration-300 ease-in-out lg:p-4 p-1'> About</li>
                    <li className='font-pops font-semibold lg:text-[16px] text-[12px] text-white hover:text-[#282828] duration-300 ease-in-out lg:p-4 p-1'> Services</li>
                    <li className='font-pops font-semibold lg:text-[16px] text-[12px] text-white hover:text-[#282828] duration-300 ease-in-out lg:p-4 p-1'> Gallery</li>
                    <li className='font-pops font-semibold lg:text-[16px] text-[12px] text-white hover:text-[#282828] duration-300 ease-in-out lg:p-4 p-1'> Blog</li>
                    <li className='font-pops font-semibold lg:text-[16px] text-[12px] text-white lg:p-4 p-2 border-2 border-[#ffff] rounded-full  hover:text-[#282828] duration-300 ease-in-out hover:border-[#282828]'> Contact</li>
                </ul>
                </div>
                <div onClick={() => setShow(!show)}
                 className=" lg:hidden cursor-pointer ">
                    {show == true ? <ImCross/>: <FaBars/>}
                    
                </div>
                {/* <div className={!show ? "fixed left-0 top-0 w-[80%] ease-in-out duration-300 lg:hidden ": "fixed left-[-100%]"}>
                    <ul className='pt-28  mt-6 text-center'>
                    <li className='font-pops font-semibold text-[12px] text-[#282828] p-4 hover:uppercase duration-300 ease-in-out'> Home</li>
                        <li className=' font-pops font-semibold text-[12px] text-[#282828] p-4 hover:uppercase duration-300 ease-in-out'>About</li>
                        <li className='font-pops font-semibold text-[12px] text-[#282828] p-4 hover:uppercase duration-300 ease-in-out'>Services</li>
                        <li className='font-pops font-semibold text-[12px] text-[#282828] p-4 hover:uppercase duration-300 ease-in-out'>Gallery</li>
                        <li className='font-pops font-semibold text-[12px] text-[#282828] p-4 hover:uppercase duration-300 ease-in-out'>Blog</li>
                        <li className='font-pops font-semibold text-[12px] text-[#282828] p-4   hover:uppercase duration-300 ease-in-out' >Contact</li>
                    </ul>
                   
                </div> */}

            </div>
        </div>
    </nav>
  )
}

export default Navbar
