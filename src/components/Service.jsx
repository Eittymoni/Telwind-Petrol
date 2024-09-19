import React from 'react'

const Service = () => {
  return (
    <section className='pb-[50px]'>
        <div className="lg:flex  "> 
            <div className=" lg:w-1/2  w-full">
            <h2 className='lg:pt-[134px] pt-9 font-pops lg:text-[64px] text-[30px] font-bold lg:leading-[64px] text-center'>Our Services</h2>
            <p className='font-pops lg:text-[16px] text-[12px] text-left text-[#6C6C6C] lg:px-[200px] pt-2 pb-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className="lg:w-1/2 bg-auto w-full px-[30px] lg:h-[410px] bg-ser1 bg-no-repeat lg:bg-cover  bg-center relative z-[1] after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[-1] ">
            <h3 className=' font-pops lg:text-[36px] text-[18px] font-bold text-white lg:pt-[147px] pt-[70px]'>Modern natural oil and gas refineries.</h3>
            <div className=" text-center lg:text-left lg:pt-2  pb-3">
           <span className='  py-2  px-2 font-pops lg:text-[16px]  text-[12px] border-2 border-[#F40404] rounded text-white hover:bg-[#F40404] hover:border-0'>Learn More</span>
           </div>
            </div>
           
        </div>

        <div className=" lg:flex " >
        <div className=" lg:w-1/2 px-[30px] w-full bg-auto lg:h-[410px] bg-ser2 bg-no-repeat lg:bg-cover  bg-center relative z-[1] after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[-1] ">
            <h3 className=' font-pops lg:text-[36px] text-[18px] font-bold text-white lg:pt-[147px] pt-[70px]'>Supply of national industries.</h3>
            <div className=" text-center lg:text-left lg:pt-2 pb-3">
           <span className=' py-2  px-2 font-pops lg:text-[16px] text-[12px] border-2 border-[#F40404] rounded text-white hover:bg-[#F40404] hover:border-0'>Learn More</span>
           </div>
            </div>
            <div className=" lg:w-1/2 px-[30px] w-full bg-auto lg:h-[410px] bg-ser3 bg-no-repeat lg:bg-cover  bg-center relative z-[1] after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[-1] ">
            <h3 className=' font-pops lg:text-[36px]  text-[18px] font-bold text-white lg:pt-[147px] pt-[70px] '>Supply of national industries.</h3>
            <div className=" text-center lg:text-left lg:pt-2 pb-3">
           <span className=' py-2  px-2 font-pops lg:text-[16px] text-[12px] border-2 border-[#F40404] rounded text-white hover:bg-[#F40404] hover:border-0'>Learn More</span>
           </div>
            </div>
        </div>

    </section>
  )
}

export default Service
