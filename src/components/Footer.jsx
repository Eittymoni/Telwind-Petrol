import React from 'react'
import logoW from "../assets/logoW.png"
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaTwitter,FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import cert1Img from "../assets/Cert1.png"
import cert2Img from "../assets/Cert2.png"


const Footer = () => {
  return (
    <section >
    <div className="p-[50px] bg-[#1F1F1F] border-b-2 border-[gray] ">
        <div className=" max-w-container ms-auto">
            <div className=" lg:flex">
            <div className="lg:w-1/4 w-full">
                <img src={logoW} alt="" />
                <div className= "text-white flex  gap-x-2 items-center justify-center lg:justify-start lg:text-[14px]  text-[12px]font-pops pt-3">
              <IoMailUnreadOutline/>
             <p>mail@yourcompany.com</p>
                         </div>
            <div className="text-white flex  gap-x-2 items-center justify-center lg:justify-start lg:text-[14px] text-[12px]font-pops pt-1">
              <MdAddIcCall/>
              <p>+896 120 5889 (Toll free)</p>
            </div> 
            <div className="text-white flex  gap-x-2 items-center justify-center lg:justify-start lg:text-[14px]  text-[12px] font-pops pt-1">
              <FaMapLocationDot/>
              <p>101 Baker Street, New York, USA, 12345</p>
            </div> 
            <div className=" flex  gap-x-3  justify-center  lg:justify-start pt-2 ">
              <FaFacebookF className='text-[red] text-[30px'/>
              <FaTwitter className='text-[red] text-[30px'/>
              <FaLinkedinIn className='text-[red] text-[30px'/>
              <FaInstagram className='text-[red] text-[30px'/>

            </div>

            </div>

            <div className="lg:w-1/4 w-full  font-pops items-center">
            <h3 className="text-[#fff] text-center lg:text-[16px] text-[14ox] font-bold "> Company</h3>
            <ul>
                
                <li className='text-[#fff] text-center text-[14px] pt-3'>Home</li>
                <li className='text-[#fff] text-center text-[14px] pt-2'> About</li>
                <li className='text-[#fff] text-center text-[14px] pt-2'> Services</li>
                <li className='text-[#fff] text-center text-[14px] pt-2'>Gallery</li>
            </ul>
            </div>
            <div className="lg:w-1/4 w-full  font-pops items-center">
            <h3 className="text-[#fff] text-center lg:text-[16px] text-[14px] font-bold "> Other</h3>
            <ul>
                
                <li className='text-[#fff] text-center lg:text-[14px] text-[12px] pt-3'>Blog</li>
                <li className='text-[#fff] text-center lg:text-[14px] text-[12px] pt-2'> Contact</li>
                <li className='text-[#fff] text-center lg:text-[14px] text-[12px] pt-2'> Terms & Conditions</li>
                <li className='text-[#fff] text-center lg:text-[14px] text-[12px] pt-2'>Privacy Policy</li>
            </ul>
            </div>
            <div className=" w-full lg:w-1/4 text-center lg:text-start">
            <h3 className="text-[#fff] font-pops lg:text-[16px] text-[14px] font-bold pt-3">Certificate</h3>
            <div className=" flex justify-center lg:justify-start gap-2">
                <div className="pt-3"> <img src={cert1Img} alt="" /></div>    
                <div className="pt-3">   <img src={cert2Img} alt="" /></div>    
            </div>
            
          
            </div>



            </div>



        </div>



    </div>
    <div className=" p-[10px] bg-[#282828] ">
        <div className="max-w-container ms-auto">
        <p className='font-pops lg:text-[16px] text-[12px] text-[#6C6C6C]'>© Copyright 2022 by Eitty Moni  – All right reserved.</p>
        </div>
       
    </div>



    </section>
  )
}

export default Footer
