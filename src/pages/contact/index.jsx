import React, { useState } from 'react';
import Hero from '../../components/Hero';
import Globe from "../../assets/globe.png";
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { api } from '../../services/api';
import { validateContactForm } from '../../utils/validation';
import { toast } from 'react-toastify';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ loading: false });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        // Map form IDs to state keys
        const key = id === 'formName' ? 'name' :
            id === 'formEmail' ? 'email' :
                id === 'formSubject' ? 'subject' :
                    id === 'formMessage' ? 'message' : id;

        setFormData(prev => ({ ...prev, [key]: value }));
        // Clear error when user starts typing
        if (errors[key]) {
            setErrors(prev => ({ ...prev, [key]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { isValid, errors: validationErrors } = validateContactForm(formData);

        if (!isValid) {
            setErrors(validationErrors);
            return;
        }

        setStatus({ loading: true });

        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                body: formData.message
            };

            await api.postMessage(payload);

            toast.success('Message sent successfully! We will get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setErrors({});
        } catch (err) {
            console.error(err);
            toast.error(err.message || 'Failed to send message. Please try again.');
        } finally {
            setStatus({ loading: false });
        }
    };

    return (
        <div className="w-full overflow-x-hidden bg-bg-subtle relative">
            <Hero
                HeroImg={Globe}
                HeroHeading="Contact Us"
                HeroText="We are here to assist you with any inquiries or support you may need. Your satisfaction is our priority."
            />

            <section className="relative py-24 md:py-32" id="contact">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">

                        {/* Contact Info Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-5/12"
                        >
                            <div className="sticky top-32">
                                <h2 className="text-4xl font-bold text-primary mb-6">Get In Touch</h2>
                                <p className="text-lg text-text-muted mb-12 leading-relaxed">
                                    Ready to transform your business? Connect with our experts for a consultation tailored to your specific needs.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-primary mb-1">Visit Us</h4>
                                            <p className="text-text-muted">123 Innovation Drive, Tech Valley, CA 94043</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                            <FaPhoneAlt />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-primary mb-1">Call Us</h4>
                                            <p className="text-text-muted">+1 (555) 123-4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                            <FaEnvelope />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-primary mb-1">Email Us</h4>
                                            <p className="text-text-muted">contact@aizero.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full lg:w-7/12"
                        >
                            <div className="glass-card p-8 md:p-12">
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="formName"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`peer w-full px-0 py-3 border-b-2 ${errors.name ? 'border-red-500' : 'border-slate-200'} bg-transparent text-primary placeholder-transparent focus:outline-none focus:border-accent transition-colors`}
                                                placeholder="Full Name"
                                                required
                                            />
                                            <label
                                                htmlFor="formName"
                                                className="absolute left-0 -top-3.5 text-sm text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-accent"
                                            >
                                                Full Name
                                            </label>
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        </div>

                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="formEmail"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`peer w-full px-0 py-3 border-b-2 ${errors.email ? 'border-red-500' : 'border-slate-200'} bg-transparent text-primary placeholder-transparent focus:outline-none focus:border-accent transition-colors`}
                                                placeholder="Email Address"
                                                required
                                            />
                                            <label
                                                htmlFor="formEmail"
                                                className="absolute left-0 -top-3.5 text-sm text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-accent"
                                            >
                                                Email Address
                                            </label>
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="formSubject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={`peer w-full px-0 py-3 border-b-2 ${errors.subject ? 'border-red-500' : 'border-slate-200'} bg-transparent text-primary placeholder-transparent focus:outline-none focus:border-accent transition-colors`}
                                            placeholder="Subject"
                                            required
                                        />
                                        <label
                                            htmlFor="formSubject"
                                            className="absolute left-0 -top-3.5 text-sm text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-accent"
                                        >
                                            Subject
                                        </label>
                                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                                    </div>

                                    <div className="relative">
                                        <textarea
                                            id="formMessage"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`peer w-full px-0 py-3 border-b-2 ${errors.message ? 'border-red-500' : 'border-slate-200'} bg-transparent text-primary placeholder-transparent focus:outline-none focus:border-accent transition-colors resize-none`}
                                            placeholder="Message"
                                            required
                                        />
                                        <label
                                            htmlFor="formMessage"
                                            className="absolute left-0 -top-3.5 text-sm text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-accent"
                                        >
                                            Message
                                        </label>
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={status.loading}
                                            className="w-full md:w-auto btn-orange disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {status.loading ? (
                                                <>
                                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                'Send Message'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;