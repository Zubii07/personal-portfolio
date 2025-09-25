import { useState, useEffect } from 'react';
import { skills } from '../../data/skills';
import { AnimatedElement, StaggeredContainer } from '../shared/AnimatedElement';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<
    'ai-ml' | 'web-dev' | 'tools'
  >('ai-ml');
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    // Trigger bar animation after a short delay
    const timer = setTimeout(() => {
      setBarsAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Reset bars when category changes
  useEffect(() => {
    setBarsAnimated(false);
    const timer = setTimeout(() => {
      setBarsAnimated(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const categories = [
    { id: 'ai-ml', name: 'AI & ML', icon: '🤖' },
    { id: 'web-dev', name: 'Web Development', icon: '🌐' },
    { id: 'tools', name: 'Tools & Platforms', icon: '🛠️' }
  ];

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: string } = {
      // AI & Machine Learning
      'Python': '🐍',
      TensorFlow: '🧠',
      PyTorch: '🔥',
      'Scikit-learn': '📊',
      Pandas: '🐼',
      NumPy: '🔢',
      'Agentic AI (LangChain, LangGraph)': '🤖',
      'Data Visualization (Matplotlib, Seaborn)': '📈',
      'Supervised Learning': '📊',
      'Unsupervised Learning': '📉',
      'Deep Learning': '🧠',
      'Natural Language Processing (NLP)': '💬',
      //'Computer Vision': '👁️',
      'Machine Learning Algorithms': '⚙️',
      'Data Preprocessing': '🔧',
      'Model Deployment': '🚀',
      'OpenAI API': '🤖',
      
      // Web Development
      'JavaScript (ES6+)': '📜',
      TypeScript: '📘',
      'React.js': '⚛️',
      'Next.js': '⚡',
      'Node.js': '🟢',
      'Express.js': '🚀',
      MongoDB: '🍃',
       MySQL: '🐬',
      'RESTful APIs': '🔗',
      'Python (Backend)': '🐍',
      Flask: '🧪',
      Django: '',
      FastAPI: '⚡',
      
      
      // Tools & Platforms
      'JWT Authentication': '🔐',
      Git: '📝',
      GitHub: '🐙',
      'Jupyter Notebook': '📓',
      'VS Code': '💻',
      'Postman (API Testing)': '📮',
      'C++ (Problem Solving)': '⚡'
    };
    return iconMap[skillName] || '💻';
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement
          animation="fade-in-up"
          duration={600}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specializing in AI/ML and Data Science with expertise in building intelligent, 
            agentic AI systems. Proficient in modern web development and equipped with 
            industry-standard tools to deliver innovative, data-driven solutions.
          </p>
        </AnimatedElement>

        {/* Category Tabs */}
        <AnimatedElement
          animation="fade-in-up"
          duration={500}
          delay={200}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 dark:bg-dark-700 rounded-lg p-1 flex">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as any)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ease-out hover:scale-105 active:scale-95 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-white dark:bg-dark-600 text-primary-600 dark:text-primary-400 shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </AnimatedElement>

        {/* Skills Grid */}
        <StaggeredContainer
          staggerDelay={80}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-dark-600 text-center group hover:shadow-2xl transition-all duration-300 ease-out hover:scale-105 cursor-pointer hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 transition-transform duration-200 group-hover:scale-110">
                {getSkillIcon(skill.name)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {skill.name}
              </h3>

              {/* Proficiency Percentage */}
              <div className="text-right mb-2">
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {skill.proficiency}%
                </span>
              </div>

              {/* Proficiency Bar */}
              <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2 mb-3 overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-1000 ease-out"
                  style={{
                    width: barsAnimated ? `${skill.proficiency}%` : '0%'
                  }}
                ></div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Proficiency Level
              </p>
            </div>
          ))}
        </StaggeredContainer>

        {/* Skills Summary */}
        <StaggeredContainer
          staggerDelay={150}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 rounded-lg hover:shadow-2xl transition-all duration-300 ease-out hover:scale-105 cursor-pointer hover:-translate-y-1">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2 transition-all duration-200 hover:scale-110">
              {skills.filter((s) => s.category === 'ai-ml').length}
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
              AI & ML Skills
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Machine Learning & Data Science
            </div>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-2xl transition-all duration-300 ease-out hover:scale-105 cursor-pointer hover:-translate-y-1">
            <div className="text-4xl font-bold text-secondary-600 dark:text-secondary-400 mb-2 transition-all duration-200 hover:scale-110">
              {skills.filter((s) => s.category === 'web-dev').length}
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
              Web Development
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Full-stack MERN development
            </div>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-2xl transition-all duration-300 ease-out hover:scale-105 cursor-pointer hover:-translate-y-1">
            <div className="text-4xl font-bold text-gray-600 dark:text-gray-400 mb-2 transition-all duration-200 hover:scale-110">
              {skills.filter((s) => s.category === 'tools').length}
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
              Tools & Platforms
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Development tools & platforms
            </div>
          </div>
        </StaggeredContainer>
      </div>
    </section>
  );
};

export default Skills;
