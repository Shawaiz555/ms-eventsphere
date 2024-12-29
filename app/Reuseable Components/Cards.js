"use client";
import Image from "next/image";
export default function Cards() {
  return (
    <div>
        <div className='w-full flex flex-col gap-8 justify-center lg:flex-row lg:justify-around pt-10'>
        <div className='w-full lg:w-[26%] flex justify-center gap-5 shadow-xl px-6 py-4 rounded-xl border-[1px] border-gray-300'>
          <div className='flex justify-center'>
            <Image src="/Icons/TicketsIcon.png" width={30} height={30} alt="Tickets Icon" className='w-[65px] h-[65px] lg:w-[70px] lg:h-[70px]'></Image>
          </div>
          <div className='text-center mt-1'>
            <h1 className='text-lg font-bold'>Total Tickets</h1>
            <p>4000</p>
          </div>
        </div>

        <div className='w-full lg:w-[26%] flex justify-center gap-5 shadow-xl px-6 py-4 rounded-xl border-[1px] border-gray-300'>
          <div className='flex justify-center'>
            <Image src="/Icons/SeatsIcon.png" width={30} height={30} alt="Seats Icon" className='w-[65px] h-[65px] lg:w-[70px] lg:h-[70px]'></Image>
          </div>
          <div className='text-center mt-1'>
            <h1 className='text-lg font-bold'>Total Seats</h1>
            <p>3000</p>
          </div>
        </div>

        <div className='w-full lg:w-[26%] flex justify-center gap-5 shadow-xl px-6 py-4 rounded-xl border-[1px] border-gray-300'>
          <div className='flex justify-center'>
            <Image src="/Icons/BalanceIcon.png" width={30} height={30} alt="Balance Icon" className='w-[65px] h-[65px] lg:w-[70px] lg:h-[70px]'></Image>
          </div>
          <div className='text-center mt-1'>
            <h1 className='text-lg font-bold'>Total Balance</h1>
            <p><b>RS:</b> 520000</p>
            <div className='flex gap-3 mt-4'>
              <Image src="/Icons/UpIcon.png" width={30} height={30} alt="Up Icon" className='lg:w-[30px] lg:h-[30px]'></Image>
              <p className='text-green-600 text-md tracking-wide'>10% Increases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
