"use client";

import Hero from "./Hero";
import ImageSlider from "./ImageSlider";
import { Quotes } from "./Quotes";
import Image from "next/image";

export default function Homepage() {
    return (
        <>
            <Hero />
            <ImageSlider />
            <div className="flex items-center justify-center w-full h-[50vh] px-[10vw]">
                <Quotes />
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 relative">
                    <Image 
                        src="https://res.cloudinary.com/dutlw7bko/image/upload/v1729869802/charity-hackathon/logo_reclaim_qyxsoc.jpg" 
                        alt="Reclaim Protocol Logo" 
                        layout="fill" 
                        className="object-cover rounded-full"
                    />
                </div>
                <p className="text-center text-gray-500 text-sm mt-2">
                    Built with Reclaim Protocol by the Musang Charity
                </p>
            </div>
        </>
    );
}
