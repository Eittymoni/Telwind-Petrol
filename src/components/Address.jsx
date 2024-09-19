import React from 'react'

const Address = () => {
  return (
    <section>
        <div className=" pt-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.5231305138336!2d90.36083057465183!3d23.75721628851596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5986ba292d%3A0xee00a6d7ec9619fd!2sK-33%20Kazi%20Nazrul%20Islam%20Rd%2C%20Dhaka%201207!5e1!3m2!1sen!2sbd!4v1726684571649!5m2!1sen!2sbd" width="100%" height="450"  allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="bg-[red] lg:py-[50px] py-[20px] border-b-2 border-[yellow]">
        <div className="max-w-container mx-auto flex justify-around items-center">
            <p className=' font-pops lg:text-[36px] text-[16px] font-bold lg:leading-[54px] text-white'>Want to join as member branch in your area?</p>
                <h5 className='font-pops px-2 py-2 lg:text-[16px] text-[12px]  bg-[red]  rounded text-[#Ffff] border-2 border-[yellow] hover:bg-white hover:text-[red]' >CONTACT</h5>
        </div>
        </div>
        
    </section>
  )
}

export default Address
