import { useState, useEffect } from 'react';
import Card from "../../components/Card";
import Hero from "../../components/Hero";
import Applications from "../../assets/s1.jpg";
import Timeline from "../../components/TimeLine";
import serviceimage from "../../assets/service.png";
import Loader from "../../components/Loader";

function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('/api/Service');
                if (!response.ok) {
                    throw new Error('Failed to fetch services');
                }
                const data = await response.json();
                setServices(data.sort((a, b) => a.displayOrder - b.displayOrder));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    if (loading) return <div className='py-20'> <Loader /></div>;
    if (error) return <div className="text-center py-20 text-red-600">Error: {error}</div>;

    return (
        <div className="w-full overflow-x-hidden">
            <Hero
                HeroImg={serviceimage}
                HeroHeading="Technology Services and Solutions"
                HeroText="We provide innovative solutions to help businesses thrive in the digital age."
                buttonHeading="Contact Us"
            />

            <div className="py-20">
                <div className="container mx-auto px-4">
                    <h3 className="text-4xl font-semibold text-center mb-4 text-primary">Solutions You Can Trust</h3>
                    <p className="text-gray-500 text-lg text-center max-w-2xl mx-auto mb-16">Trusted solutions for seamless business transformation</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((item) => (
                            <Card
                                key={item.id}
                                CardImg={Applications}
                                CardTitle={item.title}
                                CardText={item.shortDescription}
                                id={item.id}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-20 bg-transparent">
                <Timeline />
            </div>
        </div>
    );
}

export default Services;