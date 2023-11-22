import React from 'react'
import logo from '../Images/tata-neu-logo.jpg'
import { Link } from 'react-router-dom'
import { BiSearchAlt } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";

export const Navbar = () => {
    return (
        <>
            <div className='px-2 py-2 lg:px-8 lg:py-6 block lg:flex justify-between'>
                <div className='flex items-center gap-6 pb-4 lg:pb-0 justify-between items-center'>
                    <div className='flex lg:hidden'>
                        <Menu >
                            <MenuHandler>
                                <Button>
                                    <HiMenuAlt2 size={'18px'} />
                                </Button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem><Link to={"/"}>Offers</Link></MenuItem>
                                <MenuItem><Link to={"/"}>Stories</Link></MenuItem>
                                <MenuItem><Link to={"/"}>Tata Pay</Link></MenuItem>
                                <MenuItem><Link to={"/"}>NeuPass</Link></MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    <div className='w-12 h-8'>
                        <img className='w-full' src={logo} alt="https://cdn.branch.io/branch-assets/1649145052553-og_image.jpg" />
                    </div>
                    <div className='text-sm items-center leading-5 pt-2 font-semibold gap-6 hidden lg:flex'>
                        <Link to={"/"}>Offers</Link>
                        <Link to={"/"}>Stories</Link>
                        <Link to={"/"}>Tata Pay</Link>
                        <Link to={"/"}>NeuPass</Link>
                    </div>
                    <div className='flex lg:hidden gap-6 justify-around items-center'>
                        <IoLocationOutline size={'18px'} />
                        <BsCart3 size={'18px'} />
                        <MdOutlineNotificationsActive size={'18px'} />
                        <FaRegUser size={'18px'} />
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className='flex items-center mx-1 lg:mx-0 w-full lg:w-64 h-10 bg-gray-200 px-2 rounded'>
                        <BiSearchAlt size={'24px'} />
                        <input className='border-none bg-gray-200 outline-none px-2' type="text" placeholder='Search Tata Neu' />
                    </div>
                    <div className='hidden lg:flex gap-6 justify-around items-center'>
                        <IoLocationOutline size={'24px'} />
                        <BsCart3 size={'24px'} />
                        <MdOutlineNotificationsActive size={'24px'} />
                        <FaRegUser size={'24px'} />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
