import React from "react";
import { motion } from "framer-motion";

const AnimatedGridBackground = ({ className = "" }) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <motion.div
                animate={{
                    backgroundPosition: ["0px 0px", "40px 40px"],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #081738 1px, transparent 1px), linear-gradient(to bottom, #081738 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
            <div className="absolute inset-0 bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black_100%)]" />
        </div>
    );
};

export default AnimatedGridBackground;
