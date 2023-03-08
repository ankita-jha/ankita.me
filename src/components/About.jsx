import React from "react";
import Tilt from "react-tilt";
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
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        
        I'm a software developer with a diverse skillset and a passion for creating innovative solutions. Whether it's developing a new application from scratch or improving an existing system, I enjoy the challenge of finding elegant and efficient solutions to complex problems.

My experience ranges from front-end development with HTML, CSS, and JavaScript to back-end development with languages like Java and Python. I'm comfortable working with databases and APIs, and have experience with cloud-based technologies such as AWS and Google Cloud.

One of my favorite aspects of software development is the constant learning and exploration that comes with the field. I'm always eager to explore new technologies and techniques, and am constantly looking for ways to improve my skills and stay up-to-date with the latest trends.

Outside of work, I enjoy hiking and photography. I find that getting out into nature helps me clear my mind and approach problems from new angles. I'm also an avid reader, and enjoy books on topics ranging from software development to history and philosophy.

Overall, I'm excited to continue growing as a software developer and working on challenging projects that make a positive impact. Whether it's creating new applications or improving existing ones, I'm always striving to find the most efficient and effective solutions.




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
