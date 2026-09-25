export default function Card1() {
    return (
        <div className="p-6 md:p-8 bg-[#161616] border border-white/10 rounded-lg w-full md:w-[500px] shrink-0 flex flex-col justify-between gap-8 font-mono hover:border-primary/50 transition-colors duration-300">
            <div>
                <div className="flex justify-between items-center text-xs text-neutral-500 uppercase tracking-widest mb-6">
                    <span className="text-primary font-bold">[ 01.0 // GENESIS ]</span>
                    <span>AUTONOMOUS EVOLUTION</span>
                </div>

                <h3 className="font-headline font-extrabold text-3xl md:text-4xl text-white tracking-tight uppercase mb-6">
                    WHO AM I?
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    A self-taught front-end engineer forged through relentless curiosity and deep exploration of modern web standards. I turn complex logic into fluid, high-performance web applications.
                </p>

                <p className="text-neutral-400 text-sm leading-relaxed">
                    Specializing in the intersection of technical precision and modern interface design — building zero-dependency canvas systems, clean component architectures, and responsive spatial UIs.
                </p>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-white/10 text-[11px] text-neutral-500 uppercase tracking-wider">
                <div>LOCATION: MOROCCO</div>
                <div className="text-primary font-semibold">STATUS: ACTIVE</div>
            </div>
        </div>
    );
}