import React from 'react'

const Learn = () => {
  return (
    <section className='bg-[#F0F0F0]'>
        <div className=" max-w-container mx-auto ">
            <div className="lg:pt-[100px] pt-7 lg:pb-[100px] pb-3 flex">
                <div className=" w-[40%] bg-[#F40404] lg:min-h-[361px] h-[200px]">
                    <h4 className='font-pops lg:text-[36px] text-[18px] font-bold lg:leading-[54px] text-center text-white  px-[25px] lg:px-[100px]  py-[70px] lg:py-[50px]'>Learn more about our company</h4>
                </div>
                <div className="w-[60%] bg-lern bg-no-repeat bg-cover bg-center h-[200px] lg:min-h-[361px]">
                    <div className="text-center lg:pt-[160px] pt-[80px] ">
                    <span className='font-pops px-2 py-2 lg:text-[16px] text-[12px] bg-white  rounded text-[#F40404] hover:text-white hover:bg-[#F40404]'>Learn More</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Learn
