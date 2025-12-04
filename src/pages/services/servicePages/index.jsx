import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Loader from "../../../components/Loader";

function ServiceDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await api.getServiceById(id);
        setService(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  if (loading) return <div className='py-20'><Loader /></div>;

  if (error || !service) {
    return (
      <div className="py-24 container w-full md:w-4/5 mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h2>
        <p className="text-gray-600 mb-8">{error || "The requested service could not be found."}</p>
        <button
          onClick={() => navigate('/services')}
          className="text-primary hover:underline font-medium"
        >
          ← Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Modern Hero Section */}
      <div className="relative bg-primary text-white pt-40 pb-24 overflow-hidden">
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" w-full md:w-4/5 mx-auto text-start"
          >
            {/* Breadcrumbs */}
            <div className="flex flex-wrap justify-start items-center gap-2 text-blue-200 mb-6 text-sm font-medium">
              <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
              <span>/</span>
              <button onClick={() => navigate('/services')} className="hover:text-white transition-colors">Services</button>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{service.title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light">{service.shortDescription}</p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-24 bg-white">
        <div className="container w-full md:w-4/5 mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 relative inline-block">
                Overview
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line text-justify max-w-none">
                {service.description}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default ServiceDetail;
