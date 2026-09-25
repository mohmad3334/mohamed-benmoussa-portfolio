export default function HeadLine() {
    return (
        <div className="w-full py-4 flex justify-between items-center z-10 relative mb-8 border-b border-white/5">
            <h3 className="text-neutral-500 text-xs md:text-sm tracking-widest uppercase">
                // 003 — ARCHIVES & SELECTED WORKS
            </h3>
            <h3 className="text-neutral-700 font-bold text-xs md:text-sm tracking-wider uppercase hidden lg:block animate-pulse">
                [ SCANNING ACTIVE: HOVER TO DECRYPT ]
            </h3>
        </div>
    );
}