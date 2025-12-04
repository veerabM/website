import React from 'react';
import { motion } from 'framer-motion';
import cloudComputing from "../../assets/cloudcomputing.jpg";
import managedIT from "../../assets/carousel3.jpg";
import Advisory from "../../assets/carousel2.jpg";
import ProfileImage from "../../assets/profile.jpg";

const projects = [
    { id: 1, title: "Cloud Migration", category: "Infrastructure", image: cloudComputing, height: "h-64" },
    { id: 2, title: "AI Analytics", category: "Data Science", image: managedIT, height: "h-96" },
    { id: 3, title: "Cyber Security", category: "Security", image: Advisory, height: "h-72" },
    { id: 4, title: "Mobile App", category: "Development", image: ProfileImage, height: "h-80" },
    { id: 5, title: "IoT Platform", category: "Innovation", image: cloudComputing, height: "h-64" },
    { id: 6, title: "Blockchain", category: "FinTech", image: managedIT, height: "h-72" },
];

const MasonryGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container w-full md:w-4/5 mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Our Recent Projects</h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        Explore how we've helped businesses transform and succeed.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-accent text-sm font-semibold tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.category}
                                </span>
                                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MasonryGrid;
