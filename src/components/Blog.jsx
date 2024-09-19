import React from 'react'
import BlogImg from "../assets/blog1.png"
import BlogImg2 from "../assets/blog2.png"
import BlogImg3 from "../assets/blog3.png"
import { RiArrowRightDoubleFill } from "react-icons/ri";


const Blog = () => {
  return (
    <section className=' bg-[#F0F0F0]'>
        <div className=" lg:pt-[100px] pt-6 lg: lg:pb-[100px] pb-6">
        <div className=" max-w-container mx-auto">
            <div className=" lg:flex"> 

                <div className=" lg:w-[32%] w-[95%]  relative m-2">
                    <img className='w-[100%]' src={BlogImg} alt="" />
                    <div className=" absolute top-0 left-0 h-[100%] w-[100%] bg-[rgba(0,0,0,0.6)]">
                        <p className=' font-pops lg:text-[24px] text-[16px] font-bold text-white lg:leading-[36px] text-left py-[50px] lg:py-[75px] px-[50px] lg:px-[45px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <div className="text-center  lg:pb-[30px]  lg:px-[70px]">
                    <span className='font-pops px-2 py-2 text-[12px]  bg-white  rounded text-[#F40404] hover:text-white hover:bg-[#F40404]'> Read More</span>
                    </div>
                    </div>
                </div>
                <div className=" lg:w-[32%] w-[95%] relative m-2 ">
                    <img className='w-[100%]' src={BlogImg2} alt="" />
                    <div className=" absolute top-0 left-0 h-[100%] w-[100%] bg-[rgba(0,0,0,0.6)]">
                        <p className=' font-pops lg:text-[24px]  text-[16px] font-bold text-white lg:leading-[36px] text-left py-[50px] lg:py-[75px] lg:px-[45px] px-[50px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <div className="text-center  pb-[30px] px-[70px]">
                    <span className='font-pops px-2 py-2 text-[12px]  bg-white  rounded text-[#F40404] hover:text-white hover:bg-[#F40404]'> Read More</span>
                    </div>
                    </div>
                </div>
                <div className=" lg:w-[32%] w-[95%] relative m-2">
                    <img className='w-[100%]' src={BlogImg3} alt="" />
                    <div className=" absolute top-0 left-0 h-[100%] w-[100%] bg-[rgba(0,0,0,0.6)]">
                        <p className=' font-pops lg:text-[24px] text-[16px] font-bold text-white lg:leading-[36px] text-left py-[50px] lg:py-[75px] px-[50px] lg:px-[45px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <div className="text-center  pb-[30px] px-[70px]">
                    <span className='font-pops px-2 py-2 text-[12px]  bg-white  rounded text-[#F40404] hover:text-white hover:bg-[#F40404]'> Read More</span>
                    </div>
                    </div>
                </div>


            </div>
            <div className=" flex justify-end"> 
                <span className=' font-pops lg:text-[16px]  text-[12px] font-bold text-black'>MORE FROM THE BLLOG  </span>
                < RiArrowRightDoubleFill/>
                
                </div>
        </div>


        </div>

    </section>
  )
}

export default Blog
