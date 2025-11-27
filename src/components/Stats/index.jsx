import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { FaSmile, FaProjectDiagram, FaClock, FaUserFriends } from "react-icons/fa";
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

  return <span>{count}+</span>;
};

const Stats = () => {
  const statsData = [
    { label: "Happy Clients", value: 232, icon: <FaSmile /> },
    { label: "Projects", value: 521, icon: <FaProjectDiagram /> },
    { label: "Hours Of Support", value: 1453, icon: <FaClock /> },
    { label: "Hard Workers", value: 32, icon: <FaUserFriends /> },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-blue-50 text-gray-800">
      {/* Animated Grid Background */}
      {/* Animated Grid Background */}
      <AnimatedGridBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-10 max-w-5xl mx-auto">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm border border-gray-100 p-12 flex flex-col items-center justify-center text-center shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:bg-blue-600 transition-all duration-1000 group"
            >
              <div className="text-3xl md:text-5xl mb-6 text-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300">
                <Counter from={0} to={stat.value} duration={2.5} />
              </h3>
              <p className="text-xl md:text-2xl text-gray-600 font-medium uppercase tracking-widest group-hover:text-blue-100 transition-colors duration-300">
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
