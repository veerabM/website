import Hero from "../../components/Hero"
import HeroImage from "../../assets/hero-img.png";
import AIZlogo from "../../assets/AIZLogo.png"
import ProfileImage from "../../assets/profile.jpg";
import Stats from "../../components/Stats";
import Carousel from "../../components/Carousel";
import { motion } from "framer-motion";
import AnimatedGridBackground from "../../components/AnimatedGridBackground";
import TypographySection from "../../components/TypographySection";
// import MasonryGrid from "../../components/MasonryGrid";

function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero
        HeroImg={AIZlogo}
        HeroHeading="Empowering Businesses with Technology!"
        HeroText="We provide innovative solutions to help businesses thrive in the digital age."
        buttonHeading="Contact Us"
      />

      <Stats />

      <Carousel />

      <TypographySection />

      {/* <MasonryGrid /> */}

      {/* Why AIZero Section */}
      <div className="py-24 md:pt-36 bg-white">
        <div className="container w-full md:w-4/5 mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <h3 className="text-4xl font-bold text-primary mb-6">Why AIZero?</h3>
              <p className="text-text-muted text-lg leading-relaxed mb-6 text-justify">
                We are a fast-growing team of highly skilled, passionate IT professionals with excellence in service delivery, enabling faster innovation and higher productivity.
              </p>
              <p className="text-text-muted text-lg leading-relaxed mb-8 text-justify">
                Our services are dynamic, scalable, resilient, and responsive. Our highly collaborative approach aligns our services with your business goals.
              </p>

              <button
                onClick={() => window.location.href = '/#/about'}
                className="btn-blue"
              >
                Explore About Us
              </button>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ProfileImage}
                  alt="Why AIZero Team"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Goal Section */}
      <section className="relative pb-20 md:pt-32 md:pb-32 overflow-hidden bg-bg-subtle">
        {/* Animated Grid Background */}
        <AnimatedGridBackground />

        <div className="relative">
          <div className="container w-full md:w-4/5 mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
              <div className="w-full md:w-1/2 md:px-0">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Goal</h3>
                <p className="text-lg text-text-muted leading-relaxed mb-6">
                  To be the catalyst for digital evolution, empowering businesses to reach new heights of efficiency and innovation.
                </p>
                <ul className="space-y-4">
                  {[
                    "Drive sustainable growth through technology",
                    "Foster a culture of continuous innovation",
                    "Deliver measurable value to our partners",
                    "Build long-lasting, trust-based relationships"
                  ].map((goal, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative p-8 glass-card rounded-2xl border border-white/20">
                  {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div> */}
                  {/* <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div> */}
                  <h4 className="text-2xl font-bold text-primary mb-4 relative z-10">Vision 2030</h4>
                  <p className="text-gray-600 relative z-10">
                    By 2030, we aim to be a global leader in AI-driven enterprise solutions, helping over 1000+ businesses transform their operations and achieve carbon neutrality through smart, efficient technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;