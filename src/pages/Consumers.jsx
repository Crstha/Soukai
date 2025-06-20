import React, { useEffect, useLayoutEffect, useRef } from 'react'

import { partners } from '../constants';
import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Consumers = () => {
    const marqueeRef = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".marquee-track", {
                xPercent: -50,
                repeat: -2,
                duration: 25,
                ease: "linear",
            });
        }, marqueeRef);

        return () => ctx.revert();
    }, []);

    return (<section className="bg-white py-12 overflow-hidden mt-20">
        <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Restaurants using Soukai
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
                Trusted by restaurants that value freshness, speed, and quality.
            </p>
        </div>

        <div ref={marqueeRef} className="relative overflow-hidden">
            <div className="marquee-track flex gap-12 px-6">
                {[...partners, ...partners].map((src, i) => (
                    <img
                        key={i}
                        src={src.restaurantLogo}
                        alt={`Restaurant logo ${i}`}
                        className="h-30 w-auto object-contain flex-shrink-0 opacity-80 hover:opacity-100 transition duration-300"
                    />
                ))}
            </div>
        </div>
    </section>
    )
}

export default Consumers