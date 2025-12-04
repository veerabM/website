import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero({ HeroImg, HeroHeading, HeroText, buttonHeading }) {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[90vh] bg-primary flex items-center overflow-hidden pt-32 md:pt-20">
      {/* Background Elements for depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* <div className="absolute -top-24 -right-24 w-96  h-96 bg-accent/20 rounded-full blur-[100px]"></div> */}
        {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-primary to-transparent"></div> */}
        {/* <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div> */}
      </div>

      <div className="container w-4/5 mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-12">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full  lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold tracking-wider mb-2 mt-8 backdrop-blur-sm"
            >
              Innovate. Automate. Scale.
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {HeroHeading || "Empowering Your Digital Future"}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {HeroText || "We provide innovative solutions to help businesses thrive in the digital age."}
            </p>

            {buttonHeading && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate
                className="btn-orange md:hidden"
                onClick={() => navigate('/contact')}
              >
                {buttonHeading}
              </motion.button>
            )}
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Glow effect behind image */}
              {/* <div className="absolute inset-0 bg-white/10 blur-[60px] rounded-full transform scale-90"></div> */}
              <motion.img
                src={HeroImg}
                alt="Hero Illustration"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                }}
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Wave Separator at bottom */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20 text-bg-light">
        <svg className="block w-full h-12 md:h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
