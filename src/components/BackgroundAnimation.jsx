import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function BackgroundAnimation() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            className="fixed inset-0 -z-50"
            options={{
                background: {
                    color: {
                        value: "#f8fafc", // slate-50
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 1,
                            },
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#2563eb", "#06b6d4"], // brand-blue, brand-cyan
                    },
                    links: {
                        color: "#94a3b8", // slate-400
                        distance: 100, // Reduced from 150 to save calculations
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out", // 'Out' is cheaper than 'bounce'
                        },
                        random: false,
                        speed: 1, // Reduced speed
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 560,
                        limit: 600, // Hard limit to prevent freezes
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2 }, // Smaller particles look better in high density
                    },
                },
                detectRetina: false, // Disabled to prevent 4x load on high DPI screens
            }}
        />
    );
}
