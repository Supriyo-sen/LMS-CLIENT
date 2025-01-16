// src/pages/Home.jsx
import CourseCard from "@/components/common/CourseCard";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HeroSection from "@/components/Home/HeroSection";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <WhyChooseUs />

      {/* Popular Courses */}
      <section className="p-10 md:p-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 5 }).map((_, idx) => (
            <CourseCard key={idx} />
          ))}
        </div>
      </section>
      <section className="px-10 md:px-20 bg-white">
        <FeaturesSection />
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <footer className="bg-blue-500 text-white p-6 text-center">
        <p>&copy; 2025 Online Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
