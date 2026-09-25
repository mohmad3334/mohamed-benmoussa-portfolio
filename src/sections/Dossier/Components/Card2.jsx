export default function Card2() {
    const skills = [
        { name: "REACT 19", id: "01" },
        { name: "TAILWIND CSS V4", id: "02" },
        { name: "HTML5", id: "03" },
        { name: "CSS3", id: "04" },
        { name: "JAVASCRIPT ES6+", id: "05" },
        { name: "GIT & GITHUB", id: "06" },
        { name: "BOOTSTRAP 5", id: "07" },
        { name: "C LANGUAGE CORE", id: "08" },
    ];

    return (
        <div className="p-6 md:p-8 bg-[#161616] border border-white/10 rounded-lg w-full md:w-[500px] shrink-0 flex flex-col justify-between gap-8 font-mono hover:border-primary/50 transition-colors duration-300">
            <div>
                <div className="flex justify-between items-center text-xs text-neutral-500 uppercase tracking-widest mb-6">
                    <span className="text-primary font-bold">[ 02.0 // STACK MATRIX ]</span>
                    <span>CORE CAPACITIES</span>
                </div>

                <h3 className="font-headline font-extrabold text-3xl md:text-4xl text-white tracking-tight uppercase mb-4">
                    SKILLS SPECTRUM
                </h3>

                <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                    Taxonomy of high-utility systems, rendering engines, and modular tools utilized to engineer bespoke digital products.
                </p>

                <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex cursor-crosshair justify-between items-center p-3 bg-white/5 border border-white/5 rounded text-xs text-neutral-200 hover:border-primary/30 transition-colors">
                            <span className="font-semibold">{skill.name}</span>
                            <span className="text-neutral-600 text-[10px]">[ {skill.id} ]</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-white/10 text-[11px] text-neutral-500 uppercase tracking-wider">
                <div>LATENCY &lt; 16.6MS</div>
                <div className="text-primary font-semibold">100% DECLARATIVE</div>
            </div>
        </div>
    );
}