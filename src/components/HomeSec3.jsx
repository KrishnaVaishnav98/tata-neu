import React from 'react'
import hdfc from '../Images/hdfc.jpg'
import icici from '../Images/ICICI.jpg'
import bob from '../Images/bob.png'
import kotak from '../Images/kotak.png'

export const HomeSec3 = () => {
    return (
        <div className='bg-[#f8f9fa] block lg:flex p-8'>
            <div className='w-1/2 lg:w-1/5 m-auto p-auto'>
                <p className='text-[20px] lg:text-[38px] text-semibold mb-4 lg:mb-0'>Our Partners</p>
            </div>
            <div className='w-4/5 grid grid-cols-2 md:grid-cols-4 gap-4 text-[12px] lg:text-2xl m-auto p-auto'>
                <div>
                    <div className='w-2/5'>
                        <img className='w-fit' src={hdfc} alt="HDFC" />
                    </div>
                    <p>HDFC Bank</p>
                </div>
                <div>
                    <div className='w-2/5'>
                        <img className='w-fit' src={icici} alt="HDFC" />
                    </div>
                    <p>ICICI Bank</p>
                </div>
                <div>
                    <div className='w-2/5'>
                        <img className='w-fit' src={icici} alt="HDFC" />
                    </div>
                    <p>ICICI Bank</p>
                </div>
                <div>
                    <div className='w-2/5'>
                        <img className='w-fit' src={hdfc} alt="HDFC" />
                    </div>
                    <p>HDFC Bank</p>
                </div>
            </div>
        </div>
    )
}
