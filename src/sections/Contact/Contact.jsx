import { useState, useRef } from "react";
import { Send, Terminal, MessageSquare, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
        )
        .then(() => {
            setLoading(false);
            setStatus("SUCCESS");
            e.target.reset();
            setTimeout(() => setStatus(null), 5000);
        }, (error) => {
            setLoading(false);
            setStatus("ERROR");
            console.error("EmailJS Error:", error);
        });
    };

    return (
        <section id="contact" className="w-full bg-[#131313] px-6 md:px-12 py-20 font-mono border-t border-white/10 text-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-4">
                    <h3 className="text-neutral-500 text-xs md:text-sm tracking-widest uppercase">
                        // 004 — TRANSMISSION PROTOCOL
                    </h3>
                    <div className="text-neutral-600 text-xs uppercase tracking-widest hidden md:block animate-pulse">
                        [ STATUS: FREELANCE / FULL-TIME READY ]
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="font-headline font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-white mb-4">
                                INIT CONNECTION
                            </h2>
                            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                                Open for tactical software contracts, creative front-end architecture, or full-stack operations. Reach out directly via terminal or transmission line.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 border-l-2 border-primary/40 pl-4 py-2">
                            <div className="flex items-center gap-3 text-neutral-300 text-xs tracking-widest">
                                <Mail className="w-4 h-4 text-primary shrink-0" />
                                <span>DIRECT EMAIL:</span>
                                <a 
                                    href="mailto:benmoussa.mohamed.dev@gmail.com" 
                                    className="hover:text-primary transition-colors underline decoration-primary/30 truncate"
                                >
                                    benmoussa.mohamed.dev@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center gap-3 text-neutral-300 text-xs tracking-widest">
                                <Terminal className="w-4 h-4 text-primary shrink-0" />
                                <span>LOCATION:</span>
                                <span className="text-neutral-400">REMOTE / AGADIR, MOROCCO</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 pt-4">
                            <span className="text-neutral-500 text-xs tracking-widest uppercase">// SECURE CHANNELS</span>
                            <div className="flex flex-wrap items-center gap-3">
                                <a 
                                    href="https://wa.me/212618692099" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-xs text-primary bg-primary/10 border border-primary/30 px-4 py-2.5 hover:bg-primary hover:text-black transition-all"
                                >
                                    <MessageSquare className="w-4 h-4" />
                                    <span>WHATSAPP INTEL</span>
                                </a>

                                <a 
                                    href="https://github.com/mohmad3334" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    aria-label="GitHub Profile"
                                    className="flex items-center gap-2 text-xs text-neutral-300 bg-white/5 border border-white/10 px-4 py-2.5 hover:border-white/30 transition-colors"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                    </svg>
                                    <span>GITHUB</span>
                                </a>

                                <a 
                                    href="https://www.linkedin.com/in/mohamed-benmoussa-5b689a432/" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    aria-label="LinkedIn Profile"
                                    className="flex items-center gap-2 text-xs text-neutral-300 bg-white/5 border border-white/10 px-4 py-2.5 hover:border-white/30 transition-colors"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                    </svg>
                                    <span>LINKEDIN</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="bg-[#161616] border border-white/10 p-6 md:p-8 flex flex-col gap-6 relative">
                        <input type="hidden" name="title" value="Portfolio Transmission" />

                        <div className="text-xs text-neutral-500 tracking-widest uppercase flex justify-between">
                            <span>// FORM_ENCRYPTION: ACTIVE</span>
                            <span>SYS_READY</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-xs text-neutral-400 tracking-wider uppercase">IDENTIFIER [NAME]</label>
                            <input 
                                id="name"
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full bg-[#0d0d0d] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/60 transition-colors font-mono"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-xs text-neutral-400 tracking-wider uppercase">COMMUNICATION_PORT [EMAIL]</label>
                            <input 
                                id="email"
                                type="email"
                                name="email"
                                required
                                placeholder="operator@domain.com"
                                className="w-full bg-[#0d0d0d] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/60 transition-colors font-mono"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-xs text-neutral-400 tracking-wider uppercase">PAYLOAD [MESSAGE]</label>
                            <textarea 
                                id="message"
                                name="message"
                                rows="4"
                                required
                                placeholder="Enter system requirements or inquiry..."
                                className="w-full bg-[#0d0d0d] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/60 transition-colors font-mono resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 bg-primary/10 border border-primary/40 text-primary hover:bg-primary hover:text-black py-3.5 text-xs tracking-widest uppercase font-bold transition-all duration-200 mt-2 disabled:opacity-50 cursor-pointer"
                        >
                            <Send className="w-4 h-4" />
                            <span>{loading ? "TRANSMITTING..." : "EXECUTE TRANSMISSION"}</span>
                        </button>

                        {status === "SUCCESS" && (
                            <div className="text-center text-xs text-primary bg-primary/10 py-2 border border-primary/20 tracking-widest">
                                [ TRANSMISSION DELIVERED SUCCESSFULLY ]
                            </div>
                        )}

                        {status === "ERROR" && (
                            <div className="text-center text-xs text-red-400 bg-red-500/10 py-2 border border-red-500/20 tracking-widest">
                                [ TRANSMISSION FAILED - TRY AGAIN ]
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}