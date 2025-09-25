import { Project } from '../types';

export const projects: Project[] = [
  // Full Stack Projects
  {
    id: 'chat-app',
    title: 'Real-Time Chat Application',
    description: 'A modern real-time chat application built with MERN stack and Socket.io for instant messaging.',
    longDescription: 'A comprehensive real-time chat application featuring user authentication, real-time messaging, AI chat integration, user profiles, and responsive design. Built with modern web technologies for optimal performance and user experience.',
    images: [
      '/ChatApp/HomePage.jpg',
      '/ChatApp/Login Page.jpg',
      '/ChatApp/Register Page.jpg',
      '/ChatApp/Chatting with AI.jpg',
      '/ChatApp/Chatting_Side.jpg',
      '/ChatApp/Setting Page.jpg',
      '/ChatApp/Profile.jpg'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Tailwind CSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/Mani-420/Chat_app',
   // linkedinUrl: 'https://www.linkedin.com/posts/abdul-rehman-tahir-7068aa315_webdevelopment-mern-react-activity-7351285315296223233-g6DC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFALYXYBT_Cep7VvnKzPypdFZ5kWMNZfOoI',
    features: [
      'Real-time messaging with Socket.io',
      'User authentication and authorization',
      'AI chat integration',
      'User profile management',
      'Responsive design',
      'Dark/Light theme toggle',
      'Message history and search'
    ]
  },
  {
    id: 'AI-Interview-Agent',
    title: 'AI Interview Agent',
    description: 'A smart voice-based interview preparation tool that simulates real interview scenarios using AI.',
    longDescription: `AI Voice Interview 🎙️🤖 is a web-based platform that helps candidates prepare for interviews tailored to their resume and job description (JD). Powered by LLMs with voice input/output, it simulates realistic interview scenarios, provides instant feedback, and tracks candidate progress.
                     🔹 Round 1 (Implemented): Candidates answer education, experience, and subject-related questions in voice. The AI evaluates responses, gives improvement tips, and decides pass/fail with retry options.
                     🔹 Round 2 (Upcoming): Auto-scheduled after Round 1 clearance with email confirmations/reminders. On the scheduled date, Round 2 unlocks automatically, following the same voice-based flow.`,
    images: [
      '/InterviewAgent/public.png',
      '/InterviewAgent/home.png',
      '/InterviewAgent/public.png',
      '/InterviewAgent/round1.png',
    ],
    technologies: ['React.js', 'Python', 'Flask', 'SQLite', 'SQLAlchemy', 'OpenAPI', 'STT','TTS', 'LangChain','SMTP'],
    category: 'fullstack',
    githubUrl: 'https://github.com/Zubii07/Interview-Agent',
    // linkedinUrl: 'https://www.linkedin.com/posts/abdul-rehman-tahir-7068aa315_mernstack-webdevelopment-javascript-activity-7341883989835640836-Weiq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFALYXYBT_Cep7VvnKzPypdFZ5kWMNZfOoI',
    features: [
      'User authentication and authorization',
      'Resume & JD Upload',
      'LLM asks questions in voice.',
      'Candidate answers in voice.',
      'LLM evaluates responses, provides feedback, improvement tips, and pass/fail status.',
      'Retry option for candidates.',
    ]
  },
  {
    id: 'notes-app',
    title: 'Secure Notes Manager',
    description: 'A secure, full-stack notes application with user authentication and CRUD operations.',
    longDescription: 'A comprehensive notes management application that provides users with a secure platform to create, organize, and manage their notes. Features include user authentication, note categorization, and a clean, intuitive interface.',
    images: [
      '/NotesAPp/Notes_showNotes.jpg',
      '/NotesAPp/Notes_edit.jpg',
      '/NotesAPp/Notes_view.jpg',
      '/NotesAPp/Notes_Empty.jpg',
      '/NotesAPp/Notes_Login.jpg',
      '/NotesAPp/Notes_Register.jpg',
      '/NotesAPp/notes1.png'
    ],
    technologies: ['React.js', 'Django', 'PostgreSQL', 'JWT', 'CSS3', 'RESTful APIs'],
    category: 'fullstack',
    githubUrl: 'https://github.com/Zubii07/Django-Notes-App',
   // linkedinUrl: 'https://www.linkedin.com/posts/abdul-rehman-tahir-7068aa315_mernstack-webdevelopment-javascript-activity-7335698738729930752-cI8U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFALYXYBT_Cep7VvnKzPypdFZ5kWMNZfOoI',
    features: [
      'User authentication and authorization',
      'Create, edit, delete notes',
      'Secure data storage',
      'User-specific notes',
      'Clean and intuitive UI',
      'Responsive design',
      'Real-time updates'
    ]
  },

  // Backend Projects
//   {
//     id: 'movie-review',
//     title: 'Movie Review Platform Backend',
//     description: 'A comprehensive RESTful API for a movie review platform with role-based access control.',
//     longDescription: 'A robust backend API service for a movie review platform featuring JWT authentication, OTP verification, role-based access control, and comprehensive movie and review management systems.',
//     images: [
//       '/BlogApp/Dashboard p.jpg',
//       '/BlogApp/Login p.jpg',
//       '/BlogApp/Register p.jpg',
//       '/BlogApp/Create p.jpg'
//     ],
//     technologies: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'bcrypt', 'Zod validation', 'RESTful APIs'],
//     category: 'backend',
//     githubUrl: 'https://github.com/Mani-420/Movie_review2',
//     features: [
//       'JWT-based authentication',
//       'OTP verification (email/SMS)',
//       'Role-based access control (Admin/User)',
//       'Movie management (CRUD)',
//       'Review system with ratings',
//       'Secure password hashing',
//       'Request validation with Zod',
//       'Comprehensive API documentation'
//     ]
//   },
// 
//   // Frontend Projects
//   {
//     id: 'landing-page',
//     title: 'Modern Landing Page',
//     description: 'A responsive and modern landing page built with React and Tailwind CSS.',
//     longDescription: 'A beautifully designed, responsive landing page showcasing modern web design principles. Features smooth animations, mobile-first design, and optimized performance for the best user experience.',
//     images: [
//       '/LandingPag/Landing1.jpg',
//       '/LandingPag/Landing2.jpg',
//       '/LandingPag/Landing3.jpg',
//       '/LandingPag/Landing4.jpg',
//       '/LandingPag/land1.jpg',
//       '/LandingPag/land2.jpg',
//       '/LandingPag/landing5.jpg'
//     ],
//     technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
//     category: 'frontend',
//     githubUrl: 'https://github.com/Mani-420/Landing_page',
//     linkedinUrl: 'https://www.linkedin.com/posts/abdul-rehman-tahir-7068aa315_reactjs-frontenddevelopment-webdevelopment-activity-7328442348260974593-muyL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFALYXYBT_Cep7VvnKzPypdFZ5kWMNZfOoI',
//     features: [
//       'Responsive design',
//       'Modern UI/UX',
//       'Smooth animations',
//       'Mobile-first approach',
//       'Optimized performance',
//       'Cross-browser compatibility',
//       'SEO optimized'
//     ]
//   },
//   {
//     id: 'recipe-sharing',
//     title: 'Recipe Sharing Platform',
//     description: 'A recipe sharing platform with user authentication and content management.',
//     longDescription: 'A full-featured recipe sharing platform that allows users to discover, create, and share recipes. Features include user authentication, recipe management, and a community-driven approach to culinary content.',
//     images: [
//       '/RecipeShatring/Blog.jpg'
//     ],
//     technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Bootstrap', 'RESTful APIs'],
//     category: 'frontend',
//     githubUrl: 'https://github.com/Mani-420/Recipe-Blog',
//     linkedinUrl: 'https://www.linkedin.com/posts/abdul-rehman-tahir-7068aa315_nodejs-expressjs-mongodb-activity-7301114877266350080-Kz7V?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFALYXYBT_Cep7VvnKzPypdFZ5kWMNZfOoI',
//     features: [
//       'User authentication',
//       'Recipe creation and management',
//       'Search and filter functionality',
//       'User profiles',
//       'Responsive design',
//       'Community features',
//       'Content moderation'
//     ]
//   }
];
