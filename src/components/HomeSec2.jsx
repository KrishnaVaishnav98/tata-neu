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
            <p className='px-4 lg:px-16 pb-4 lg:pb-8 text-[16px] lg:text-[44px] flex items-center justify-center lg:justify-start mt-4 lg:mt-2'><BsStars color='purple' />  Personal Loan Highlights</p>
            <div className='px-8 lg:px-16 flex items-center'>
                <div className='w-2/5 hidden md:flex' data-aos="fade-right">
                    <img className='w-full' src={man_img} alt="" />
                </div>
                <div className='w-4/5 lg:w-3/5 bg-[#f5f3ff] py-6 px-4 lg:px-12 rounded-xl m-auto' data-aos="fade-left">
                    <div className='flex gap-2 mb-4'>
                        <BiSolidStar size={'28px'} style={{ marginTop: '5px' }} color='orange' />
                        <div >
                            <p className='text-[12px] lg:text-[28px] font-semibold'>Interest Rate</p>
                            <p className='text-[10px] lg:text-xl text-gray-500 font-normal'>Usually <span className='text-[#8800ecd9]'> 10.49% p.a.</span> onwards: some PSUs may offer lower rates</p>
                        </div>
                    </div>
                    <div className='flex gap-2 mb-4'>
                        <BiSolidStar size={'28px'} style={{ marginTop: '5px' }} color='orange' />
                        <div >
                            <p className='text-[12px] lg:text-[28px] font-semibold'>Loan Amount </p>
                            <p className='text-[10px] lg:text-xl text-gray-500 font-normal'>Can go up to <span className='text-[#8800ecd9]'> RS 40 lakh:</span> some lenders may offer higher loan amount</p>
                        </div>
                    </div>
                    <div className='flex gap-2 mb-4'>
                        <BiSolidStar size={'28px'} style={{ marginTop: '5px' }} color='orange' />
                        <div >
                            <p className='text-[12px] lg:text-[28px] font-semibold'>Processing Fees</p>
                            <p className='text-[10px] lg:text-xl text-gray-500 font-normal'> <span className='text-[#8800ecd9]'> 0.5% to 4% </span> onwards: some PSUs may offer lower rates</p>
                        </div>
                    </div>
                    <div className='flex gap-2 mb-4'>
                        <BiSolidStar size={'28px'} style={{ marginTop: '5px' }} color='orange' />
                        <div >
                            <p className='text-[12px] lg:text-[28px] font-semibold'>Interest Rate</p>
                            <p className='text-[10px] lg:text-xl text-gray-500 font-normal'>Up to <span className='text-[#8800ecd9]'> 5 years</span>  (some lenders offer repayment period till 8 year)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
