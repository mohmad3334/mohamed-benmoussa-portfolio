export default function Card3() {
    const pillars = [
        {
            title: "PERFORMANCE FIRST",
            desc: "Minimalist bundles, zero-bloat execution, and smooth 60FPS render cycles."
        },
        {
            title: "PIXEL-PERFECT UI",
            desc: "Interface physics and micro-interactions designed with mathematical precision."
        },
        {
            title: "STRICT MODULARITY",
            desc: "Predictable state flow, clean component boundaries, and scalable token systems."
        }
    ];

    return (
        <div className="p-6 md:p-8 bg-[#161616] border border-white/10 rounded-lg w-full md:w-[500px] shrink-0 flex flex-col justify-between gap-8 font-mono hover:border-primary/50 transition-colors duration-300">
            <div>
                <div className="flex justify-between items-center text-xs text-neutral-500 uppercase tracking-widest mb-6">
                    <span className="text-primary font-bold">[ 03.0 // CODEX ]</span>
                    <span>VALUES</span>
                </div>

                <h3 className="font-headline font-extrabold text-3xl md:text-4xl text-white tracking-tight uppercase mb-6">
                    PILLARS
                </h3>

                <div className="space-y-4">
                    {pillars.map((pillar, i) => (
                        <div key={i} className="space-y-1">
                            <div className="text-xs font-bold text-white flex items-center gap-2">
                                <span className="text-primary">&gt;</span> {pillar.title}
                            </div>
                            <p className="text-neutral-400 text-xs leading-relaxed pl-4">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-white/10 text-[11px] text-neutral-500 uppercase tracking-wider">
                <div>INDEX REF // 2026</div>
                <div className="text-primary font-semibold">UNCOMPROMISING</div>
            </div>
        </div>
    );
}