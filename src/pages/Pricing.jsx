import React from "react";
import { motion } from "framer-motion";
import { HiCheck, HiOutlineArrowRight } from "react-icons/hi";

const plans = [
  {
    name: "Basic",
    price: " ₹9999 ",
    description:
      "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
    features: [
      "Fully responsive on all screens",
      "Design + Development",
      "Private communication channel",
      "1–3 days turnaround time",
    ],
    cta: "Buy Now",
  },
  {
    name: "Premium",
    price: " ₹14999",
    description:
      "Best for early-stage startups, businesses, and freelancers that need a marketing side to showcase their work and vision.",
    features: [
      "Fully responsive on all screens",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "24-hour support response time",
      "Private communication channel",
      "3–5 days turnaround time",
    ],
    cta: "Buy Now",
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description:
      "Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.",
    features: [
      "Fully responsive on all screens",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "Unlimited Revisions",
      "24-hour support response time",
      "Private communication channel",
      "Priority Development Queue",
      "Dedicated Project Manager",
    ],
    cta: "Contact Us",
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-12">
      {/* Header Section */}
      <motion.div
        className="text-center mb-16 mt-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-xl">
          Simple Pricing
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-4">Choose your perfect plan</p>

        {/* Download Services List PDF */}
        <a
          href="/services-list.pdf"
          download
          className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-2 rounded-xl transition duration-300"
        >
          📄 Download Services List
        </a>
      </motion.div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between bg-gray-800 bg-opacity-60 border border-gray-700 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div>
              <h2 className="text-3xl font-semibold text-cyan-400 mb-2">
                {plan.name}
              </h2>
              <p className="text-xl font-bold mb-4">{plan.price}</p>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <ul className="space-y-3 text-sm md:text-base mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <HiCheck className="text-cyan-400 text-xl mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-auto w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-300">
              {plan.cta} <HiOutlineArrowRight className="text-xl" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
