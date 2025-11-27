import { FaLightbulb, FaUsers, FaRocket, FaShieldAlt } from "react-icons/fa";


const values = [
  {
    icon: <FaLightbulb size={40} className="mb-4 text-primary" />,
    title: "Innovation",
    description:
      "We continuously explore emerging technologies to build intelligent and efficient solutions.",
  },
  {
    icon: <FaUsers size={40} className="mb-4 text-green-600" />,
    title: "Collaboration",
    description:
      "We believe in teamwork, transparency, and building together with our clients and community.",
  },
  {
    icon: <FaRocket size={40} className="mb-4 text-red-600" />,
    title: "Excellence",
    description:
      "We strive for high performance, continuous learning, and exceeding expectations.",
  },
  {
    icon: <FaShieldAlt size={40} className="mb-4 text-yellow-500" />,
    title: "Integrity",
    description:
      "We value honesty, responsibility, and doing what’s right—always.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-8 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center h-full flex flex-col items-center">
              {val.icon}
              <h5 className="text-xl font-semibold mb-3 text-gray-800">{val.title}</h5>
              <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
