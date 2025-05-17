"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Mail, ArrowUp, Linkedin } from "lucide-react"

import BackgroundCircles from "@/components/background-circles"
import Skill from "@/components/skill"
import ExperienceCard from "@/components/experience-card"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const [text, setText] = useState("")
  const fullText = "Machine Learning Engineer"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText[index])
        setIndex((prevIndex) => prevIndex + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  return (
    <div className="bg-background text-foreground h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-teal-600/80">
      <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center bg-background/80 backdrop-blur-sm">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
        >
          <Link
            href="https://github.com/Rumanshu123"
            target="_blank"
            className="p-2 rounded-full hover:bg-secondary active:scale-95 transition-all"
          >
            <Github className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="p-2 rounded-full hover:bg-secondary active:scale-95 transition-all"
          >
            <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground hover:text-foreground" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex items-center gap-2"
        >
          <ThemeToggle />
          <Link
            href="#contact"
            className="flex items-center text-muted-foreground cursor-pointer hover:text-foreground transition-colors active:scale-95"
          >
            <Mail className="h-5 w-5 md:h-6 md:w-6 mr-1 md:mr-2" />
            <p className="uppercase hidden md:inline-flex text-sm">Get in touch</p>
          </Link>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="snap-start">
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
          <BackgroundCircles />

          <div className="relative z-10">
            <Image
              src="/images/rumanshu-profile.png"
              alt="Rumanshu Chandekar"
              width={160}
              height={160}
              className="relative rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 mx-auto object-cover border-2 border-primary"
            />

            <div className="z-20 mt-5">
              <h2 className="text-xs md:text-sm uppercase text-muted-foreground pb-2 tracking-[8px] md:tracking-[15px]">
                Machine Learning Engineer
              </h2>
              <h1 className="text-xl md:text-4xl lg:text-6xl font-semibold px-5 md:px-10">
                <span className="typewriter inline-block">Hi, I'm Rumanshu</span>
              </h1>
              <p className="text-xs md:text-base text-muted-foreground max-w-xl mx-auto mt-2 md:mt-4 px-4">
                Developing and deploying end-to-end ML solutions with a focus on business impact
              </p>

              <div className="pt-3 md:pt-5 flex flex-wrap justify-center gap-2 md:gap-3">
                <Link href="#about">
                  <Button variant="outline" className="heroButton text-xs md:text-sm px-3 md:px-6 py-1.5 md:py-2">
                    About
                  </Button>
                </Link>
                <Link href="#experience">
                  <Button variant="outline" className="heroButton text-xs md:text-sm px-3 md:px-6 py-1.5 md:py-2">
                    Experience
                  </Button>
                </Link>
                <Link href="#skills">
                  <Button variant="outline" className="heroButton text-xs md:text-sm px-3 md:px-6 py-1.5 md:py-2">
                    Skills
                  </Button>
                </Link>
                <Link href="#projects">
                  <Button variant="outline" className="heroButton text-xs md:text-sm px-3 md:px-6 py-1.5 md:py-2">
                    Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="snap-center">
        <div className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-center md:justify-evenly mx-auto items-center py-20 md:py-0">
          <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-muted-foreground text-lg md:text-2xl">
            About
          </h3>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-16 md:mt-0">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-40 h-40 md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
            >
              <Image
                src="/images/rumanshu-about.png"
                alt="Rumanshu Chandekar"
                width={400}
                height={400}
                className="rounded-lg object-cover shadow-lg w-full h-full"
              />
            </motion.div>

            <div className="space-y-4 md:space-y-8 px-4 md:px-0 max-w-xl">
              <h4 className="text-lg md:text-3xl font-semibold">
                Here's my <span className="underline decoration-primary/50">background</span>
              </h4>
              <p className="text-sm md:text-base lg:text-lg text-justify">
                Machine Learning Engineer with 2+ years of experience developing and deploying end-to-end ML solutions.
                Specialized in optimizing model performance through advanced feature engineering and hyperparameter
                tuning. Proven track record of reducing operational costs and deployment time while increasing
                prediction accuracy across production environments. Skilled in AWS cloud services, MLOps, and computer
                vision applications with a focus on business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="snap-center">
        <div className="min-h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-4 md:px-10 justify-center mx-auto items-center py-20 md:py-0">
          <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-muted-foreground text-lg md:text-2xl">
            Experience
          </h3>

          <div className="w-full h-[70vh] md:h-[60vh] text-left pb-5 md:pb-10 flex space-x-5 overflow-x-scroll p-4 md:p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-teal-600/80 mt-16 md:mt-0">
            <ExperienceCard
              title="Machine Learning Engineer"
              company="BIT HUB TECHNOLOGY"
              location="Pune, Maharashtra"
              dateStarted="December 2022"
              dateEnded="Present"
              companyLogo="/images/bithub-logo.png"
              technologies={[
                "/images/python-icon.png",
                "/images/pytorch-icon.png",
                "/images/tensorflow-icon.png",
                "/images/sklearn-icon.png",
                "/images/xgboost-icon.png",
              ]}
              points={[
                "Architected end-to-end ML pipelines for data preprocessing, feature engineering, and model evaluation, driving 15% improvement in business metrics",
                "Implemented Optuna for hyperparameter optimization, systematically exploring model configurations and achieving 22% performance gain in production models",
                "Optimized dimensionality reduction via PCA and implemented outlier detection using Isolation Forest, boosting model accuracy by 15% and reducing training time by 20%",
                "Scaled deployments on AWS using SageMaker and Lambda with MLflow integration, decreasing deployment time by 40% through containerized applications",
                "Spearheaded 20+ research experiments validating hypotheses with classical ML techniques, achieving 12% increase in model precision and recall",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="snap-start">
        <div className="min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center py-20 md:py-0">
          <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-muted-foreground text-lg md:text-2xl">
            Skills
          </h3>

          <h3 className="absolute top-36 uppercase tracking-[3px] text-muted-foreground text-xs md:text-sm">
            Hover over a skill for proficiency
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-5 mt-20 md:mt-0 px-3 md:px-0">
            <Skill src="/images/python-icon.png" name="Python" progress={95} directionLeft={false} />
            <Skill src="/images/pytorch-icon.png" name="PyTorch" progress={90} directionLeft={false} />
            <Skill src="/images/tensorflow-icon.png" name="TensorFlow" progress={85} directionLeft={false} />
            <Skill src="/images/sklearn-icon.png" name="Scikit-learn" progress={90} directionLeft={false} />
            <Skill src="/images/xgboost-icon.png" name="XGBoost" progress={85} directionLeft={false} />
            <Skill src="/images/optuna-icon.png" name="Optuna" progress={80} directionLeft={false} />
            <Skill src="/images/llm-icon.png" name="LLMs" progress={75} directionLeft={false} />
            <Skill src="/images/rag-icon.png" name="RAG" progress={70} directionLeft={false} />
            <Skill src="/images/mlflow-icon.png" name="MLflow" progress={85} directionLeft={true} />
            <Skill src="/images/aws-icon.png" name="AWS" progress={80} directionLeft={true} />
            <Skill src="/images/docker-icon.png" name="Docker" progress={85} directionLeft={true} />
            <Skill src="/images/kubernetes-icon.png" name="Kubernetes" progress={75} directionLeft={true} />
            <Skill src="/images/yolo-icon.png" name="YOLOv5" progress={85} directionLeft={true} />
            <Skill src="/images/opencv-icon.png" name="OpenCV" progress={80} directionLeft={true} />
            <Skill src="/images/cnn-icon.png" name="CNNs" progress={85} directionLeft={true} />
            <Skill src="/images/ab-testing-icon.png" name="A/B Testing" progress={80} directionLeft={true} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="snap-start">
        <div className="min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 py-20 md:py-0">
          <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-muted-foreground text-lg md:text-2xl z-10">
            Projects
          </h3>

          <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-teal-600/80 mt-16 md:mt-0">
            <ProjectCard
              title="Business Analytics Platform"
              company="MKULAZI HOLDING PVT LTD"
              date="Feb 2023 - Present"
              image="/images/analytics-project.png"
              summary="Delivered AI-powered analytics platform with ensemble models (XGBoost, Random Forest) and automated Optuna hyperparameter tuning, achieving 30% faster model convergence. Implemented real-time data pipelines for purchasing, sales, and production optimization, resulting in 18% reduction in operational costs and 25% improvement in inventory turnover through predictive analytics."
              technologies={["Python", "Machine Learning", "AWS", "MLflow", "Docker", "Optuna"]}
            />

            <ProjectCard
              title="Intelligent Surveillance System"
              date="Jan 2021 - May 2022"
              image="/images/cctv-surveillance.png"
              summary="Engineered a real-time street crime monitoring system detecting violence, burglary, and theft with 90% accuracy and minimal latency. System contributed to 20% reduction in crime rates and enabled 30% faster response time in monitored areas through prompt alerts and suspicious activity detection."
              technologies={["Python", "YOLOv5", "OpenCV", "Git"]}
            />

            <ProjectCard
              title="Raptor RAG (Retrieval-Augmented Generation)"
              date="Jan 2025 - Apr 2025"
              image="/images/raptor-rag-project.png"
              summary="Advanced language model system enhancing AI responses through sophisticated document retrieval, embedding, and multi-level summarization techniques."
              technologies={[
                "Natural Language Processing",
                "Vector Embeddings",
                "Clustering Algorithms",
                "LLM Integration",
                "Document Processing",
              ]}
            />
          </div>

          <div className="w-full absolute top-[30%] bg-primary/10 dark:bg-primary/5 left-0 h-[500px] -skew-y-12 z-0" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="snap-start">
        <div className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center py-20 md:py-0">
          <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-muted-foreground text-lg md:text-2xl">
            Contact
          </h3>

          <div className="flex flex-col space-y-8 w-full max-w-md mt-16 md:mt-0">
            <h4 className="text-xl md:text-3xl font-semibold text-center">
              Let's discuss your <span className="decoration-primary/50 underline">ML needs</span>
            </h4>

            <div className="space-y-4">
              <div className="flex items-center space-x-5 justify-center bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Mail className="text-primary h-6 w-6" />
                <p className="text-base md:text-lg break-all">chandekarrumanshu@gmail.com</p>
              </div>

              <div className="flex items-center space-x-5 justify-center bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Github className="text-primary h-6 w-6" />
                <a
                  href="https://github.com/Rumanshu123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg hover:text-primary transition-colors"
                >
                  github.com/Rumanshu123
                </a>
              </div>
            </div>

            <form className="flex flex-col space-y-4 w-full">
              <div className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0">
                <input name="name" placeholder="Name" className="contactInput w-full md:w-1/2" type="text" />
                <input name="email" placeholder="Email" className="contactInput w-full md:w-1/2" type="email" />
              </div>
              <input name="subject" placeholder="Subject" className="contactInput" type="text" />
              <textarea name="message" placeholder="Message" className="contactInput h-32" />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground py-3 md:py-4 px-10 rounded-lg font-bold text-base md:text-lg transition-colors active:scale-95"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="snap-start">
        <div className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center py-20 md:py-0">
          <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-muted-foreground text-lg md:text-2xl">
            Education
          </h3>

          <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10 mt-16 md:mt-0">
            <div className="bg-card p-6 md:p-10 rounded-lg shadow-md max-w-3xl">
              <h4 className="text-lg md:text-2xl font-semibold">Bachelor of Engineering, Mechanical Engineering</h4>
              <p className="text-primary font-medium mt-1">
                ST. Vincent Palloti College of Engineering and Technology (RTMNU)
              </p>
              <p className="text-muted-foreground mt-2">August 2017 - July 2022</p>
              <p className="mt-2 text-card-foreground">CGPA: 8.25</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer z-50">
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center border-0 active:scale-95 transition-all"
            >
              <ArrowUp className="h-5 w-5 text-primary-foreground" />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>
        </footer>
      </Link>
    </div>
  )
}
