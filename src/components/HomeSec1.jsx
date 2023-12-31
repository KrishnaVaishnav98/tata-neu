import React from 'react'
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbCashBanknoteOff } from "react-icons/tb";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { HiClipboardDocumentList } from "react-icons/hi2";
import family_Img from '../Images/family_loan.webp'

export const HomeSec1 = () => {
    return (
        <div className='flex p-4 lg:p-14 m-auto'>
            <div className='w-4/5 md:w-2/3 px-4 mr-0 lg:mr-16'>
                <p className='text-[14px] lg:text-[60px] font-semibold'>Turn Dreams Into Reality With
                    <span className='text-[#FF0096]'> Personal Loans</span>
                </p>

                <div className='block md:flex gap-4 mt-12 items-center'>
                    <div className='flex mr-4'>
                        <div className='bg-green-50 p-2 w-fit h-fit rounded-2xl mr-4' >
                            <TbCashBanknoteOff color='green' size={'40px'} />
                        </div>
                        <div>
                            <p className='text-[14px] lg:text-[22px] font-bold'>Avail Zero</p>
                            <p className='text-[14px] lg:text-[22px] font-normal'>Processing fee</p>
                        </div>
                    </div>
                    <div className='flex mr-4 mt-2'>
                        <div className='bg-green-50 p-2 w-fit h-fit rounded-2xl mr-4' >
                            <BsFillLightningChargeFill color='green' size={'40px'} />
                        </div>
                        <div>
                            <p className='text-[14px] lg:text-[22px] font-bold'>Quick</p>
                            <p className='text-[14px] lg:text-[22px] font-normal'>Personal loan</p>
                        </div>
                    </div>
                </div>

                <div className='block md:flex gap-4 my-12 items-center'>
                    <div className='flex mr-4'>
                        <div className='bg-green-50 p-2 w-fit h-fit rounded-2xl mr-4' >
                            <FaHandHoldingMedical color='green' size={'40px'} />
                        </div>
                        <div>
                            <p className='text-[14px] lg:text-[22px] font-bold'>Lowest</p>
                            <p className='text-[14px] lg:text-[22px] font-normal'>Interest Rates</p>
                        </div>
                    </div>
                    <div className='flex mt-2'>
                        <div className='bg-green-50 p-2 w-fit h-fit rounded-2xl mr-4' >
                            <HiClipboardDocumentList color='green' size={'40px'} />
                        </div>
                        <div>
                            <p className='text-[14px] lg:text-[22px] font-bold'>Miniamal</p>
                            <p className='text-[14px] lg:text-[22px] font-normal'>Documentation</p>
                        </div>
                    </div>
                </div>
                <button className='text-sm lg:text-lg px-4 py-2 bg-[#8800ecd9] text-white rounded-md font-normal'>APPLY NOW</button>
            </div>

            <div className='w-2/5 hidden md:flex'>
                <svg
                    id="sw-js-blob-svg"
                    viewBox="0 0 100 100"
                    className="w-fit h-fit text-blue-500"
                >
                    <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stopColor="rgba(134.666, 162.693, 193.897, 1)" offset="0%" />
                            <stop id="stop2" stopColor="rgba(228.049, 222.705, 213.884, 0.24)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g>
                        <path
                            fill="none"
                            d="M32.7,-17.9C39.6,-6.9,40.6,8.6,34.2,19.7C27.7,30.9,13.9,37.8,0.2,37.7C-13.5,37.6,-27.1,30.5,-33.9,19.2C-40.6,7.8,-40.7,-7.9,-33.9,-18.8C-27.1,-29.8,-13.6,-36.1,-0.4,-35.9C12.9,-35.7,25.7,-29,32.7,-17.9Z"
                            width="100%"
                            height="100%"
                            transform="translate(50 50)"
                            strokeWidth="1"
                            style={{ transition: "all 0.3s ease 0s" }}
                            stroke="url(#sw-gradient)"
                        ></path>
                        <image
                            href={family_Img}
                            x="50"
                            y="50"
                            width="60"
                            height="60"
                            transform="translate(-30 -30)"
                        />
                    </g>
                </svg>
            </div>

        </div >
    )
}


