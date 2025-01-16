import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { BookOpen, Cloud, Award, Layout } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-red-400" />,
      title: "Stay motivated with engaging instructors",
      description:
        "Learn from industry experts who make complex topics accessible",
    },
    {
      icon: <Cloud className="h-6 w-6 text-red-400" />,
      title: "Keep up with in the latest in cloud",
      description: "Stay current with cutting-edge cloud technologies",
    },
    {
      icon: <Award className="h-6 w-6 text-red-400" />,
      title: "Get certified with 100+ certification courses",
      description: "Earn recognized certifications to advance your career",
    },
    {
      icon: <Layout className="h-6 w-6 text-red-400" />,
      title: "Build skills your way, from labs to courses",
      description: "Flexible learning paths adapted to your needs",
    },
  ];

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
      className="container mx-auto px-4 py-12 md:py-16 lg:py-20"
    >
      <motion.div
        className="grid gap-8 lg:grid-cols-2 lg:gap-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="space-y-8">
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.span
              className="text-lg font-medium text-red-400"
              variants={itemVariants}
            >
              What&apos;s New
            </motion.span>
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              variants={itemVariants}
            >
              Master the skills to drive your career
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={itemVariants}
            >
              Get certified, master modern tech skills, and level up your career
              — whether you&apos;re starting out or a seasoned pro. 95% of
              eLearning learners report our hands-on content directly helped
              their careers.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-4 transition-all hover:shadow-lg">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="rounded-lg bg-red-50 p-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div className="space-y-1">
                      <h3 className="font-medium leading-tight">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div className="relative mt-8 lg:mt-0" variants={itemVariants}>
          <div className="relative h-[600px] w-full">
            <motion.img
              src="https://dreamslms.dreamstechnologies.com/html/assets/img/join.png"
              alt="Student learning"
              className="object-contain"
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -right-4 top-4 h-12 w-12 rounded-xl bg-yellow-100 lg:-right-6"
            variants={itemVariants}
          />
          <motion.div
            className="absolute -left-4 bottom-4 h-12 w-12 rounded-xl bg-red-100 lg:-left-6"
            variants={itemVariants}
          />
          <motion.div
            className="absolute -top-4 left-1/4 h-12 w-12 rounded-xl bg-blue-100"
            variants={itemVariants}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
