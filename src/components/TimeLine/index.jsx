import AnimatedGridBackground from "../AnimatedGridBackground";

const approachSteps = [
  {
    title: "1. Understand",
    description: "We start by deeply understanding your business, challenges, and goals to align our AI solutions with your unique needs.",
  },
  {
    title: "2. Ideate",
    description: "Our team collaborates to brainstorm and architect the most efficient and innovative approach tailored for your business.",
  },
  {
    title: "3. Develop",
    description: "We bring the solution to life using cutting-edge technologies with a focus on scalability, security, and performance.",
  },
  {
    title: "4. Deliver",
    description: "We deploy, test, and deliver a solution that is production-ready, with continuous support and improvements as your needs evolve.",
  },
];

function Timeline() {
  return (
    <section className="relative py-12 px-4 bg-blue-50 overflow-hidden">
      <AnimatedGridBackground />
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-semibold text-center mb-4 text-primary">Our Approach</h2>
        <p className="text-gray-500 text-lg text-center max-w-2xl mx-auto mb-16">
          A strategic and transparent approach to help your business grow with powerful AI solutions.
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {approachSteps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Content Side */}
                <div className="w-full md:w-1/2 px-6">
                  <div className={`bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 text-center md:text-left hover:shadow-md transition-all duration-1000 group hover:bg-blue-600 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <h5 className="text-xl font-bold text-primary mb-2 group-hover:text-white transition-colors duration-300">{step.title}</h5>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-blue-100 transition-colors duration-300">{step.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-sm hidden md:block"></div>

                {/* Empty Side for spacing */}
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
