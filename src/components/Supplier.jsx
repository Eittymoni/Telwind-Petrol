import React from 'react'
import pic1 from "../assets/supplier1.png"
import pic2 from "../assets/supplier2.png"
import pic3 from "../assets/supplier3.png"
import pic4 from "../assets/supplier4.png"

const Supplier = () => {
  return (
   <section>
       <div className=" max-w-container mx-auto">
        <div className=" lg:flex">
            <div className=" lg:w-1/2 w-full">
                <h2 className=' font-pops  text-[25px] lg:text-[48px] lg:leading-[72px] lg:px-[150px] px-[100px] md:px-[120px] font-bold lg:pt-[78px] pt-[50px] lg:pb-[100px] text-center'>The biggest supplier on the country</h2>
             </div>
            <div className=" lg:w-1/2 w-full">
                <p className=' font-pops lg:text-[16px] text-[12px] font-medium text-[#6C6C6C] px-[15px] pt-[30px] lg:pt-[161px]  pb-[30px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
             </div>
        </div>
       </div>
       <div className="lg:flex md:flex justify-around pb-[50px]">
        <div className="lg:w-1/4 md:w-1/3 w-full px-[15px] pb-2">< img src={pic1} alt="" /></div>
        <div className="lg:w-1/4 md:w-1/3 w-full px-[15px] pb-2"><img src={pic2} alt="" /></div>
        <div className="lg:w-1/4  md:w-1/3 w-full px-[15px] pb-2"><img src={pic3} alt="" /></div>
        <div className="lg:w-1/4  md:w-1/3 w-full px-[15px] pb-2"><img src={pic4} alt="" /></div>

       </div>

   </section>
  )
}

export default Supplier
