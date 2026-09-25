export default function Footer() {
    return (
        <footer className="w-full bg-dark-bg text-white border-t border-white/10 py-6 px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                
                <div className="flex flex-col items-start">
                    <p className="font-headline text-[15px] font-bold tracking-wide text-white">
                        MOHAMED BENMOUSSA
                    </p>
                    <p className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase">
                        Front-End Developer / Systems & UI
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto justify-between">
                    <p className="text-xs font-mono tracking-widest text-neutral-400">
                        &copy; {new Date().getFullYear()} Spatial & Systems Engineering. All rights reserved.
                    </p>

                    <nav aria-label="Footer Social Links" className="font-mono text-[11px] text-neutral-500 flex items-center gap-3">
                        <a 
                            href="https://github.com/mohmad3334" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Visit Mohamed Benmoussa's GitHub Profile"
                            className="hover:text-primary transition-colors duration-200"
                        >
                            [GITHUB]
                        </a>
                        <span className="cursor-default" aria-hidden="true">/</span>
                        <a 
                            href="https://www.linkedin.com/in/mohamed-benmoussa-5b689a432/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Visit Mohamed Benmoussa's LinkedIn Profile"
                            className="hover:text-primary transition-colors duration-200"
                        >
                            [LINKEDIN]
                        </a>
                    </nav>
                </div>

            </div>
        </footer>
    );
}