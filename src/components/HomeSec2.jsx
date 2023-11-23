import React, { useEffect } from 'react';
import man_img from '../Images/pointing_man.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { BsStars } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";

export const HomeSec2 = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <p className='px-16 text-[18px] lg:text-[44px] flex items-center'><BsStars color='purple' /> Personal Loan Highlights</p>
            <div className='px-8 lg:p-16 flex'>
                <div className='w-2/5 hidden md:flex' data-aos="fade-right">
                    <img className='w-full' src={man_img} alt="" />
                </div>
                <div className='bg-[#f5f3ff] py-6 px-12 rounded-xl' data-aos="fade-left">
                    <div className='flex gap-2 mb-4'>
                        <BiSolidStar size={'28px'} style={{ marginTop: '10px' }} color='orange' />
                        <div >
                            <p className='text-[28px]'>Interest Rate</p>
                            <p className='text-xl text-gray-500 font-normal'>Usually <span className='text-[#8800ecd9]'> 10.49% p.a.</span> onwards: some PSUs may offer lower rates</p>
                        </div>
                    </div>
                    <div className='flex gap-2 mb-4'>
                        <BiSolidStar size={'28px'} style={{ marginTop: '10px' }} color='orange' />
                        <div >
                            <p className='text-[28px]'>Interest Rate</p>
                            <p className='text-xl text-gray-500 font-normal'>Usually <span className='text-[#8800ecd9]'> 10.49% p.a.</span> onwards: some PSUs may offer lower rates</p>
                        </div>
                    </div>
                    <div className='flex gap-2 mb-4'>
                        <BiSolidStar size={'28px'} style={{ marginTop: '10px' }} color='orange' />
                        <div >
                            <p className='text-[28px]'>Interest Rate</p>
                            <p className='text-xl text-gray-500 font-normal'>Usually <span className='text-[#8800ecd9]'> 10.49% p.a.</span> onwards: some PSUs may offer lower rates</p>
                        </div>
                    </div>
                    <div className='flex gap-2 mb-4'>
                        <BiSolidStar size={'28px'} style={{ marginTop: '10px' }} color='orange' />
                        <div >
                            <p className='text-[28px]'>Interest Rate</p>
                            <p className='text-xl text-gray-500 font-normal'>Usually <span className='text-[#8800ecd9]'> 10.49% p.a.</span> onwards: some PSUs may offer lower rates</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
