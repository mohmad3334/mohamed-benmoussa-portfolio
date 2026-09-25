import { useState } from 'react';
import { User, FolderCode, Cpu, Mail, Terminal, Menu, X, Radio } from 'lucide-react';
import logo from '../../public/logo.webp';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "ABOUT", href: "#about", icon: User },
        { name: "DOSSIER", href: "#projects", icon: FolderCode },
        { name: "STACK", href: "#skills", icon: Cpu },
        { name: "CONTACT", href: "#contact", icon: Mail }
    ];

    return (
        <header className="sticky top-0 left-0 w-full z-50">
            <nav 
                aria-label="Main Navigation" 
                className="flex justify-between items-center px-6 py-4 bg-dark-bg/80 backdrop-blur-md text-white border-b border-white/10"
            >
                <a href="#" className="flex items-center gap-3 group" aria-label="Mohamed Benmoussa - Back to top">
                    <img 
                        className="w-9 h-9 object-contain group-hover:scale-105 transition-transform duration-300" 
                        src={logo} 
                        alt="" 
                        aria-hidden="true" 
                        width="36" 
                        height="36" 
                    />
                    <div className="flex flex-col items-start">
                        <span className="font-headline text-[15px] font-bold tracking-wide group-hover:text-primary transition-colors">
                            MOHAMED BENMOUSSA
                        </span>
                        <span className="font-body tracking-[3px] text-[10px] text-neutral-400">
                            FRONT-END DEVELOPER
                        </span>
                    </div>
                </a>

                <ul className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-neutral-400">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.name}>
                                <a 
                                    href={item.href} 
                                    className="relative py-1 transition-colors duration-300 hover:text-primary hover:[text-shadow:0_0_10px_#CCFF00] group flex items-center gap-2"
                                >
                                    <Icon className="w-3.5 h-3.5 text-neutral-500 group-hover:text-primary transition-colors duration-300" />
                                    
                                    <span 
                                        className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 font-bold"
                                        aria-hidden="true"
                                    >
                                        &gt;
                                    </span>
                                    
                                    <span>// {item.name}</span>

                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center gap-4">
                    <div 
                        tabIndex={0}
                        role="status"
                        aria-label="System status: Online"
                        className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-primary bg-primary/10 px-3 py-1.5 border border-primary/20 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                        <Radio className="w-3 h-3 animate-pulse text-primary" />
                        <span className="tracking-widest uppercase font-bold">SYS.ONLINE</span>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Navigation Menu"
                        className="md:hidden text-neutral-300 hover:text-primary p-2 border border-white/10 rounded-lg bg-white/5 transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-dark-bg/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 font-mono text-sm space-y-4">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 text-neutral-300 hover:text-primary py-2 border-b border-white/5 transition-colors"
                            >
                                <Icon className="w-4 h-4 text-primary" />
                                <span>// {item.name}</span>
                            </a>
                        );
                    })}
                    <div className="pt-2 flex items-center gap-2 text-[11px] text-primary font-mono">
                        <Terminal className="w-4 h-4" />
                        <span>STATUS: SYS.ONLINE</span>
                    </div>
                </div>
            )}
        </header>
    );
}