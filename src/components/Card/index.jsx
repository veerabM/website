import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

function Card({ CardImg, CardTitle, CardText, id }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
    >
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10"></div>
        <img
          src={CardImg}
          alt={CardTitle}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-6 flex flex-col grow">
        <h5 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
          {CardTitle}
        </h5>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 grow line-clamp-3">
          {CardText}
        </p>

        <button
          onClick={() => navigate(`/services/servicePages/${id}`)}
          className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-accent transition-colors mt-auto"
        >
          Learn More <FaArrowRight size={12} />
        </button>
      </div>
    </motion.div>
  );
}

export default Card;