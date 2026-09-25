import TacticalBackground from './TacticalBackground'

export default function Hero() {
    return (
        <TacticalBackground>
            <div className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-between items-start px-6 md:px-3 py-10 max-w-7xl mx-auto">
                <div>
                    <h4 className="text-neutral-500 font-mono text-xs md:text-sm tracking-widest uppercase mb-8">
                        // 001 — FRONT-END ARCHITECTURE & INTERACTIVE SYSTEMS
                    </h4>

                    <div className="font-headline font-black tracking-tight leading-none uppercase">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-2 md:mb-4">
                            BUILDING
                        </h1>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl text-neutral-400 mb-2 md:mb-4">
                            SCALABLE
                        </h1>
                        <h1 className="text-5xl md:text-8xl lg:text-[100px] text-primary drop-shadow-[0_0_25px_rgba(204,255,0,0.2)]">
                            FRONT-END APPLICATION
                        </h1>
                    </div>

                    <p className="text-neutral-400 font-mono text-sm md:text-base mt-8 max-w-xl leading-relaxed tracking-wide">
                        Self-taught precision, built through modern JavaScript, custom rendering, and clean architecture.
                        Crafting hyper-responsive, scalable user interfaces with high performance at the core.
                    </p>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 mt-12 border-t border-white/10 font-mono text-xs uppercase tracking-wider relative z-10">
                    <div>
                        <div className="text-neutral-500 mb-1">// PARADIGM</div>
                        <div className="text-white font-bold">Modular UI & Clean Code</div>
                    </div>
                    <div>
                        <div className="text-neutral-500 mb-1">// METHODOLOGY</div>
                        <div className="text-white font-bold">Component-Driven Design</div>
                    </div>
                    <div>
                        <div className="text-neutral-500 mb-1">// FOCUS</div>
                        <div className="text-white font-bold">React • Canvas • Performance</div>
                    </div>
                </div>
            </div>
        </TacticalBackground>
    )
}