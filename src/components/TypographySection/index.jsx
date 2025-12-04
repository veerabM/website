import React from 'react';
import { motion } from 'framer-motion';

const TypographySection = () => {
    return (
        <section className="py-32 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden relative flex items-center justify-center min-h-[70vh]">
            {/* Sophisticated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_3px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,.02)_2px,transparent_2px)] bg-[size:72px_72px]"></div>
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[150px] animate-pulse delay-1000"></div>
                {/* Subtle Vignette */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-950/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                {/* Main Typography */}
                <div className="text-center space-y-4">
                    {["Innovate.", "Automate.", "Scale."].map((word, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className="relative"
                        >
                            <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tight leading-none">
                                {/* Layered Text Effect for Depth */}
                                <span className="relative inline-block">
                                    {/* Shadow Layer */}
                                    <span className="absolute top-1 left-1 text-transparent bg-clip-text bg-linear-to-br from-blue-600/40 to-violet-600/40 blur-sm">
                                        {word}
                                    </span>
                                    {/* Main Layer */}
                                    <span className="relative text-transparent bg-clip-text bg-linear-to-br bg-white">
                                        {word}
                                    </span>
                                    {/* Highlight Accent */}
                                    <span className="absolute inset-0 text-transparent bg-clip-text bg-linear-to-br from-blue-400/30 via-transparent to-violet-400/30 mix-blend-overlay">
                                        {word}
                                    </span>
                                </span>
                            </h1>

                            {/* Animated Underline */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.15 + 0.5,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className="h-1 w-32 mx-auto mt-2 bg-linear-to-r from-orange-500 via-amber-500 to-orange-500 rounded-full origin-left"

                            ></motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        We’re building <span className="text-amber-500 font-medium">modern tools</span> that{' '}
                        <span className="text-white font-medium">streamline workflows,</span>{' '}
                        <span className="text-white font-medium">improve efficiency</span> and{' '}
                        <span className="text-white font-medium">help businesses grow with confidence.</span>
                    </p>
                </motion.div>

                {/* Trust Indicators  */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-16 flex flex-wrap justify-center items-center gap-8 text-slate-500 text-sm"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                        <span>Customer-Focused Engineering</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                        <span>Dependable Performance</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                        <span>Designed for Real-World Scale</span>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default TypographySection;