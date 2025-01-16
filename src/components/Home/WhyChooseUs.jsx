"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GraduationCap, Clock, Award, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="w-10 h-10" />,
    title: "Expert Instructors",
    description:
      "Learn from professionals with years of experience in their fields.",
    badge: "Industry Leaders",
    color:
      "bg-gradient-to-br from-purple-500/10 to-purple-500/20 hover:from-purple-500/20 hover:to-purple-500/30",
    iconColor: "text-purple-500",
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Flexible Learning",
    description:
      "Study at your own pace with lifetime access to course materials.",
    badge: "Learn Anytime",
    color:
      "bg-gradient-to-br from-blue-500/10 to-blue-500/20 hover:from-blue-500/20 hover:to-blue-500/30",
    iconColor: "text-blue-500",
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: "Certification",
    description:
      "Earn certificates to showcase your skills and boost your career.",
    badge: "Recognized Awards",
    color:
      "bg-gradient-to-br from-emerald-500/10 to-emerald-500/20 hover:from-emerald-500/20 hover:to-emerald-500/30",
    iconColor: "text-emerald-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 py-24 px-10">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 right-0 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Us?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover why thousands of students trust us for their learning
              journey
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`relative h-full transition-all duration-300 ${feature.color}`}
              >
                <CardHeader>
                  <div className="mb-4 flex items-center space-x-2">
                    <Badge variant="secondary" className="rounded-full px-4">
                      {feature.badge}
                    </Badge>
                  </div>
                  <div className={`mb-4 ${feature.iconColor}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-medium">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
