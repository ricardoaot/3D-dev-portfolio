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
    starbucks,
    exp_icon_coding,
    exp_icon_efficiency,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "FullStack Developer",
      icon: web,
    },
    {
      title: "SQL and NoSQL Database Experienced",
      icon: mobile,
    },
    {
      title: " Backend Specialist",
      icon: backend,
    },
    {
      title: "Agile practitioner",
      icon: creator,
    }
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
      title: "Full Stack Developer",
//      company_name: "Starbucks",
      company_name: "Freelancer",
      icon: exp_icon_coding,
//      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Development and maintainance of web applications using JavaScript, TypeScript, ReactJS, Node.js. and PHP",
        "Managing databases, encompassing MS SQL Server, Postgres, and MongoDB.", 
        "Experienced in working with various cloud environments, including AWS and Azure.",
      ],
    },
    {
      title: "Agile Team Leader",
      company_name: "Outsourcing",
      icon: exp_icon_efficiency,
      iconBg: "#383E56",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Agile team leader committed to delivering high-quality software solutions that meet business objectives throughout agile practices.",
        "Project BCP Bank - Technologies: Azure, Cosmos DB, Mongo Atlas, Java, kotlin, swift",
        "Project Grupo EFE Retail - Tech Stack: Flutter, Php, Mysql, javascript",
        "Project Telefónica del Perú - Tech Stack: Java, angular, kotlin, swift",
        "Project Tottus Supermarket - Tech Stack: Node Js, Mongo DB, kafka, Google Cloud",
      ],
    },
    {
      title: "Tech Lead",
      company_name: "SONIEM - National Society of Music Performers",
      icon: exp_icon_coding,
      iconBg: "#383E56",
      date: "Oct 2016 – Sep 2019",
      points: [       
        "Analysis, design, and implementation of the royalty management system in PHP, Js with PostgreSQL.",
        "Implementation of hybrid cloud in AWS for the registration of Musical Works by affiliates. BD on premise and Front-End in cloud.",
        "Proposal of the mathematical model for the indirect distribution of royalties.",
        "Development of new functionalities for a better optimization of times in the areas of customer service, distribution and distribution, administrative area and general management.",
        "Development of tools for the proactive analysis of information, alerting table inconsistencies for their respective correction.",
        "Sending communications via email and personalized greetings on social networks.",
      ],
    },
    {
      title: "Technical leader",
      company_name: "OLTASIS",
      icon: exp_icon_efficiency,
      iconBg: "#383E56",
      date: "Jan 2011 – Dec 2017",
      points: [
        "Analysis and development of IT projects like:",
        "G-DAC: SaaS solution for telecommunication dealers. It count with a Commercial, logistic, financial, accountant module. Connecting to 15 branches per client. Using PHP, JavaScript, PostgreSQL",
        "MEDINUB: Web and Android solution for dental care centers.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "... he is an excellent professional who has demonstrated his talent both in the world of agility and in software development. His ability to quickly adapt to changes and his meticulous approach to addressing technical challenges stand out.",
      name: "Johana Ferrer",
      designation: "Agile Delivery Leader",
      company: "Inchcape - UK",
      image: "https://media.licdn.com/dms/image/D4E03AQHj9J2cvQD8rw/profile-displayphoto-shrink_100_100/0/1687184190903?e=1723680000&v=beta&t=iC31G93uh5OE2WiX0yljsUF_kgDlPVXy1BMSUgaDkP0",
    },
    {
      testimonial:
        "Ricardo ... also possesses strong technical expertise, contributing to the maturity of teams with a focus on delivery quality, while maintaining a people-centric approach.",
      name: "Kelly Salgado",
      designation: "Scrum Master",
      company: "Interbank",
      image: "https://media.licdn.com/dms/image/D4E03AQEjIJbPPA9rIA/profile-displayphoto-shrink_100_100/0/1714233909413?e=1723680000&v=beta&t=eIz9EHmSTIWJfYyUnTidBONba5mHRnW0AOEmJR1v4-E",
    },
    {
      testimonial:
        "... always in tune with his team and focused on helping them grow every day. He also has a strong sense of responsibility, committing to project objectives and making a positive impact on people. ",
      name: "Miguel Perez Torres",
      designation: "Agile Project Manager",
      company: "Globant",
      image: "https://media.licdn.com/dms/image/D4E03AQHDWyFsX4YE3A/profile-displayphoto-shrink_100_100/0/1697774234928?e=1723680000&v=beta&t=3xkoMSLSRi-7RQDSA9ew-jyZl5ysXrDGN4EilhGBPGw",
    },
  ];
  
  const projects = [
    {
      name: "NestJs API for Ecommerce",
      description:
        "Ecommerce API developed with NestJS! This backend project focuses on providing a robust and scalable API for an ecommerce website.",
      tags: [
        {
          name: "NestJs",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
        {
          name: "TypeORM",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ingeproc Website",
      description:
        "The website for Ingeproc was developed to showcase their electrical solutions. The design focuses on user-friendly navigation and mobile responsiveness.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "MySql",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://ingeproc.pe/",
    },
    {
      name: "Lawyer Studio Website",
      description:
        "I developed a professional website for a law firm client, focusing on sophisticated design and seamless functionality. The site highlights the firm's expertise while enhancing client engagement.",
      tags: [
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://chengcastaneda.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };