import Link from 'next/link'
import React from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { VscBellDot } from 'react-icons/vsc'

const Profiletab = () => {
  return (
    <div className=" flex items-center flex-row justify-between mb-8">
            <div>
              <div className="inline-block mx-2">
                <AiFillSetting className="text-[23px] text-[#A2A2A2]" />
              </div>
              <div className="inline-block ">
                <VscBellDot className="text-[23px] text-[#A2A2A2]" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-3">
              <div>
                <Link href={""} className="text-[15px] font-bold">
                  {"user?.sub" || "User"}
                </Link>
                <p className="text-[10px] font-medium text-[#C2C2C2]">
                  View Profile
                </p>
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-blue-400"></div>
            </div>
          </div>
  )
}

export default Profiletab