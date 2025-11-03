import type { Project, SkillCategory, EducationItem, Certification, Experience, TechStackCategory, CertificationCategory, ProjectCategory } from './types';

export const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Education', id: 'education' },
  { name: 'Experience', id: 'experience' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Contact', id: 'contact' },
];


export const TECH_STACK_CATEGORIES: TechStackCategory[] = [
  {
    title: 'Frontend',
    technologies: [
      { name: 'React', icon: 'fab fa-react' },
      { name: 'TypeScript', icon: 'fas fa-code' },
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
    ],
  },
  {
    title: 'Backend & Databases',
    technologies: [
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Firebase', icon: 'fas fa-fire' },
      { name: 'SQL', icon: 'fas fa-database' },
    ],
  },
  {
    title: 'Languages',
    technologies: [
      { name: 'Java', icon: 'fab fa-java' },
      { name: 'C#', icon: 'fas fa-code' },
      { name: 'Python', icon: 'fab fa-python' },
    ],
  },
  {
    title: 'Tools & Platforms',
    technologies: [
      { name: 'GitHub', icon: 'fab fa-github' },
      { name: 'Android Studio', icon: 'fab fa-android' },
      { name: 'VS Code', icon: 'fas fa-code' },
    ],
  },
];


const SOFTWARE_PROJECTS: Project[]  = [
  {
    name: 'AI Resume Builder',
    date: '08/2025',
    description: 'An intelligent resume generation system that creates customized, ATS-friendly resumes based on user inputs and job descriptions, leveraging AI to highlight key skills and experiences.',
    detailedDescription: [
      { title: 'The Challenge', icon: 'fas fa-bullseye', content: 'Manually tailoring a resume for every job application is time-consuming and often fails to pass initial screening by Applicant Tracking Systems (ATS). This project\'s goal was to automate this process, creating highly relevant, keyword-optimized resumes that capture a recruiter\'s attention.' },
      { title: 'Core Functionality', icon: 'fas fa-cogs', content: 'The application provides a clean, step-by-step interface for users to input their career history, education, and skills. By providing a target job description, users trigger an AI-powered process that analyzes the requirements and strategically rewrites their bullet points to align perfectly with the role.' },
      { title: 'Technical Breakdown', icon: 'fas fa-code-branch', content: 'Built with React and TypeScript for a type-safe frontend, the application communicates with a Node.js backend that securely handles requests to the Gemini API. The core logic involves sophisticated prompt engineering to instruct the model to act as a professional resume writer, extracting key verbs and metrics from the job description and weaving them into the user\'s experience. The final resume is then generated as a downloadable PDF.' },
      { title: 'Key Learning', icon: 'fas fa-lightbulb', content: 'The main challenge was in prompt design—ensuring the AI produced consistently high-quality, professional, and grammatically correct content. This required iterative testing and refining the instructions given to the model, which provided deep insights into the nuances of controlling generative AI outputs.' }
    ],
    technologies: ['Gemini API', 'React', 'Node.js', 'TypeScript'],
    githubUrl: 'https://github.com/katlegoxoxo/ai-resume-builder.git',
    liveUrl: 'https://ai-resume-builder-nine-mauve.vercel.app/',
    imageUrl: `${import.meta.env.BASE_URL}images/ai-resume-builder.png`,
    demoComponent: 'resumeBuilder',
  },
  {
    name: 'Sentiment Analysis Dashboard',
    date: '09/2025',
    description: 'An interactive dashboard that analyzes sentiment in text data. Users can input text directly or upload files to understand emotional tone in customer reviews, social media posts, or other content.',
    detailedDescription: [
      { title: 'The Goal', icon: 'fas fa-bullseye', content: 'The project aimed to create an accessible tool for understanding the emotional tone within text data, transforming raw text from sources like customer reviews or social media into actionable insights. The primary objective was to present this complex analysis in a simple, visually intuitive dashboard.' },
      { title: 'User Interaction', icon: 'fas fa-mouse-pointer', content: 'The user experience is centered around a single text input area. After pasting their content and clicking "Analyze," the results are displayed almost instantly. The UI uses color-coding and clear iconography to immediately convey the overall sentiment before the user even reads the details.' },
      { title: 'Technical Implementation', icon: 'fas fa-microchip', content: 'This project leverages the Gemini API\'s JSON mode for structured data output. The React frontend sends the user\'s text and receives a clean JSON object containing the sentiment, confidence score, and influential keywords. This data is then fed into D3.js and Chart.js components to render dynamic, animated gauges and charts, providing a rich data visualization experience.' },
      { title: 'Overcoming Challenges', icon: 'fas fa-brain', content: 'A key challenge was handling a wide variety of text lengths and complexities without sacrificing performance. This was addressed by implementing frontend validation and designing the API call to be efficient. It was a great exercise in combining AI-driven data processing with effective frontend data visualization.' }
    ],
    technologies: ['Gemini API', 'HTML & CSS'],
    githubUrl: 'https://github.com/Jozi-Navigators/Sentiment-Analysis-Dashboard.git',
    liveUrl: 'https://jozi-navigators.github.io/Sentiment-Analysis-Dashboard/',
    imageUrl: `${import.meta.env.BASE_URL}images/SentimentAnalysisDashboard.png`,
    demoComponent: 'sentimentAnalysis',
  },
  {
    name: 'AI School Buddy ',
    date: '09/2025',
    description: 'A collaborative learning platform for students, featuring subject-specific chat rooms, resource sharing, and a peer-to-peer tutoring scheduler to enhance academic support and engagement.',
    detailedDescription: [
      { title: 'The Vision', icon: 'fas fa-bullseye', content: 'The goal was to build more than just a chat app; it was to create a digital ecosystem that enhances collaborative learning. The project addressed the need for a centralized platform where students could connect, share resources, and support each other\'s academic journey outside the classroom.' },
      { title: 'Feature Breakdown', icon: 'fas fa-list-ul', content: 'The platform is built around three core features: 1) Real-time. 2) A shared document repository for uploading and accessing study materials.' },
      { title: 'Architecture & Tech', icon: 'fas fa-sitemap', content: 'The application was built using React for the frontend' },
      { title: 'Key Takeaway', icon: 'fas fa-lightbulb', content: 'The biggest challenge was designing a scalable data structure for the Realtime Database to efficiently manage users, chat rooms, and shared resources without performance degradation. This project provided invaluable experience in full-stack development and architecting real-time, collaborative applications.' }
    ],
    technologies: ['React', 'Real-time Chat', 'UI/UX'],
    githubUrl: 'https://github.com/katlegoxoxo',
    liveUrl: 'https://lock-in-one.vercel.app/',
    imageUrl: `${import.meta.env.BASE_URL}images/AILearning.png`,
  },
  
  {
    name: 'Slatt Image Gen AI',
    date: '08/2025',
    description: 'Created an AI-powered image generation app using modern JS and APIs for creative automation.',
    detailedDescription: [
      { title: 'The Goal', icon: 'fas fa-bullseye', content: 'To create a simple, fast, and accessible interface for interacting with a powerful image generation model. The project aimed to demystify generative AI by providing a hands-on tool that allows anyone to turn their textual ideas into visual art.' },
      { title: 'User Experience', icon: 'fas fa-mouse-pointer', content: 'The UI is intentionally minimalist. It consists of a prominent prompt input field, a "Generate" button, and a display area. Loading states are clearly communicated to the user while the AI is processing the request, ensuring a smooth and transparent experience.' },
      { title: 'Technical Workflow', icon: 'fas fa-project-diagram', content: 'The application is a single-page app built with modern JavaScript (ES6+), HTML, and CSS. On form submission, it makes a direct, asynchronous call to the image generation endpoint of the Gemini API. The API returns the image data as a base64 encoded string, which is then rendered directly into an `<img>` tag on the page.' },
      { title: 'Core Lesson', icon: 'fas fa-lightbulb', content: 'This project emphasized the importance of clear error handling and user feedback in API-driven applications. Implementing robust checks for API errors and providing informative messages to the user if a prompt fails was a key part of making the tool reliable and user-friendly.' }
    ],
    technologies: ['HTML', 'JavaScript', 'APIs'],
    githubUrl: 'https://github.com/katlegoxoxo/image-gen-xo.git',
    liveUrl: 'https://image-gen-xo-main.tiiny.site/',
    imageUrl: `${import.meta.env.BASE_URL}images/slatt.png`,
    demoComponent: 'imageGeneration',
  },
  {
    name: 'AI Fundamentals Chatbot',
    date: '08/2025',
    description: 'Created an AI-powered chatbot using no-code tools, demonstrating an understanding of conversational AI principles and rapid prototyping.',
    detailedDescription: [
      { title: 'The Objective', icon: 'fas fa-bullseye', content: 'This project was undertaken to gain a foundational understanding of conversational AI design principles without the overhead of complex coding. The goal was to prototype a chatbot that could effectively answer common questions about AI, demonstrating an understanding of user intent and conversation flow.' },
      { title: 'Design Process', icon: 'fas fa-drafting-compass', content: 'The core of the work was in the design phase. This involved mapping out potential user questions (intents), identifying key terms (entities), and scripting a decision tree for the chatbot\'s responses. The focus was on creating a conversation that felt natural and genuinely helpful to a non-technical user.' },
      { title: 'Technology', icon: 'fas fa-tools', content: 'The chatbot was built using a leading no-code AI platform (like Dialogflow or a similar service). This allowed for a focus on the logical and UX aspects of chatbot development rather than the backend implementation, providing a clear view of the underlying concepts.' },
      { title: 'Strategic Learning', icon: 'fas fa-brain', content: 'Although a no-code project, it provided critical insights into the architecture of conversational AI. Understanding concepts like intents, entities, and context management is directly transferable to building more complex, code-based chatbots with frameworks like the Gemini API. It was a practical lesson in the importance of design-before-development.' }
    ],
    technologies: ['No-Code AI',],
    githubUrl: 'https://github.com/katlegoxoxo',
    liveUrl: 'https://schoolhub.ai/en-US/generate/chatbot/view/5ce8eabf-5e18-40e8-81a3-cb929e390017',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQFpPMaII4qHVuxyGeD8I6fgGSmE74xNeZWw&s',
  },
  
];

const DATA_ANALYSIS_PROJECTS: Project[] = [
    {
    name: 'Student Performance Data Analysis',
    date: '10/2025',
    description: "Analysis of student performance metrics using Python to assess data quality, summarize statistics, and visualize key distributions.",
    detailedDescription: [
      { title: 'Technologies Used', icon: 'fas fa-tools', content: 'The analysis was conducted in a Jupyter Notebook environment, utilizing Python 3 with core data science libraries: Pandas for data manipulation, and Matplotlib/Seaborn for creating insightful visualizations.' },
      { title: 'Data Readiness & Quality', icon: 'fas fa-check-double', content: 'The initial and most critical phase involved a thorough data quality check. This included identifying and handling missing values, removing duplicate entries, and ensuring all data types were correct for accurate statistical analysis. A diagnostics table was created to summarize the health of the dataset.' },
      { title: 'Descriptive Statistics & Distributions', icon: 'fas fa-chart-bar', content: 'Computed key summary statistics (mean, median, standard deviation, etc.) to understand the central tendency and spread of the data. Histograms and boxplots were generated for variables like Final Score, Study Hours, and Attendance Rate to visually inspect their distributions, skewness, and identify outliers.' },
      { title: 'Insights & Learnings', icon: 'fas fa-lightbulb', content: 'The analysis revealed a mild right skew in final scores and identified outliers in study hours, indicating varied student habits. The project reinforced the foundational data analysis workflow: inspect → clean → describe → visualize → interpret. It highlighted how visualizations can quickly reveal patterns that raw statistics might obscure.' }
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/katlegoxoxo/Student-Performance-Data-Analysis',
    imageUrl: 'https://picsum.photos/seed/studentperf/800/600',
  },
  {
    name: 'Sales Data Analysis',
    date: '10/2025',
    description: 'An end-to-end data analysis project demonstrating data collection, cleaning, and insight generation using both Excel and Python (pandas) on a real-world sales dataset.',
    detailedDescription: [
      { title: 'Project Overview', icon: 'fas fa-chart-line', content: 'This project explores data collection, management, cleaning, and analysis using a real-world sales dataset. The objective was to extract meaningful business insights through both Microsoft Excel and Python (pandas), demonstrating the end-to-end data analysis process from raw data handling to insight generation.' },
      { title: 'Excel Analysis', icon: 'fas fa-file-excel', content: 'Imported and explored the structured dataset in Excel. Used tools like PivotTables, SUMIF, and Charts to derive insights such as total revenue by product and region, identify top-selling products, and analyze monthly revenue trends.' },
      { title: 'Python (Pandas) Workflow', icon: 'fab fa-python', content: 'Utilized the pandas library in a Jupyter Notebook to perform data cleaning tasks, including removing duplicates, handling missing values, and converting data types. Calculated key performance indicators (KPIs) like total revenue, average units sold, and identified top-performing sales representatives.' },
      { title: 'Key Takeaways', icon: 'fas fa-lightbulb', content: 'This project provided a comprehensive comparison of two powerful data analysis tools. It highlighted Excel\'s strength in quick, visual data exploration and Python\'s power in reproducible, scalable data cleaning and complex calculations.' }
    ],
    technologies: ['Excel', 'Python', 'Pandas', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/katlegoxoxo',
    imageUrl: 'https://picsum.photos/seed/sales-analysis/800/600',
  }
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    title: 'Software & AI Development',
    projects: SOFTWARE_PROJECTS,
  },
  {
    title: 'Data Analysis',
    projects: DATA_ANALYSIS_PROJECTS,
  },
];

export const PROJECTS: Project[] = [...SOFTWARE_PROJECTS, ...DATA_ANALYSIS_PROJECTS];

export const SKILL_CATEGORIES: SkillCategory[] = [

 
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Diploma in Software Development',
    institution: 'IIE Rosebank College',
    dateRange: '2022-2024',
    certificateUrl: `${import.meta.env.BASE_URL}files/Qualification.pdf`
  }
];


export const EXPERIENCE: Experience[] = [
  {
    role: 'Data Analyst Intern',
    company: 'Capaciti',
    dateRange: 'July 2025 - Present',
    description: [
      'Perform exploratory data analysis using Python, Pandas, and Jupyter Notebook to identify patterns and extract insights from datasets.',
      'Clean, transform, and validate data to improve accuracy and reliability for reporting and decision-making.',
      'Develop visualizations and reports in Excel and Jupyter to communicate findings in a clear and actionable way.',
      'Collaborate with team members to support data-driven initiatives and contribute to ongoing analytics projects.',
      'Continuously strengthening analytical and problem-solving skills through hands-on project work and real-world data challenges.'
    ]
  }
];


export const CERTIFICATION_CATEGORIES: CertificationCategory[] = [
  {
    title: 'Artificial Intelligence ',
    certifications: [
      {
        name: 'Generative AI with Large Language Models',
        issuer: 'AWS & DeepLearning.AI',
        date: 'Aug 22, 2025',
        imageUrl: "/images/generative_ai_with_large_language_models_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/2SRX3MZ2EAC2'
      },
      {
        name: 'Python for Data Science, AI & Development',
        issuer: 'IBM',
        date: 'Aug 21, 2025',
        imageUrl: "/images/python_for_data_science__ai_&_development_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/BLRPVE4Q019H'
      },
      {
        name: 'AI Foundations: Prompt Engineering with ChatGPT',
        issuer: 'Arizona State University',
        date: 'Aug 11, 2025',
        imageUrl: "/images/ai_foundations_prompt_engineering_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/B5QFU48UJRPD'
      },
      {
        name: 'Artificial Intelligence on Microsoft Azure',
        issuer: 'Microsoft',
        date: 'Aug 7, 2025',
        imageUrl: "/images/artificial_intelligence_on_microsoft_azure_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/6QBSFJ4RZD9P'
      },
     
      {
        name: 'Introduction to Responsible AI',
        issuer: 'Google Cloud',
        date: 'Aug 1, 2025',
        imageUrl: "/images/introduction_to_responsible_ai_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/A36BDVJ507MK'
      },
      {
        name: 'AI For Everyone',
        issuer: 'DeepLearning.AI',
        date: 'Jul 31, 2025',
        imageUrl: "/images/ai_for_everyone_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/2AOOUG9QY4YY'
      },
      {
        name: 'Introduction to Artificial Intelligence (AI)',
        issuer: 'IBM',
        date: 'Jul 31, 2025',
        imageUrl: "/images/introduction_to_artificial_intelligence__ai__coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/W5GIHZV1991C'
      },
      {
        name: 'Introduction to Generative AI',
        issuer: 'Google Cloud',
        date: 'Jul 30, 2025',
        imageUrl: "/images/introduction_to_generative_ai_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/VUY4MQ7JEG3Q'
      },
      {
        name: 'AI Essentials',
        issuer: 'Intel',
        date: 'Jul 30, 2025',
        imageUrl: "/images/ai_essentials_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/4RNQ5TI5HC4Y'
      },
      {
        name: 'Microsoft Certified: Azure AI Fundamentals',
        issuer: 'Microsoft',
        date: 'May 29, 2024',
        imageUrl: "/images/artificial_intelligence_on_microsoft_azure_coursera.jpg",
        verifyUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/KatlegoMakete/CFFSR8U9?sharingId=B68336AD14220C2C'
      },
      {
        name: 'Trustworthy AI: Managing Bias, Ethics, and Accountability',
        issuer: 'Johns Hopkins University',
        date: 'Sep 5, 2025',
        imageUrl: "/images/artificial_intelligence_on_microsoft_azure_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/KDZB53LMP43J'
      },
      {
        name: 'Building AI Powered Chatbots Without Programming',
        issuer: 'IBM',
        date: 'Sep 1, 2025',
        imageUrl: "/images/artificial_intelligence_on_microsoft_azure_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/993V6D3PJKCX'
      }
    ]
  },
  {
    title: 'Professional Development',
    certifications: [
      {
        name: 'Financial Planning for Young Adults',
        issuer: 'University of Illinois',
        date: 'Aug 21, 2025',
        imageUrl: "/images/financial_planning_for_young_adults_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/L2PXZPMIVMKG'
      },
      {
        name: 'Emotional Intelligence',
        issuer: 'Arizona State University',
        date: 'Aug 11, 2025',
        imageUrl: "/images/emotional_intelligence_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/7724EA4BPJ85'
      },
      {
        name: 'Leading with Impact: Team Dynamics, Strategy and Ethics',
        issuer: 'Coursera Instructor Network',
        date: 'Aug 8, 2025',
        imageUrl: "/images/leading_with_impact_team_dynamics__strategy_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/7WZCQGVYZE1M'
      },
      {
        name: 'Finding Your Professional Voice: Confidence & Impact',
        issuer: 'University of London',
        date: 'Aug 7, 2025',
        imageUrl: "/images/finding_your_professional_voice_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/KM5BXYB81CCJ'
      },
      {
        name: 'Work Smarter, Not Harder: Time Management',
        issuer: 'University of California, Irvine',
        date: 'Aug 7, 2025',
        imageUrl: "/images/work_smarter__not_harder_time_management_for_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/ML6SABWDWJT0'
      },
      {
        name: 'Introduction to Personal Branding',
        issuer: 'University of Virginia',
        date: 'Aug 7, 2025',
        imageUrl: "/images/introduction_to_personal_branding_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/UU1UEDVUSV25'
      },
      {
        name: 'Developing Interpersonal Skills',
        issuer: 'IBM',
        date: 'Aug 6, 2025',
        imageUrl: "/images/developing_interpersonal_skills_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/3QE549QL6V5M'
      },
      {
        name: 'Verbal Communications and Presentation Skills',
        issuer: 'Starweaver',
        date: 'Jul 30, 2025',
        imageUrl: "/images/verbal_communications_and_presentation_skills_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/H4IAVOOTJVNY'
      },
      {
        name: 'Write Professional Emails in English',
        issuer: 'Georgia Institute of Technology',
        date: 'Jul 30, 2025',
        imageUrl: "/images/write_professional_emails_in_english_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/BUIB78D2SQZ0'
      },
      {
        name: 'Active Listening: Enhancing Communication Skills',
        issuer: 'Coursera Instructor Network',
        date: 'Jul 30, 2025',
        imageUrl: "/images/active_listening_enhancing_communication_skills_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/72QQM5IRJROV'
      },
      {
        name: 'Negotiation skills: Negotiate and resolve conflict',
        issuer: 'Macquarie University',
        date: 'Sep 9, 2025',
        imageUrl: "/images/artificial_intelligence_on_microsoft_azure_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/T2RH269Z1XLC'
      },
      {
        name: 'Solving Problems with Creative and Critical Thinking',
        issuer: 'IBM',
        date: 'Sep 8, 2025',
        imageUrl: "/images/artificial_intelligence_on_microsoft_azure_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/GHMI4RDRASAT'
      },
      {
        name: 'Grit and Growth Mindset',
        issuer: 'Arizona State University',
        date: 'Sep 8, 2025',
        imageUrl: "/images/artificial_intelligence_on_microsoft_azure_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/QL702FQM4OZI'
      },
      {
        name: 'Positive Psychology: Resilience Skills',
        issuer: 'University of Pennsylvania',
        date: 'Sep 8, 2025',
        imageUrl: "/images/artificial_intelligence_on_microsoft_azure_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/MUA9UNXE4BFA'
      },
      {
        name: 'Managing Conflicts with Cultural and Emotional Intelligence',
        issuer: 'University of Maryland',
        date: 'Sep 5, 2025',
        imageUrl: "/images/artificial_intelligence_on_microsoft_azure_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/LZFJB5ZAMOUX'
      },
      {
        name: 'Psychology of the Self',
        issuer: 'American Psychological Association',
        date: 'Sep 4, 2025',
        imageUrl: "/images/artificial_intelligence_on_microsoft_azure_coursera.jpg",
        verifyUrl: 'https://coursera.org/verify/L9CYDH3CVRAQ'
      }
    ]
  }
];
