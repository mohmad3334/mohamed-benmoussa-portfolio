import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Card3 from "./Components/Card3";

gsap.registerPlugin(ScrollTrigger);

export default function Dossier() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const trigger = triggerRef.current;

        const totalScrollWidth = section.scrollWidth - window.innerWidth;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            gsap.to(section, {
                x: -totalScrollWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: trigger,
                    pin: true,
                    scrub: 0.1,
                    end: () => `+=${totalScrollWidth * 1.2}`,
                    invalidateOnRefresh: true,
                },
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <div id="skills" ref={triggerRef} className="overflow-hidden bg-dark-bg text-white font-mono min-h-screen flex flex-col justify-between py-8">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-4 pb-4 flex justify-between items-center shrink-0">
                <h3 className="text-neutral-500 text-xs md:text-sm tracking-widest uppercase">
                    // 002 — PERSONNEL DOSSIER & SYSTEM SPECS
                </h3>
                <div className="text-neutral-600 text-xs uppercase tracking-widest hidden md:block">
                    [ PINNED VIEWPORT // SCROLL TO UNLOCK ]
                </div>
            </div>

            <div
                ref={sectionRef}
                className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-10 px-6 md:px-12 py-4 w-full lg:w-max my-auto"
            >
                <Card1 />
                <Card2 />
                <Card3 />
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-4 flex justify-between items-center text-neutral-600 text-xs uppercase tracking-widest shrink-0">
                <div>[ SYSTEM STATUS: ONLINE ]</div>
                <div>03 UNITS ACTIVE</div>
            </div>
        </div>
    );
}