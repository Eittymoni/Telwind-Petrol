
import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { FaFacebookF, FaTwitter,FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


const Header = () => {
  return (
    <div>
      <header className='py-2 bg-[#282828]'>
    <div className="max-w-container mx-auto">
        <div className=" flex items-center flex-wrap">
            <div className="w-full  lg:w-1/4">
            <div className= "text-white flex  gap-x-2 items-center justify-center lg:justify-start text-xs font-pops">
              <IoMailUnreadOutline/>
              <p>mail@yourcompany.com</p>
            </div>
            </div>
            <div className=" w-full lg:w-1/4 py-2 lg:py-0">
            <div className="text-white flex  gap-x-2 items-center justify-center lg:justify-start text-xs font-pops">
              <MdAddIcCall/>
              <p>+896 120 5889 (Toll free)</p>
            </div>
            </div>
            <div className=" w-full lg:w-1/2">
            <div className=" text-white flex  gap-x-3 lg:justify-end justify-center text-xs ">
              <FaFacebookF/>
              <FaTwitter/>
              <FaLinkedinIn/>
              <FaInstagram/>

            </div>
            
            </div>

        </div>
    </div>

      </header>
    </div>
  )
}

export default Header
