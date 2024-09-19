import React from 'react'

const Banner = () => {
  return (
    <section className='bg-ban sm:py-[257px] lg:py-[257px] w-full bg-no-repeat bg-cover relative z-[1] after:absolute after:top-0 after:left-0 after:content-[""] after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[-1]' >
        <div className="max-w-container ms-auto">
            <h2 className='text-white font-pops lg:text-left text-center text-[15px] lg:text-[64px] w-full lg:w-[842px] font-bold  leading-5 lg:leading-[96px] lg:pt-0 px-[100px] py-[50px]'>We exist since 1975 on the oil and gas industry.</h2>

           <div className=" text-center lg:text-left pb-10 lg:pb-0">
           <span className='lg:py-[14px] lg:px-[41px] px-3 py-1  font-pops text-[16px] border-2 border-[#F40404] rounded text-white hover:uppercase hover:bg-[#F40404] hover:border-0'>Learn More</span>
           </div>

        </div>
    </section>
  )
}

export default Banner
