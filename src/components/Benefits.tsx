import React from "react";
import { motion } from "framer-motion";
import { Vote, FileCode, MessageSquare } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Vote className="h-8 w-8 text-primary-light" />,
      title: "Equal Voting Power",
      description:
        "Every token holder gets equal voting rights, ensuring fair platform changes.",
    },
    {
      icon: <FileCode className="h-8 w-8 text-primary-light" />,
      title: "Proposal Creation",
      description:
        "Create and vote on proposals to shape the future of the platform.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary-light" />,
      title: "Community Access",
      description:
        "Exclusive access to private channels and early feature releases.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
            Benefits of Holding FXF
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800 rounded-xl p-6 text-center border-hover"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
