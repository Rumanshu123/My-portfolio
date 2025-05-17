"use client"

type Props = {
  title: string
  company: string
  location: string
  dateStarted: string
  dateEnded: string
  companyLogo?: string
  technologies: string[]
  points: string[]
}

export default function ExperienceCard({
  title,
  company,
  location,
  dateStarted,
  dateEnded,
  companyLogo,
  technologies,
  points,
}: Props) {
  return (
    <article className="flex drop-shadow-xl flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-[280px] sm:w-[350px] md:w-[600px] xl:w-[700px] snap-center bg-card bg-gradient-to-tr from-card to-primary/5 p-4 md:p-6 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 h-full overflow-hidden">
      <div className="flex flex-col h-full w-full">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 bg-white dark:bg-gray-800 p-1">
            <img
              src={companyLogo || "/images/bithub-logo.png"}
              alt={company}
              className="w-full h-full object-contain rounded-full"
            />
          </div>

          <div>
            <h4 className="text-base md:text-2xl font-light text-card-foreground">{title}</h4>
            <p className="font-bold text-sm md:text-xl mt-1 text-primary">{company}</p>
            <p className="text-xs md:text-sm text-muted-foreground">{location}</p>
          </div>
        </div>

        <p className="uppercase py-2 md:py-3 text-muted-foreground text-xs md:text-base">
          {dateStarted} - {dateEnded}
        </p>

        <div className="flex flex-wrap gap-2 my-2">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-white dark:bg-gray-800 p-1"
            >
              <img
                src={tech || "/placeholder.svg"}
                alt={`Technology ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        <ul className="list-disc text-card-foreground space-y-1 md:space-y-2 pr-2 text-justify ml-0 text-xs md:text-base pl-5 overflow-y-auto flex-grow scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-teal-600/80 mt-2">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
