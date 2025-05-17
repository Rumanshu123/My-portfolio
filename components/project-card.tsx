"use client"

import { motion } from "framer-motion"

type Props = {
  title: string
  company?: string
  date: string
  image: string
  summary: string
  technologies: string[]
}

export default function ProjectCard({ title, company, date, image, summary, technologies }: Props) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 md:space-y-5 items-center justify-center p-5 md:p-20 h-screen">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative w-full max-w-xs md:max-w-lg lg:max-w-xl rounded-xl overflow-hidden shadow-xl group"
      >
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-black/80 backdrop-blur-sm flex items-center">
          <h3 className="text-white text-lg md:text-2xl font-bold p-4 w-full drop-shadow-lg">{title}</h3>
        </div>
      </motion.div>

      <div className="space-y-3 md:space-y-5 px-0 md:px-10 max-w-6xl">
        {company && <p className="text-center text-primary font-medium text-sm md:text-base">{company}</p>}

        <p className="text-center text-muted-foreground text-sm md:text-base">{date}</p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 md:px-3 py-1 bg-secondary rounded-full text-xs md:text-sm text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-xs md:text-base lg:text-lg text-justify max-h-32 md:max-h-none overflow-y-auto md:overflow-visible scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-teal-600/80 pr-1">
          {summary}
        </p>
      </div>
    </div>
  )
}
