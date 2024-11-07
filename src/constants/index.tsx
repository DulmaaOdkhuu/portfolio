import { meta, shopify, starbucks, tesla, post, bogd, gobi } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Volunteer Junior Full-stack Developer",
        company_name: "Sun Center NGO",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2021 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Front - End  Developer",
        company_name: "ICT Group LLC",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Feb 2021 - Oct 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "System Analyst",
        company_name: "ICT Group LLC",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Design Systems: Create system specifications, including data flow diagrams, system flowcharts, and entity-relationship diagrams, to outline the structure and functionality of the proposed systems.",
            "Collaborate: Work closely with business stakeholders, developers, and other team members to ensure that the proposed solutions align with business needs and technical capabilities.",
            "Write Documentation: Prepare detailed documentation, including system requirements documents, functional specifications, and technical design documents.",
            "Research and Evaluation: Evaluate potential software or hardware solutions and make recommendations based on the organization's needs and constraints.",
        ],
    },
    {
        title: "Front - End  Developer",
        company_name: "Gobi Cashmere JSC",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "User Interface (UI) Design: Collaborate with UI/UX designers to transform design mockups and wireframes into visually appealing and functional web pages. This involves creating layouts, selecting fonts, colors, and graphics to match the brand's aesthetic.",
            "Responsive Design: Ensure that the e-commerce website is responsive, meaning it adapts to different screen sizes and devices, providing a consistent and optimal user experience on desktops, tablets, and mobile devices.",
            "HTML/CSS Coding: Write and maintain clean, well-structured HTML and CSS code to structure the web pages and style the elements. This includes ensuring proper semantic markup for accessibility.",
            "JavaScript Development: Implement interactive features and functionalities using JavaScript, such as product filtering, image galleries, and dynamic forms. Front-end developers often work with JavaScript libraries and frameworks like React, Angular, or Vue.js.",
            "Cross-Browser Compatibility: Ensure that the e-commerce site functions correctly and looks consistent across different web browsers, such as Chrome, Firefox, Safari, and Internet Explorer.",
            "Performance Optimization: Optimize web pages for fast loading times, which is essential for e-commerce sites. This may involve techniques like code minification, image optimization, and lazy loading.",
            "Accessibility: Make the website accessible to users with disabilities by following web accessibility standards (e.g., WCAG) and implementing features like keyboard navigation and screen reader compatibility.",
            "Search Engine Optimization (SEO): Implement SEO best practices to enhance the website's visibility in search engine results. This includes optimizing meta tags, headings, and content structure.",
            "Integration with Backend: Collaborate with back-end developers to connect the front-end to the back-end systems and databases, ensuring data is fetched and displayed accurately.",
            "Version Control: Use version control systems like Git to manage code changes and collaborate effectively with other team members.",
            "Google Tag Manager: Implement Google Tag Manager, create events and tags within the Tag Manager to ensure accurate performance, implement scripts and events in the code, and ensure their correct operation.",
            "GSAP: working with GSAP framework and create design with scroll- trigger."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'Instagram',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    // {
    //     name: 'LinkedIn',
    //     iconUrl: linkedin,
    //     link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    // }
];

export const projects = [
    {
        iconUrl: post,
        theme: 'btn-back-red',
        name: 'Mongolian Post',
        description: 'Front end development of Mongolian Post Website',
        link: 'https://mongolpost.mn/',
    },
    {
        iconUrl: bogd,
        theme: 'btn-back-green',
        name: 'Tavan Bogd IPO',
        description: 'Front end development of Tavan Bogd Capital Website',
        link: 'https://tavanbogdcapital.com/',
    },
    {
        iconUrl: gobi,
        theme: 'btn-back-blue',
        name: 'Gobi Cashmere EU',
        description: 'Front End Development of Gobi Cashmere - World Number One Cashmere Coat Selling Company - EU luxury cashmere clothing selling e-commerce.',
        link: 'https://gobicashmere.com/',
    },
    {
        iconUrl: gobi,
        theme: 'btn-back-blue',
        name: 'Gobi Cashmere EU',
        description: 'Front End Development of Gobi Cashmere - World Number One Cashmere Coat Selling Company - UK luxury cashmere clothing selling e-commerce.',
        link: 'https://gobicashmere.com/uk',
    },
    {
        iconUrl: gobi,
        theme: 'btn-back-blue',
        name: 'Gobi Cashmere DEUTSCH',
        description: 'Front End Development of Gobi Cashmere - World Number One Cashmere Coat Selling Company - DE luxury cashmere clothing selling e-commerce.',
        link: 'https://gobicashmere.com/de',
    },
    {
        iconUrl: gobi,
        theme: 'btn-back-blue',
        name: 'Gobi Cashmere USA',
        description: 'Front End Development Gobi of Cashmere - World Number One Cashmere Coat Selling Company - USA luxury cashmere clothing selling e-commerce.',
        link: 'https://gobicashmere.com/us',
    },
   
];