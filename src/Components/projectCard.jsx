import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ 
    id = "01", 
    title = "PROJECT TITLE", 
    skills = [], 
    image,
    link 
}) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        setMousePos({
            x: e.clientX,
            y: e.clientY,
        });
    };

    return (
        <a
            href={link}
            target="_blank"
            aria-label={`View ${title} project`}
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            className="group relative w-full flex justify-between items-center py-8 md:py-10 border-b border-white/10 cursor-crosshair transition-colors duration-200 block"
        >
            <div className="flex items-start gap-6 md:gap-10">
                <span className="font-mono text-xs md:text-sm text-neutral-500 pt-1.5" aria-hidden="true">
                    {id}
                </span>

                <div className="flex flex-col gap-3">
                    <h3 className="font-headline font-extrabold text-2xl md:text-4xl text-white tracking-tight uppercase group-hover:translate-x-3 transition-transform duration-300">
                        {title}
                    </h3>

                    {skills && skills.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 md:gap-2" aria-label={`Technologies used in ${title}`}>
                            {skills.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-[10px] md:text-[11px] font-mono text-neutral-400 bg-[#1e1e1e] border border-white/5 px-2 py-0.5 uppercase tracking-wider"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-3 font-mono text-neutral-500 text-xs tracking-widest uppercase group-hover:text-white transition-colors">
                <span className="hidden md:inline">VIEW PROJECT</span>
                <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
            </div>

            {isHovered && image && (
                <div
                    style={{
                        top: `${mousePos.y}px`,
                        left: `${mousePos.x + 25}px`,
                    }}
                    className="pointer-events-none fixed z-50 -translate-y-1/2 w-72 h-44 md:w-96 md:h-60 border border-white/20 bg-neutral-900 shadow-2xl overflow-hidden transition-all duration-75 ease-out"
                >
                    <img
                        src={image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        width="384"
                        height="240"
                        className="w-full h-full"
                    />
                </div>
            )}
        </a>
    );
}