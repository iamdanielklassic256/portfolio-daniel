import { BallCanvas } from "./canvas"
import { technologies } from "../constants"
import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"

const Tech = () => {
  return (
    <motion.div 
      className="flex flex-row flex-wrap justify-center gap-10 "
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{once: true, amount: 0.25}}
    >
      {technologies?.map((technology, index) => (
        <div className="w-28 h-28 " key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </motion.div>
  )
}

export default Tech