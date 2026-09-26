import { useEffect, useRef } from "react";

export default function TacticalBackground({ children }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let animationFrameId;
        let width = (canvas.width = canvas.parentElement.clientWidth);
        let height = (canvas.height = canvas.parentElement.clientHeight);

        let mouse = {
            x: width / 2,
            y: height / 2,
            targetX: width / 2,
            targetY: height / 2,
        };

        let shockwaves = [];

        const handleResize = () => {
            if (!canvas.parentElement) return;
            width = canvas.width = canvas.parentElement.clientWidth;
            height = canvas.height = canvas.parentElement.clientHeight;
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.targetX = e.clientX - rect.left;
            mouse.targetY = e.clientY - rect.top;
        };

        const handleClick = (e) => {
            const rect = canvas.getBoundingClientRect();
            shockwaves.push({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                radius: 5,
                maxRadius: 80,
                alpha: 0.8,
            });
        };

        const parent = canvas.parentElement;
        window.addEventListener("resize", handleResize);
        parent.addEventListener("mousemove", handleMouseMove);
        parent.addEventListener("click", handleClick);

        const gridSize = 45;

        const draw = () => {
            mouse.x += (mouse.targetX - mouse.x) * 0.05;
            mouse.y += (mouse.targetY - mouse.y) * 0.05;

            ctx.fillStyle = "#0d0d0d";
            ctx.fillRect(0, 0, width, height);

            // Grid Lines
            ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
            ctx.lineWidth = 1;

            for (let x = 0; x < width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            for (let y = 0; y < height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Mouse Glow
            const radialGlow = ctx.createRadialGradient(
                mouse.x,
                mouse.y,
                5,
                mouse.x,
                mouse.y,
                180
            );
            radialGlow.addColorStop(0, "rgba(204, 255, 0, 0.1)");
            radialGlow.addColorStop(0.5, "rgba(204, 255, 0, 0.02)");
            radialGlow.addColorStop(1, "rgba(13, 13, 13, 0)");

            ctx.fillStyle = radialGlow;
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);
            ctx.fill();

            // Connecting Lines
            const range = 90;
            const startX = Math.max(0, Math.floor((mouse.x - range) / gridSize) * gridSize);
            const endX = Math.min(width, Math.ceil((mouse.x + range) / gridSize) * gridSize);
            const startY = Math.max(0, Math.floor((mouse.y - range) / gridSize) * gridSize);
            const endY = Math.min(height, Math.ceil((mouse.y + range) / gridSize) * gridSize);

            for (let x = startX; x <= endX; x += gridSize) {
                for (let y = startY; y <= endY; y += gridSize) {
                    const dist = Math.hypot(x - mouse.x, y - mouse.y);
                    if (dist < range) {
                        const alpha = (1 - dist / range) * 0.3;
                        ctx.strokeStyle = `rgba(204, 255, 0, ${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(mouse.x, mouse.y);
                        ctx.lineTo(x, y);
                        ctx.stroke();

                        ctx.fillStyle = `rgba(204, 255, 0, ${alpha * 1.2})`;
                        ctx.beginPath();
                        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            // Click Shockwaves
            shockwaves.forEach((wave, index) => {
                wave.radius += 2.5;
                wave.alpha -= 0.025;

                if (wave.alpha <= 0) {
                    shockwaves.splice(index, 1);
                } else {
                    ctx.strokeStyle = `rgba(204, 255, 0, ${wave.alpha})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
                    ctx.stroke();
                }
            });

            // Pointer Crosshair
            const closeX = Math.round(mouse.x / gridSize) * gridSize;
            const closeY = Math.round(mouse.y / gridSize) * gridSize;

            ctx.strokeStyle = "rgba(204, 255, 0, 0.7)";
            ctx.lineWidth = 1.2;
            const size = 6;

            ctx.beginPath();
            ctx.moveTo(closeX - size, closeY);
            ctx.lineTo(closeX + size, closeY);
            ctx.moveTo(closeX, closeY - size);
            ctx.lineTo(closeX, closeY + size);
            ctx.stroke();

            // 6. Coordinates
            ctx.font = "10px 'JetBrains Mono', monospace";
            ctx.fillStyle = "rgba(204, 255, 0, 0.5)";
            ctx.fillText(
                `LOC: [${Math.round(mouse.x)}, ${Math.round(mouse.y)}]`,
                closeX + 10,
                closeY - 6
            );

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", handleResize);
            parent.removeEventListener("mousemove", handleMouseMove);
            parent.removeEventListener("click", handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="about" className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden flex flex-col justify-center">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none z-0"
            />
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </section>
    );
}