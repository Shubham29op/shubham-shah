import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Star, X, Send, Bot } from 'lucide-react';
import emailjs from 'emailjs-com'; // Add this import at the top

// ------------------- DATA -------------------
// Centralized data for easy updates
const personalInfo = {
  name: "Shubham Shah",
  initials: "SNS",
  titles: ["Full Stack Developer", "Data Engineer", "Product Developer"],
  about: [
    "Proactive Computer Engineering student specializing in Data Science. Proficient in Python, SQL, and ETL processes, with a strong foundation in backend development and machine learning, ready to build scalable data pipelines."
  ],
  contact: {
    email: "shubhamshah2908@gmail.com",
    phone: "+91 7977775701",
    location: "Mumbai, India",
  },
  socials: [
    { id: 'linkedin', icon: Linkedin, url: 'https://www.linkedin.com/in/shubham-shah29' }, // Add actual LinkedIn URL
    { id: 'github', icon: Github, url: 'https://github.com/Shubham29op' }, // Add actual Github URL
    { id: 'mail', icon: Mail, url: 'mailto:shubhamshah2908@gmail.com' },
  ]
};

const navigationLinks = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];

const educationData = [
    {
        degree: "B. Tech in Computer Engineering",
        institution: "K J Somaiya Institute of Technology",
        details: "Honours in Data Science",
        period: "June 2022 - April 2026",
        gpa: "8.56 GPA"
    },
    {
        degree: "HSC (12th Grade)",
        institution: "AAVP Junior College, Mumbai",
        details: "Science Stream",
        period: "2020 - 2022",
        gpa: "71%"
    },
    {
        degree: "ICSE (10th Grade)",
        institution: "Smt. Nanavati English High School, Mumbai",
        details: "",
        period: "2019 - 2020",
        gpa: "93.80%"
    }
];

const experienceData = [
    {
        role: "Product Developer",
        company: "Data Acies, Texas",
        period: "Jun 2025 - Present",
        description: "Built AI-powered customer service features using Python and React. Developed RESTful APIs for chatbot, ticket system, and feedback workflows. Collaborated on real-time support systems with cross-functional teams."
    },
    {
        role: "Backend Engineer Intern",
        company: "SpacECE, Pune",
        period: "Jan 2025 - Feb 2025",
        description: "Led backend development for HR tool, Toy Rental App, and Bug Tracker. Designed RESTful APIs, optimized SQL queries, and resolved 100+ bugs. Worked with DevOps and frontend teams on scalable deployment."
    },
    {
        role: "Project Developer",
        company: "All World Gayatri Pariwar",
        period: "Aug 2024 - Nov 2024",
        description: "Built a Book Campaign System for registrations and inventory tracking. Handled end-to-end development from frontend to backend deployment."
    },
    {
        role: "Cloud Machine Learning Intern",
        company: "Azure Development Community (Microsoft)",
        period: "June 2024",
        description: "Completed Azure ML Series: Built and deployed predictive models. Worked with Azure ML Studio for training, evaluation, and deployment."
    }
];

const projectsData = [
  {
    title: "Civic-Circle : NGO Volunteer Platform",
    description: "Achieved 96% accuracy in ML-based Volunteer Event Recommendation. Integrated Attendance, Chatbot, and enhanced interactivity. Certified by Robinhood Army, Bhoomi Foundation, and more.",
    tech: ["MERN", "Machine Learning", "Google APIs"],
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=250&fit=crop&q=80",
    link: "https://docs.google.com/presentation/d/1gJXzK9h2_r94qTBEamEpAeDj-5YXhfIIrk3CFnFoGYY/edit?usp=sharing"
  },
  {
    title: "AI PrepGem Interview Platform",
    description: "Developed an AI-powered platform that provides personalized mock interviews and instant feedback for job seekers using Large Language Models and composite neural networks.",
    tech: ["Python", "ReactJS", "Express.js", "APIs"],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=250&fit=crop&q=80",
    link: "https://drive.google.com/file/d/1GlSWExbbIYsIoo2xC4wTq27OGFdcSe7J/view?usp=drive_link"
  },
  {
    title: "Smart Object Dimensioning System",
    description: "Developed a smartphone-based system to measure real-world object dimensions with ±2.5% accuracy using computer vision and YOLOv8.",
    tech: ["Python", "OpenCV", "TensorFlow"],
    image: "https://naadispeaks.blog/wp-content/uploads/2021/03/1_8gmgaakfdi-9ohy5ca93xq.png?w=400&h=250&fit=crop&q=80",
    link: "https://docs.google.com/presentation/d/1XvkguIepBvrnOaQY6S8M9RVGQVUhRRSc0m2YorJlVFE/edit?usp=sharing"
  },
    {
    title: "GEO Todo List Mobile App",
    description: "A mobile app that integrates to-do lists with location awareness. Users receive notifications when they are near the location associated with a task, helping them complete tasks contextually and efficiently.",
    tech: ["FLutter", "Google Maps API", "Push Notifications"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&q=80",
    link: ""
  },
    {
    title: "Book Stock Pro Website",
    description: "Developed for All World Gayatri Pariwar, this website manages book campaign registrations and tracks inventory efficiently. Streamlines distribution and reporting for large-scale campaigns.",
    tech: ["ReactJS", "Node.js", "MongoDB","CRUD Operations"],
    image: "https://static9.depositphotos.com/1377579/1083/i/450/depositphotos_10839214-stock-photo-bookstores-shelves-corner.jpg?w=400&h=250&fit=crop&q=80",
    link: "https://www.awgp.org/en/"
  }
];

const skillsData = {
  technical: [
    { name: "Python", level: 95 },
    { name: "SQL", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "ReactJS", level: 80 },
    { name: "Machine Learning", level: 100 },
    { name: "Fast API", level: 90 }
  ],
  soft: ["Communication", "Leadership", "People Management", "Rapport Building", "Problem Solving", "Project Management"]
};

// ------------------- HOOKS -------------------

/**
 * Custom hook to detect when an element is visible on screen.
 * Uses the Intersection Observer API for performance.
 */
const useOnScreen = (ref, options) => {
    const [isIntersecting, setIntersecting] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.unobserve(entry.target); // Stop observing once visible
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return isIntersecting;
};


// ------------------- COMPONENTS -------------------

/**
 * A wrapper component to animate its children when they become visible.
 */
const AnimatedContent = ({ children, className, delay = 0 }) => {
    const ref = React.useRef(null);
    const isVisible = useOnScreen(ref, { threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`${className} transition-all ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDuration: '700ms', transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

/**
 * Gemini-Powered Chatbot Component
 */
const GeminiChatbot = ({ isOpen, onClose }) => {
    const [messages, setMessages] = React.useState([
        { role: 'model', text: `Hello! I'm an AI assistant. Ask me anything about ${personalInfo.name}'s skills, experience, or projects.` }
    ]);
    const [input, setInput] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const messagesEndRef = React.useRef(null);

    const getSystemContext = () => {
        const portfolioData = { personalInfo, education: educationData, experience: experienceData, projects: projectsData, skills: skillsData };
        return `You are a helpful AI assistant for a personal portfolio website. Your name is Spark. You are representing a person named ${personalInfo.name}. Your goal is to answer questions from potential employers or visitors based ONLY on the information provided below. Be friendly, professional, and keep your answers concise and informative. Do not make up information. If a question cannot be answered with the given data, politely say that you don't have that information. Here is all the information about ${personalInfo.name}: ${JSON.stringify(portfolioData, null, 2)}`;
    };

    const callGeminiAPI = async (chatHistory) => {
setIsLoading(true);

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

// Put system prompt in system_instruction (not as a role)
const systemInstruction = { parts: [{ text: getSystemContext() }] };

// Map chat history into Gemini's role/parts format
const contents = chatHistory.map(msg => ({
  role: msg.role === "model" ? "model" : "user",
  parts: [{ text: msg.text }]
}));

// Final request body
const payload = {
  system_instruction: systemInstruction,
  contents: contents
};


        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error(`API call failed with status: ${response.status}`);
            const result = await response.json();
            if (result.candidates && result.candidates.length > 0) {
                const modelResponse = result.candidates[0].content.parts[0].text;
                setMessages(prev => [...prev, { role: 'model', text: modelResponse }]);
            } else {
                setMessages(prev => [...prev, { role: 'model', text: "Sorry, I couldn't get a response. Please try again." }]);
            }
        } catch (error) {
            console.error("Gemini API call error:", error);
            setMessages(prev => [...prev, { role: 'model', text: "Sorry, something went wrong. Please check the console for details." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const callHuggingFaceAPI = async (chatHistory) => {
        setIsLoading(true);

        const apiKey = process.env.REACT_APP_HF_API_KEY;
        const apiUrl = "https://api-inference.huggingface.co/models/google/gemma-3-270m"; // Updated model

        // Combine chat history into a single prompt
        const prompt = chatHistory.map(msg => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.text}`).join("\n") + "\nAssistant:";

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ inputs: prompt })
            });
            if (!response.ok) throw new Error(`API call failed with status: ${response.status}`);
            const result = await response.json();
            // Hugging Face returns an array with 'generated_text'
            const modelResponse = Array.isArray(result) && result[0]?.generated_text
                ? result[0].generated_text
                : "Sorry, I couldn't get a response. Please try again.";
            setMessages(prev => [...prev, { role: 'model', text: modelResponse }]);
        } catch (error) {
            console.error("Hugging Face API call error:", error);
            setMessages(prev => [...prev, { role: 'model', text: "Sorry, something went wrong. Please check the console for details." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;
        const userMessage = { role: 'user', text: input };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        callHuggingFaceAPI(newMessages);
    };

    React.useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 border border-purple-500 rounded-2xl shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col transform transition-all duration-300 scale-100">
                <header className="flex items-center justify-between p-4 border-b border-gray-700">
                    <div className="flex items-center space-x-3"><Bot className="text-purple-400" size={24} /><h2 className="text-xl font-bold text-white">Ask About Me</h2></div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors"><X size={24} /></button>
                </header>
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                            {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0"><Bot size={20} /></div>}
                            <div className={`px-4 py-2 rounded-2xl max-w-md ${msg.role === 'user' ? 'bg-blue-600 rounded-br-none' : 'bg-gray-700 rounded-bl-none'}`}><p className="text-white whitespace-pre-wrap">{msg.text}</p></div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 animate-pulse"><Bot size={20} /></div>
                            <div className="px-4 py-2 rounded-2xl bg-gray-700 rounded-bl-none"><div className="flex items-center space-x-1"><span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span><span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span><span className="w-2 h-2 bg-white rounded-full animate-bounce"></span></div></div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
                    <div className="flex items-center bg-gray-700 rounded-full px-2">
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="e.g., What are his top technical skills?" className="w-full bg-transparent p-3 text-white placeholder-gray-400 focus:outline-none" disabled={isLoading} />
                        <button type="submit" disabled={isLoading || !input.trim()} className="bg-purple-600 hover:bg-purple-700 rounded-full p-3 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"><Send size={20} className="text-white" /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const AnimatedBackground = () => {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); let animationId; let particles = []; const particleCount = 100;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth; canvas.height = window.innerHeight; particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 1.5, vy: (Math.random() - 0.5) * 1.5, size: Math.random() * 2 + 1, hue: Math.random() * 360 });
      }
    };
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 25, 0.1)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
      const scrollY = window.scrollY; const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollHeight > 0 ? scrollY / scrollHeight : 0;
      particles.forEach((p1, i) => {
        p1.x += p1.vx; p1.y += p1.vy; p1.hue = (p1.hue + 0.5 + scrollProgress * 1.5) % 360;
        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1; if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;
        ctx.beginPath(); ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2); ctx.fillStyle = `hsla(${p1.hue}, 70%, 60%, 0.8)`; ctx.fill();
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x; const dy = p1.y - p2.y; const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.strokeStyle = `hsla(${p1.hue}, 70%, 60%, ${0.2 * (1 - distance / 120)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        });
      });
      animationId = requestAnimationFrame(animate);
    };
    resizeCanvas(); animate();
    window.addEventListener('resize', resizeCanvas);
    return () => { window.removeEventListener('resize', resizeCanvas); cancelAnimationFrame(animationId); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900" />;
};

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`min-h-screen py-20 relative z-10 flex items-center ${className}`}>
    <div className="max-w-6xl mx-auto px-6 w-full">{children}</div>
  </section>
);

const SectionTitle = ({ children }) => (
  <AnimatedContent><h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{children}</h2></AnimatedContent>
);

const Navbar = ({ activeSection, scrollToSection }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-md border-b border-white border-opacity-10">
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{personalInfo.name}</div>
        <div className="hidden md:flex space-x-8">
          {navigationLinks.map((section) => (<button key={section} onClick={() => scrollToSection(section)} className={`capitalize transition-colors duration-300 hover:text-purple-400 ${activeSection === section ? 'text-purple-400' : 'text-white'}`}>{section}</button>))}
        </div>
      </div>
    </div>
  </nav>
);

const HeroSection = ({ scrollToSection }) => (
  <Section id="home" className="justify-center">
    <div className="text-center max-w-4xl mx-auto">
      <AnimatedContent delay={100}><div className="mb-8"><div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6 flex items-center justify-center text-4xl font-bold shadow-lg">{personalInfo.initials}</div></div></AnimatedContent>
      <AnimatedContent delay={200}><h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">{personalInfo.name}</h1></AnimatedContent>
      <AnimatedContent delay={300}><div className="text-2xl md:text-3xl mb-8 text-gray-300"><div className="mb-2">{personalInfo.titles[0]}</div><div className="text-xl text-purple-400">{personalInfo.titles.slice(1).join(' • ')}</div></div></AnimatedContent>
      <AnimatedContent delay={400}><div className="flex justify-center space-x-6 mb-12"><a href="https://drive.google.com/file/d/11jW4-A0Dd8uXjhB434T1PKqYN92jgeVf/view?usp=sharing" download className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-lg"><Download size={20} /><span>Download Resume</span></a></div></AnimatedContent>
      <AnimatedContent delay={500}><div onClick={() => scrollToSection('about')} className="cursor-pointer animate-bounce mx-auto w-fit"><Star size={32} className="text-purple-400" /></div></AnimatedContent>
    </div>
  </Section>
);

const AboutSection = () => (
  <Section id="about">
    <div>
      <SectionTitle>About Me</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedContent delay={200}>
          <div className="space-y-6">
            {personalInfo.about.map((paragraph, i) => (<p key={i} className="text-lg text-gray-300 leading-relaxed">{paragraph}</p>))}
            <div className="flex items-center space-x-6 pt-6">{personalInfo.socials.map(social => (<a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"><social.icon size={32} /></a>))}</div>
          </div>
        </AnimatedContent>
        <AnimatedContent delay={300}>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1">
                <img 
  src="/profile.jpg" 
  alt="Profile" 
  className="w-full h-full rounded-full object-cover" 
/>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-4xl animate-pulse">⭐</div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  </Section>
);

const EducationSection = () => (
  <Section id="education">
    <div>
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <AnimatedContent key={index} delay={index * 150}>
            <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-10 hover:border-purple-400 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">{edu.degree}</h3>
                  <p className="text-xl text-white mb-2">{edu.institution}</p>
                  <p className="text-gray-400">{edu.details}</p>
                </div>
                <div className="text-left md:text-right mt-4 md:mt-0 flex-shrink-0">
                  <p className="text-purple-400 font-semibold">{edu.period}</p>
                  <p className="text-gray-400">
                    {edu.degree.startsWith("B. Tech")
                      ? `GPA: ${edu.gpa}`
                      : `Percentage: ${edu.gpa}`}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  </Section>
);

const ExperienceSection = () => (
  <Section id="experience">
    <div>
      <SectionTitle>Experience</SectionTitle>
      <div className="relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>
        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <AnimatedContent key={index} delay={index * 150}>
              <div className="relative pl-12 md:pl-20">
                <div className="absolute left-4 md:left-8 top-2 w-4 h-4 bg-purple-400 rounded-full transform -translate-x-1/2 border-4 border-gray-900"></div>
                <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-10 hover:border-purple-400 transition-all duration-300">
                  <p className="text-gray-400 mb-2 float-right">{job.period}</p><h3 className="text-2xl font-bold text-purple-400 mb-2">{job.role}</h3>
                  <p className="text-xl text-white mb-4">{job.company}</p><p className="text-gray-300">{job.description}</p>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

const ProjectsSection = () => (
  <Section id="projects">
    <div>
      <SectionTitle>PROJECTS</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <AnimatedContent key={index} delay={index * 150}>
            <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-2xl overflow-hidden border border-white border-opacity-10 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x250/1f2937/9333ea?text=Image+Error'; }}/>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3><p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">{project.tech.map((tech, techIndex) => (<span key={techIndex} className="px-3 py-1 bg-purple-600 bg-opacity-30 text-purple-300 rounded-full text-sm">{tech}</span>))}</div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-auto"><span>View Project</span><ExternalLink size={16} /></a>
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  </Section>
);

const SkillsSection = () => (
  <Section id="skills">
    <div>
      <SectionTitle>Skills</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <AnimatedContent delay={200}>
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">{skillsData.technical.map((skill, index) => (<div key={index} className="space-y-2"><div className="flex justify-between"><span className="text-white font-medium">{skill.name}</span><span className="text-purple-400">{skill.level}%</span></div><div className="w-full bg-gray-700 rounded-full h-3"><div className="bg-gradient-to-r from-purple-400 to-blue-400 h-3 rounded-full" style={{ width: `${skill.level}%` }}></div></div></div>))}</div>
          </div>
        </AnimatedContent>
        <AnimatedContent delay={300}>
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">{skillsData.soft.map((skill, index) => (<div key={index} className="bg-black bg-opacity-30 backdrop-blur-md rounded-xl p-4 border border-white border-opacity-10 hover:border-purple-400 transition-all duration-300 text-center"><span className="text-white font-medium">{skill}</span></div>))}</div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  </Section>
);

const ContactSection = () => {
  const [status, setStatus] = React.useState('');
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  try {
await emailjs.sendForm(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  e.target,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY   // ✅ correct now
);
console.log("Service:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log("Template:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
console.log("Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);



    setStatus("✅ Message sent successfully!");
    e.target.reset();
  } catch (error) {
    console.error("EmailJS Error:", error);
    setStatus(" Failed to send message. Please try again.");
  }
};


  return (
    <Section id="contact">
      <div>
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedContent delay={200}>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">Let's Work Together</h3>
              <p className="text-xl text-gray-300">I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hello, feel free to reach out!</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4"><Mail className="text-purple-400" size={24} /><a href={`mailto:${personalInfo.contact.email}`} className="text-white hover:text-purple-400">{personalInfo.contact.email}</a></div>
                <div className="flex items-center space-x-4"><Phone className="text-purple-400" size={24} /><span className="text-white">{personalInfo.contact.phone}</span></div>
                <div className="flex items-center space-x-4"><MapPin className="text-purple-400" size={24} /><span className="text-white">{personalInfo.contact.location}</span></div>
              </div>
            </div>
          </AnimatedContent>
          <AnimatedContent delay={300}>
            <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"/>
                <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"/>
                <textarea name="message" placeholder="Your Message" rows="5" required className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none"></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">Send Message</button>
                {status && <p className="text-purple-400 mt-4">{status}</p>}
              </form>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </Section>
  );
};

// ------------------- MAIN APP COMPONENT -------------------

const Portfolio = () => {
  const [activeSection, setActiveSection] = React.useState('home');
  const [isChatbotOpen, setIsChatbotOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentSection = navigationLinks.find(sectionId => {
        const element = document.getElementById(sectionId); if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight * 0.5;
      });
      if (currentSection) { setActiveSection(currentSection); } 
      else {
        const scrollY = window.scrollY; const windowHeight = window.innerHeight; const docHeight = document.documentElement.scrollHeight;
        if (scrollY + windowHeight >= docHeight - 50) { setActiveSection('contact'); }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden font-sans">
      <AnimatedBackground />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="py-8 text-center text-gray-400 relative z-10 border-t border-white border-opacity-10">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </footer>
      
      <button
        onClick={() => setIsChatbotOpen(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-40"
        aria-label="Open AI assistant"
      >
        <Bot size={28} />
      </button>

      <GeminiChatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  );
};

export default Portfolio;
