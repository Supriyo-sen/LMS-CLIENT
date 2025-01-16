import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "Software Developer",
    comment:
      "This platform helped me land my dream job. The courses are fantastic and up-to-date with industry standards!",
    rating: 5,
    avatar: (
      <svg
        className="w-20 h-20"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" fill="#4A90E2" />
        <circle cx="50" cy="41" r="21" fill="#FFFFFF" />
        <path
          d="M50 100C69.33 100 85.68 88.03 92.53 71.02C92.69 70.61 92.43 70.16 92 70.02C89.81 69.21 84.82 67.67 78.01 66.42C71.22 65.18 62.56 64.28 53.66 64.28C36.84 64.28 21.02 67.77 14.04 70.14C13.6 70.29 13.34 70.76 13.51 71.18C20.41 88.12 36.73 100 56 100H50Z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "Jane Smith",
    role: "UX Designer",
    comment:
      "The instructors are knowledgeable and the content is very engaging. I've learned so much in such a short time!",
    rating: 5,
    avatar: (
      <svg
        className="w-20 h-20"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" fill="#FF6B6B" />
        <circle cx="50" cy="41" r="21" fill="#FFFFFF" />
        <path
          d="M50 100C69.33 100 85.68 88.03 92.53 71.02C92.69 70.61 92.43 70.16 92 70.02C89.81 69.21 84.82 67.67 78.01 66.42C71.22 65.18 62.56 64.28 53.66 64.28C36.84 64.28 21.02 67.77 14.04 70.14C13.6 70.29 13.34 70.76 13.51 71.18C20.41 88.12 36.73 100 56 100H50Z"
          fill="#FFFFFF"
        />
        <path
          d="M44 38C44 40.2091 42.2091 42 40 42C37.7909 42 36 40.2091 36 38C36 35.7909 37.7909 34 40 34C42.2091 34 44 35.7909 44 38Z"
          fill="#FF6B6B"
        />
        <path
          d="M64 38C64 40.2091 62.2091 42 60 42C57.7909 42 56 40.2091 56 38C56 35.7909 57.7909 34 60 34C62.2091 34 64 35.7909 64 38Z"
          fill="#FF6B6B"
        />
      </svg>
    ),
  },
  {
    name: "Alice Johnson",
    role: "Data Scientist",
    comment:
      "A great learning experience! Highly recommend to anyone looking to upskill. The projects are practical and relevant.",
    rating: 5,
    avatar: (
      <svg
        className="w-20 h-20"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" fill="#50C878" />
        <circle cx="50" cy="41" r="21" fill="#FFFFFF" />
        <path
          d="M50 100C69.33 100 85.68 88.03 92.53 71.02C92.69 70.61 92.43 70.16 92 70.02C89.81 69.21 84.82 67.67 78.01 66.42C71.22 65.18 62.56 64.28 53.66 64.28C36.84 64.28 21.02 67.77 14.04 70.14C13.6 70.29 13.34 70.76 13.51 71.18C20.41 88.12 36.73 100 56 100H50Z"
          fill="#FFFFFF"
        />
        <path
          d="M40 46C40 47.1046 39.1046 48 38 48C36.8954 48 36 47.1046 36 46C36 44.8954 36.8954 44 38 44C39.1046 44 40 44.8954 40 46Z"
          fill="#50C878"
        />
        <path
          d="M64 46C64 47.1046 63.1046 48 62 48C60.8954 48 60 47.1046 60 46C60 44.8954 60.8954 44 62 44C63.1046 44 64 44.8954 64 46Z"
          fill="#50C878"
        />
        <path
          d="M50 54C53.866 54 57 50.866 57 47H43C43 50.866 46.134 54 50 54Z"
          fill="#50C878"
        />
      </svg>
    ),
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          What Our Students Say
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
              variants={itemVariants}
            >
              <div className="p-8">
                <motion.div
                  className="flex items-center justify-center mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.8, opacity: 0 }
                  }
                  transition={{ delay: index * 0.1 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <p className="text-gray-600 mb-4 text-center italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex justify-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-center">{testimonial.role}</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
