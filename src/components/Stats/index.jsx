import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { FaFingerprint, FaShieldAlt, FaSmileBeam, FaLightbulb } from "react-icons/fa";
import AnimatedGridBackground from "../AnimatedGridBackground";

const Counter = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration,
      onUpdate: (value) => setCount(Math.floor(value)),
    });
    return () => controls.stop();
  }, [from, to, duration]);

  return <span>{count}%</span>;
};

const Stats = () => {
  const statsData = [
    { label: "Authenticity", value: 100, icon: <FaFingerprint /> },
    { label: "Security", value: 100, icon: <FaShieldAlt /> },
    { label: "User Experienc", value: 100, icon: <FaSmileBeam /> },
    { label: "Innovation", value: 100, icon: <FaLightbulb /> },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-bg-subtle">
      {/* Animated Grid Background */}
      <AnimatedGridBackground />

      <div className="container w-full md:w-4/5 mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Driven by What Matters</h2>
          <p className="text-text-muted text-lg w-full md:w-4/5 mx-auto">
            Our focus is on trust, quality, and forward-thinking ideas—ensuring tech that works seamlessly for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 max-w-6xl mx-auto">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card p-8 flex flex-col items-center justify-center text-center group"
            >
              <div className="text-4xl md:text-5xl mb-6 text-primary/80 group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-primary group-hover:text-primary transition-colors duration-300">
                <Counter from={0} to={stat.value} duration={5} />
              </h3>
              <p className="text-sm md:text-base text-text-muted font-medium uppercase tracking-wider group-hover:text-accent transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
