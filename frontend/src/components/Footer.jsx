import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className="flex flex-col w-full h-[420px] bg-green-400"> 
                <div className="w-full h-[330px] flex flex-row">
                    <div className="w-4/5 h-full flex flex-col">
                        {/* <Image src="/Logo-White.png" width={272} height={44} />
                        <div>
                            
                        </div> */}
                    </div>
                    <div className="w-full h-full bg-white">

                    </div>
                </div>
                <div className="bg-green-200 w-full h-[90px] flex flex-row items-center justify-center">
                    <p className="text-white font-['Poppins'] text-[18px]">Copyright 2024 - Wellnes Whale All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}