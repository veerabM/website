import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate, Link } from 'react-router-dom';

const Footer = ({ hidebutto = false }) => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await api.getServices();
        setServices(data.sort((a, b) => a.displayOrder - b.displayOrder));
      } catch (error) {
        console.error("Failed to fetch services", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <>
      {/* Strap Section - Modern Gradient */}
      <div className="w-full bg-linear-to-r from-primary to-blue-700 text-white py-20 relative overflow-hidden">

        <div className="container w-full md:w-4/5 mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="text-center md:text-left max-w-2xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Ready to accelerate your growth?
            </h4>
            <p className="text-blue-100 text-lg font-light">
              Schedule a free consultation with our experts today.
            </p>
          </div>
          {!hidebutto && (
            <button
              type="button"
              className="btn-orange whitespace-nowrap"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          )}
        </div>
      </div>

      {/* Main Footer - Clean & Spacious */}
      <footer className="bg-gray-50 pt-20 pb-4 border-t border-gray-200">
        <div className="container w-full md:w-4/5 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Column 1: Company Info */}
            <div>
              <h5 className="text-2xl font-bold text-primary mb-6">Aizero</h5>
              <p className="text-gray-600 leading-relaxed mb-6">
                Empowering businesses with intelligent technology solutions. We build the future, today.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
                  <FaFacebookSquare size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110">
                  <FaInstagramSquare size={24} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors transform hover:scale-110">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                  <FaSquareXTwitter size={24} />
                </a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h5 className="text-lg font-bold text-gray-800 mb-6">Services</h5>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link to={`/services/servicePages/${service.id}`} className="text-gray-600 hover:text-primary transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h5 className="text-lg font-bold text-gray-800 mb-6">Contact Us</h5>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Main Office</p>
                  <p className="text-gray-700">24, IT Layout, Bellandur<br />Bengalore-02, India</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Branch Office</p>
                  <p className="text-gray-700">525 New Jersey-73, STE 104<br />MARLTON, New Jersey-08053</p>
                </div>
              </div>
            </div>

            {/* Column 4: Email / Support */}
            <div>
              <h5 className="text-lg font-bold text-gray-800 mb-6">Get in Touch</h5>
              <p className="text-gray-600 mb-4">
                Have questions? We're here to help you find the right solutions.
              </p>
              <a
                href="mailto:aizero@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-primary font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 w-full md:w-auto"
              >
                aizero@gmail.com
              </a>
            </div>

          </div>

          <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2025 AIZero. All Rights Reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
