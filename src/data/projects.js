// Add new projects by appending an object. `github` and `live` are optional;
// buttons are hidden when a URL is missing.
export const projects = [
  {
    name: 'Airbnb Clone — Property Listing & Booking Platform',
    category: 'Full-Stack MERN Web Application',
    description:
      'A full-stack property listing and booking application with a React.js and Redux frontend and a Node.js and Express.js backend connected to MongoDB.',
    tech: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'REST APIs'],
    features: [
      'Built and integrated 12+ REST APIs.',
      'Designed MongoDB data models using Mongoose.',
      'Implemented JWT-based authentication.',
      'Role-based access control for regular users and administrators.',
      'Interfaces for listing, searching, and booking properties.',
      'Redux for frontend state management.',
    ],
    github: 'https://github.com/Dhandar/wanderlust-stays',
    live: '',
    image: '',
  },
  {
    name: 'Personal Portfolio Website',
    category: 'React.js Web Application”',
    description:
      'A full-stack portfolio website with a responsive React.js frontend built with Vite and an Express.js and Node.js backend for the contact workflow.',
    tech: ['React.js', 'Vite', 'JavaScript ES6+', 'CSS3', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Nodemailer', 'SMTP', 'Vercel', 'Render'],
    features: [
      'Responsive React frontend with reusable components and React Hooks.',
      'Content driven from configurable data files for easy updates.',
      'Accessible navigation with a mobile menu and smooth scrolling.',
      'Contact form with client-side and server-side validation.',
      'Honeypot spam protection and rate limiting.',
      'Automated email notifications using Nodemailer and SMTP.',
      'MongoDB Atlas storage for form submissions.',
      'Token-protected API endpoint for reviewing messages.',
      'Frontend on Vercel, backend on Render, deployed from GitHub.',
      'Environment-based configuration and CORS handling.',
    ],
    github: '',
    live: '',
    image: '',
  },
];
