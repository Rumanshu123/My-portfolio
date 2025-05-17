"use client"

import { motion } from "framer-motion"

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center z-0"
    >
      <div className="absolute border border-gray-400 dark:border-gray-600 opacity-30 rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-gray-400 dark:border-gray-600 opacity-30 rounded-full h-[150px] w-[150px] md:h-[300px] md:w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-gray-400 dark:border-gray-600 opacity-30 rounded-full h-[250px] w-[250px] md:h-[500px] md:w-[500px] mt-52 animate-ping" />
      <div className="absolute border border-primary opacity-20 h-[270px] w-[270px] md:h-[510px] md:w-[510px] lg:h-[650px] lg:w-[650px] animate-pulse mt-52 rounded-full" />
      <div className="absolute border border-gray-400 dark:border-gray-600 opacity-30 rounded-full h-[400px] w-[400px] md:h-[800px] md:w-[800px] mt-52 animate-ping" />
    </motion.div>
  )
}
