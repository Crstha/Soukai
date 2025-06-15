import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const WhySoukai = () => {
 useEffect(() => {
    gsap.fromTo('.whysoukai-card',{
      opacity:0,y:50
    },
       {
      scrollTrigger: {
        trigger: '.soukai',
        start: 'top 60%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out',
    });
  }, []);
  
  return (
    <section className="soukai">
        <h2 className="text-[#121714] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 mt-8">Why Soukai?</h2>
            <div className=" grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="whysoukai-card flex flex-1 gap-3 rounded-lg border border-[#dde4e0] bg-white p-4 flex-col">
                <div className="text-[#121714]" data-icon="Leaf" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                    
                  <h2 className="text-[#121714] text-base font-bold leading-tight">Sustainable Practices</h2>
                  <p className="text-[#688273] text-sm font-normal leading-normal">
                    We prioritize sustainable sourcing and eco-friendly practices to minimize our environmental impact.
                  </p>
                </div>
              </div>
              <div className="whysoukai-card flex flex-1 gap-3 rounded-lg border border-[#dde4e0] bg-white p-4 flex-col">
                <div className="text-[#121714]" data-icon="Money" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#121714] text-base font-bold leading-tight">Competitive Pricing</h2>
                  <p className="text-[#688273] text-sm font-normal leading-normal">
                    Benefit from competitive pricing without compromising on quality, helping you manage costs effectively.
                  </p>
                </div>
              </div>
              <div className="whysoukai-card flex flex-1 gap-3 rounded-lg border border-[#dde4e0] bg-white p-4 flex-col">
                <div className="text-[#121714]" data-icon="UsersThree" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#121714] text-base font-bold leading-tight">Dedicated Support</h2>
                  <p className="text-[#688273] text-sm font-normal leading-normal">Our dedicated support team is always available to assist you with any inquiries or needs.</p>
                </div>
              </div>
            </div>

    </section>
  )
}

export default WhySoukai