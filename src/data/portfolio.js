// Single source of truth for personal info. Edit here only.
export const portfolio = {
  name: 'Sushmita Dhandar',
  title: 'MERN Stack Developer | React.js | Node.js | MongoDB | Express.js',
  location: 'Pune, Maharashtra, India',
  email: 'dhandarsushmita@gmail.com',
  phone: '+91 7796031552',
  github: 'https://github.com/Dhandar',
  linkedin: 'https://linkedin.com/in/sush2000',
  portfolioUrl: 'https://portfolio-project-eight-woad.vercel.app',
  resumePath: '/resume.pdf',
  contactApiUrl: import.meta.env.VITE_CONTACT_API_URL || '',
  heroHeading: "Hi, I'm Sushmita Dhandar",
  heroHeadline: 'MERN Stack Developer Building Modern Web Applications',
  heroText:
    'I build responsive web applications using React.js, Node.js, Express.js, and MongoDB. I enjoy creating practical digital experiences, developing full-stack projects, and writing clean, maintainable code.',
  status: 'Open to Software Development Opportunities',
  aboutParagraphs: [
    "I'm a MERN Stack Developer with a background in computer science and hands-on experience building full-stack web applications. My technical skills include React.js, JavaScript, Node.js, Express.js, MongoDB, Mongoose, and REST APIs.",
    'I have worked on projects involving property listings, booking workflows, authentication, responsive interfaces, and backend API development. My internship at Devotra Infotech helped me gain practical experience collaborating in an Agile development environment.',
    "I'm interested in opportunities where I can contribute to real-world projects, work with experienced developers, strengthen my technical skills, and grow as a software engineer.",
  ],
  aboutCards: [
    { icon: 'Layers', title: 'Full-Stack Development', text: 'Building frontend interfaces and backend APIs.' },
    { icon: 'Puzzle', title: 'Problem Solving', text: 'Applying programming fundamentals and improving coding skills.' },
    { icon: 'BookOpen', title: 'Continuous Learning', text: 'Improving React, JavaScript, Node.js, and software development practices.' },
  ],
  experience: [
    {
      company: 'Devotra Infotech',
      role: 'MERN Stack Web Developer Intern',
      period: 'March 2026 – June 2026',
      summary: 'Worked on full-stack web application development using the MERN stack as part of an Agile team.',
      points: [
        'Built and deployed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
        'Developed reusable React.js UI components and integrated them with backend REST APIs.',
        'Collaborated through Git pull requests and peer code reviews.',
        'Worked with the team to understand requirements and resolve bugs during testing.',
        'Followed practices focused on clean and maintainable code.',
      ],
    },
  ],
  education: [
    { degree: 'Master of Computer Applications (MCA)', school: 'Dr. D. Y. Patil College, Pune', period: '2024–2026', cgpa: '8.5', result: 'First Class' },
    { degree: 'Bachelor of Science in Computer Science', school: 'Amravati University, Buldhana, Maharashtra', period: '2018–2021', cgpa: '8.0', result: 'First Class' },
  ],
  // Add issuer / date / url later; they are only shown when present.
  certifications: [
    { name: 'MERN Stack Development' },
    { name: 'Data Structures & Algorithms (DSA)' },
  ],
};
