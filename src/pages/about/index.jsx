import Hero from "../../components/Hero";
import AboutUS from "../../assets/HeyAIZ.png"
import CoreValues from "../../components/CoreValue";
import FAQ from "../../components/FAQ";
import AnimatedGridBackground from "../../components/AnimatedGridBackground";

function About() {
    return (
        <div className="w-full overflow-x-hidden">
            <Hero
                HeroImg={AboutUS}
                HeroHeading="Who we are? Your technology partner!"
                HeroText="We provide innovative solutions to help businesses thrive in the digital age."
                buttonHeading="Contact Us"
            />

            <div className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto">
                        <h3 className="text-4xl font-semibold mb-4 text-primary">Our Company Overview</h3>
                        <p className="text-gray-500 text-lg mb-12">
                            Pioneering the Future of Intelligent Automation
                        </p>

                        <div className="text-left space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                At <strong>AIZero</strong>, we are on a mission to revolutionize the way businesses operate by harnessing the power of Artificial Intelligence.
                                As a passionate team of innovators, engineers, and problem-solvers, we build intelligent systems that help organizations automate workflows,
                                enhance decision-making, and accelerate digital transformation.
                            </p>
                            <p>
                                Founded with a startup spirit and a bold vision, AIZero is committed to delivering reliable, scalable, and user-friendly AI solutions
                                that adapt to your unique business needs. We believe technology should empower, not complicate — and that’s exactly what we aim to deliver.
                            </p>
                            <p>
                                Whether you're a growing startup or an established enterprise, AIZero is your partner in building a smarter tomorrow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="relative py-20 bg-blue-50 overflow-hidden">
                <AnimatedGridBackground />
                <div className="container mx-auto px-4 relative z-10">
                    <h3 className="text-4xl font-semibold mb-4 text-center text-primary">Our Core Values</h3>
                    <p className="text-gray-500 text-lg text-center max-w-3xl mx-auto mb-12">
                        AIZero adheres to a set of core values in all business dealings. All our employees are expected to take ownership of these values and incorporate them into their everyday activities.
                    </p>
                    <CoreValues />
                </div>
            </div>
            <div className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h3 className="text-4xl font-semibold text-center mb-4 text-primary">Frequently Asked Questions</h3>
                    <p className="text-gray-500 text-lg text-center max-w-2xl mx-auto mb-12">Got questions? We’ve got answers to help you understand how AIZero empowers your business.</p>
                    <FAQ />
                </div>
            </div>
        </div>
    );
}

export default About;