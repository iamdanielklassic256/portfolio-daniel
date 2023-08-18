import { Tilt } from "react-tilt"
import { motion, stagger } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'

const ServiceCard = ({ icon, title, index }) => {
  return (
    <Tilt className=" xs:w-[250px] w-[100px">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col justify-center items-start mx-8">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0, 1, 1)} className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] flex flex-col justify-center items-start mx-8">
        I&apos;m skilled software developer with experience in Typescript and  Javsacript, and expertise in frameworks like ReactJs, Node js, Express js. I am a quick learner and collaborate closely with clients to create effecient, scalable, user-friendly solutions  that solve real world problems. Let&apos;s work together to bring your idea to life.
      </motion.p>
      <motion.div 
        className="mt-20 flex lg:flex-row flex-col flex-wrap items-center   lg:gap-24 gap-10 mx-16"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
      >
        {services?.map((service, index) => (
          <ServiceCard card key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  )
}

export default About