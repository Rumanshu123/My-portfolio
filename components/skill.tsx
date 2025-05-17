"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

type Props = {
  directionLeft?: boolean
  src: string
  name: string
  progress: number
}

export default function Skill({ directionLeft, src, name, progress }: Props) {
  const { theme } = useTheme()

  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="rounded-full border-2 border-primary w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 filter group-hover:grayscale transition duration-300 ease-in-out flex items-center justify-center bg-white dark:bg-gray-800 p-1"
      >
        <div className="flex flex-col items-center justify-center">
          <img src={src || "/placeholder.svg"} alt={name} className="w-6 h-6 md:w-10 md:h-10 object-contain" />
          <p className="text-[8px] md:text-xs font-medium text-center mt-1 line-clamp-1 text-gray-800 dark:text-gray-200">
            {name}
          </p>
        </div>
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white dark:group-hover:bg-gray-800 w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-base md:text-2xl font-bold text-gray-800 dark:text-gray-200 opacity-100">{progress}%</p>
        </div>
      </div>
    </div>
  )
}
