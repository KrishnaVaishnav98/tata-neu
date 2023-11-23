import React from 'react'
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbCashBanknoteOff } from "react-icons/tb";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { HiClipboardDocumentList } from "react-icons/hi2";
import family_Img from '../Images/family_loan.webp'
import { HomeSec1 } from '../components/HomeSec1';
import { HomeSec2 } from '../components/HomeSec2';
import { HomeSec3 } from '../components/HomeSec3';

export const Homepage = () => {
  return (
    <>
      <HomeSec1 />
      <HomeSec2 />
      <HomeSec3 />
    </>
  )
}
