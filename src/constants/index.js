import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  infosys,
  neu,
  shopify,
  carrent,
  jobit,
  aws,
  threejs,
  amazon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Computing",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Database",
    icon: web,
  },
  {
    title: "Frontend Development",
    icon: mobile,
  },

  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Engineer Co-Op",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#383E56",
    date: "July 2023 - Dec 2023",
    points: [
      "Involved in end to end product development of a user-facing feature for the Genealogy platform, from initial concept through to deployment",
      "Utilized a tech stack including AWS Lambda for serverless backend logic, API Gateway for efficient frontend-backend communication, and React coupled with Redux for a dynamic and responsive frontend experience",
      "Implemented AWS Lambda functions to handle intricate backend processing, leveraging API Gateway to facilitate real-time data exchange and interactions between the user interface and server",
      "Crafted a highly responsive user interface using React, integrating Redux for optimal state management, resulting in a fluid and intuitive user experience",
    ],
  },
  {
    title: "Senior Systems Engineer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#383E56",
    date: "Sept 2019 - Dec 2022",
    points: [
      "Migrated monolithic vehicle service application to cloud hosted microservices using Java, Spring MVC technologies along with web framework such as Angular",
      "Reduced developer effort by 80% by scheduling jobs using Java Spring Cron Expression to trigger a monthly email with a calculated analytics report for authorized dealers",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graduate Teaching Assistant",
    company_name: "Northeastern University",
    icon: neu,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Mar 2023",
    points: [
      "Assisted professor in teaching Software Engineering Design in Java by providing support to students during lectures and lab sessions.",
      "Developed stronger learning of the course which benefited the students in resolving their doubts and gaining deeper knowledge about the subject",
      "Graded assignments and provided constructive feedback to students to help them improve their understanding of the course material",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Travel recommendation Application",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ankita-jha/Travel-Recommendation-App",
  },
  {
    name: "K-Means Clustering Algorithm",
    description:
      "This JavaScript project visualizes K-means clustering by generating cluster centers, plotting data points, and differentiating them by color and shape.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ankita-jha/K-MEANS-CLUSTERING",
  },
  {
    name: "Cloud Gateway Service",
    description:
      "Developed a scalable AWS infrastructure using CloudFormation templates and a cloud-native back-end application in Node.js,",
    tags: [
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: aws,
    source_code_link: "https://github.com/ankita-jha-cloud",
  },
];

export { services, technologies, experiences, projects };
