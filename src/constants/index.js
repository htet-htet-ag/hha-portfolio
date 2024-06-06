import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Web Developer with a knack for crafting robust and scalable web applications. Experienced Senior Software Engineer with a focus on ReactJS, NodeJS, PHP, Laravel Framework, WordPress(CMS) and real-time data processing.
Passionate about developing innovative solutions for the Fintech field. Strong understanding of Web development. Seeking an opportunity to work on meaningful projects that will make an impact.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Fullstack Web Developer with a passion for creating efficient and user-friendly web applications. With 7 years of professional experience, I have worked with a variety of technologies, including React, Node.js, PHP, Laravel Framework, WordPress(CMS), MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2019 Jan - 2024 April",
    role: "Senior Software Engineer",
    company: "Truemoney Myanmar",
    description: `Designed and implemented high-performance web applications and optimised components for
    maximum reusability across different projects. Develop and maintain server-side logic, web portal and web applications using PHP, Laravel, WordPress(CMS), JavaScript, Bootstarp, HTML, CSS and RESTful API. Build the front end of applications through appealing visual design. Implement and provide security best practices and ensure compliance with relevant standards and
    regulations throughout the development and deployment process. Deploy systems to production and provide post-implementation support. Partner with internal teams, including Product Team, Marketing Team, and Customer Service Team to understand
    requirements, user needs and design feasibility. Experience working in Agile using the JIRA tool.`,
    technologies: [
      "PHP",
      "Laravel Framework",
      "WordPress(CMS)",
      "Javascript",
      "RESTful API",
      "Jenkin",
      "CI/CD",
      "OCP4",
    ],
  },
  {
    year: "2018 May - Dec",
    role: "PHP Developer",
    company: "OPM Myanmar",
    description: `Designed and developed user interfaces for web applications using PHP and MySQL. Developing and maintaining dynamic websites and web applications. Collaborating with front-end developers and other team members.`,
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
  },
  {
    year: "2017 Jan - Nov",
    role: "Web Developer",
    company: "Pissaya Info",
    description: `Interact with the senior software developers and clients to understand the exact nature of programs required for the software. Lotaya (MPT) project was first set up with Laravel. WordPress Website and other maintenance web services. Customer requirement report to Manager.`,
    technologies: [
      "PHP",
      "Laravel",
      "WordPress(CMS)",
      "JavaScirpt",
      "MySQL",
      "RESTFul API",
    ],
  },
  {
    year: "2016 Jan - Dec",
    role: "Junior Programmer",
    company: "ALJ Myanmar",
    description: `Customize WordPress Theme and write and maintain code. Maintained and updated existing website, resolving bugs and improving user experience. Collaborated with a team of web developers to build a complete website from scratch.`,
    technologies: ["PHP", "WordPress(CMS)", "HTML", "CSS", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "MAB Report Portal",
    image: project1,
    overview:
      "Report Portals is a robust reporting system developed using Laravel, RESTful API, JavaScript, Bootstrap, HTML, and CSS. It leverages CICD practices with Jenkins for seamless production releases.",
    description: [
      "User Roles & Permissions: Admin users can manage users and control menu access, ensuring secure and organized access.",
      "Comprehensive Reporting: Customers and agents can generate reports filtered by date, perform searches, and download results.",
      "Technology Stack: Built with Laravel for backend operations, RESTful API for data communication, and enhanced with JavaScript and Bootstrap for a dynamic and responsive user interface.",
      "Continuous Integration & Deployment: Utilizes Jenkins for automated and efficient deployment processes.",
    ],
    usage:
      "Designed to provide detailed and customizable reports, making it easy for users to access and analyze data while maintaining strict control over who can view and manage information",
    technologies: [
      "Laravel",
      "JavaScript",
      "RESTFul API",
      "Bootstrap",
      "HTML",
      "CSS",
      "Jenkin",
      "OCP4",
    ],
  },
  {
    title: "MAB Agent Web Portal",
    image: project2,
    overview:
      "MAB Agent Web is an advanced financial management system developed using Laravel, RESTful API, JavaScript, Bootstrap, HTML, and CSS. It incorporates CICD practices with Jenkins for streamlined production deployments.",
    description: [
      "Cash Management: Agents can perform Cash In and Cash Out transactions efficiently.",
      "International Remittance: Supports international remittance services for Thailand and Malaysia, facilitating cross-border money transfers.",
      "Transaction Tracking: Agents can view transaction history and monitor the status of their transactions in real-time.",
      "Technology Stack: Utilizes Laravel for robust frontend operations, backend operations with RESTful API for smooth data interchange, and enhanced with JavaScript and Bootstrap for a responsive and user-friendly interface.",
      "Continuous Integration & Deployment: Implements Jenkins for automated, reliable deployment cycles.",
      "Designed to enable agents to manage financial transactions with ease and security, offering a comprehensive tool for cash handling and international remittance, alongside detailed transaction tracking.",
    ],
    technologies: [
      "Laravel",
      "JavaScript",
      "RESTFul API",
      "Bootstrap",
      "HTML",
      "CSS",
      "Jenkin",
      "OCP4",
    ],
  },
  {
    title: "MM-CrossBorder",
    image: project3,
    overview:
      "MM-Crossborder Web App is a comprehensive financial application built using Laravel, RESTful API, JavaScript, Bootstrap, HTML, and CSS, leveraging CICD practices with Jenkins for efficient deployment. It is designed to serve Myanmar people living in Thailand, providing various financial services.",
    description: [
      "Mobile Top-up & Data Packages: Allows users to top up mobile phones and purchase data packages for Myanmar telecom services.",
      "Bill Payments: Facilitates the payment of monthly electricity and internet bills for services in Myanmar.",
      "Embedded Integration: The web app is embedded within the Truemoney Thai Wallet, ensuring seamless access and usability for users.",
      "Currency Handling: Transactions are conducted using Thai Baht, with real-time currency conversion to Myanmar Kyat as per the current exchange rates.",
      "Transaction Security: Ensures secure transactions with integrated wallet money deduction and detailed transaction histories.",
      "Technology Stack: Developed with Laravel for backend functionality, RESTful API for data communication, and enhanced with JavaScript and Bootstrap for a responsive and dynamic user experience.",
      "Continuous Integration & Deployment: Utilizes Jenkins for streamlined and automated production releases.",
    ],
    usage:
      "Aimed at providing essential financial services to Myanmar nationals in Thailand, the app enables easy mobile top-ups, data package purchases, and bill payments, directly from their Truemoney Thai Wallet.",
    technologies: [
      "Laravel",
      "JavaScript",
      "RESTFul API",
      "Bootstrap",
      "HTML",
      "CSS",
      "Jenkin",
      "OCP4",
    ],
  },
  {
    title: "Truemoney Website",
    image: project4,
    overview:
      "The Truemoney Myanmar Website is a dynamic platform developed with WordPress, utilizing custom themes and plugins to meet the unique needs of the Truemoney Myanmar service. It aims to provide a comprehensive online experience for users seeking financial services and agent information.",
    description: [
      "Agent Shop Locator: Allows users to search for nearby agent shops using an interactive map powered by Leaflet.js. This feature enables users to find the most convenient agent locations for their financial transactions.",
      "Agent Application: Prospective agents can easily apply to become a Truemoney agent through the website, streamlining the onboarding process.",
      "Custom WordPress Theme: The website is built with a custom WordPress theme, ensuring a unique and brand-consistent user experience.",
      "Custom Plugins: Tailored plugins were developed to enhance the website's functionality, including the agent locator and application features.",
      "User-Friendly Interface: The site features an intuitive and responsive design, providing an optimal experience across all devices.",
      "For more details, visit the official website: https:://truemoney.com.mm",
    ],
    usage:
      "The Truemoney Myanmar Website serves as a central hub for customers to locate agent shops and for individuals to apply to become agents. It provides essential information and services, facilitating better accessibility and engagement with the Truemoney brand.",
    technologies: [
      "WordPress(CMS)",
      "Leaflet.js",
      "Custom Theme and Plugins",
      "MySQL",
      "RESTFul API",
      "Apache HTTP Server",
    ],
  },
];

export const CONTACT = {
  address: "Yangon, Myanmar",
  phoneNo: "+959 797741227",
  email: "htethtetaung720@gmail.com",
};
