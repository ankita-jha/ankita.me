import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
       

        <h2 className=' text-white text-[20px] font-bold'>
          {title}
        </h2>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHO AM I & WHAT CAN YOU EXPECT HERE!!!!
        </p>
        <h2 className={styles.sectionHeadText}>I am Ankita - a Software Developer & Tech Enthusiast. Welcome to my Digital Library!</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
Solving problems makes me tick, and I enjoy impacting products and providing value to customers. During college, I augmented my core CS education with courses in Computer Systems, Machine Learning, Artificial Intelligence, Security & Privacy, and Entrepreneurship. I also interned at Amazon Robotics, worked as Software Engineer at Infosys, and worked as a Teaching Assistant for an NEU Software Engineering design course. Now, I am looking for full time Software Engineering Opportunties. I enjoy engaging in and being challenged with projects that require me to work outside my comfort zone and come up with innovative solutions. The urge for better simplicity challenging the complexity of today is what drives me.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
