"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, BookOpen, Users, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-0 top-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <polygon points="0,0 100,0 100,20 0,50" fill="url(#grad1)" />
          <polygon points="0,80 100,50 100,100 0,100" fill="url(#grad1)" />
        </svg>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {[BookOpen, Users, Trophy].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-white/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.5,
            }}
          >
            <Icon size={48} />
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Left Column: Text Content */}
        <div className="text-center lg:mt-0 mt-20 lg:text-left lg:w-1/2 mb-12 lg:mb-0">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Empower Your Learning Journey
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore top courses taught by industry experts. Learn anywhere,
            anytime.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="flex justify-center lg:justify-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-full max-w-md">
              <Input
                type="text"
                placeholder="Search for courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full text-gray-900 rounded-full"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold bg-white text-blue-600 hover:bg-blue-50 rounded-full"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold text-white border-white hover:bg-white/10 rounded-full"
            >
              Browse Courses
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="mt-12 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-sm mb-2">
              Trusted by over 100,000 learners worldwide
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              {["Google", "Microsoft", "Amazon", "Meta"].map((company) => (
                <span key={company} className="text-xs font-semibold">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Illustration */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <svg
            className="w-full h-auto"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background circle */}
            <circle cx="250" cy="250" r="250" fill="white" fillOpacity="0.1" />

            {/* 3D Book */}
            <g filter="url(#shadow)">
              <path d="M150 150 L350 130 L350 370 L150 350 Z" fill="#4A90E2" />
              <path d="M150 150 L350 130 L350 140 L150 160 Z" fill="#5A9FF2" />
              <path d="M350 130 L380 150 L380 390 L350 370 Z" fill="#3A80D2" />
              <path d="M150 350 L180 370 L380 390 L350 370 Z" fill="#3A80D2" />
            </g>

            {/* Book pages */}
            <path
              d="M165 165 L335 147 L335 353 L165 335 Z"
              fill="white"
              fillOpacity="0.7"
            />

            {/* Floating elements */}
            <circle cx="120" cy="200" r="20" fill="#FFD700" opacity="0.8">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 0 -10; 0 0"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <rect
              x="400"
              y="220"
              width="40"
              height="40"
              fill="#FF6B6B"
              opacity="0.8"
              rx="8"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 420 240; 360 420 240"
                dur="10s"
                repeatCount="indefinite"
              />
            </rect>
            <polygon
              points="180,400 220,450 140,450"
              fill="#50C878"
              opacity="0.8"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; -10 -10; 0 0"
                dur="4s"
                repeatCount="indefinite"
              />
            </polygon>

            {/* Graduation cap */}
            <path d="M250 80 L300 110 L250 140 L200 110 Z" fill="#FFD700" />
            <path
              d="M250 140 L250 170 M300 110 L300 150 L310 160"
              stroke="#FFD700"
              strokeWidth="4"
            />

            {/* Shadow filter */}
            <defs>
              <filter
                id="shadow"
                x="0"
                y="0"
                width="500"
                height="500"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
