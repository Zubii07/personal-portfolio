import { FiCode, FiDatabase, FiMonitor, FiUsers } from 'react-icons/fi';
import { AnimatedElement } from '../shared/AnimatedElement';

const About = () => {
  const stats = [
    {
      icon: FiCode,
      number: '10+',
      label: 'Projects Completed',
      description: 'AI/ML Solutions'
    },
    {
      icon: FiDatabase,
      number: '2+',
      label: 'Years Experience',
      description: 'AI/ML Engineer'
    },
    {
      icon: FiMonitor,
      number: '15+',
      label: 'Technologies',
      description: 'Mastered skills'
    },
    {
      icon: FiUsers,
      number: '100%',
      label: 'Client Satisfaction',
      description: 'Quality focused'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement
          animation="fade-in-up"
          duration={600}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedElement
            animation="fade-in-left"
            duration={600}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              AI/ML Engineer
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I build AI systems that don't just work in notebooks, they ship, scale, 
              and hold up under real world pressure. As a freelance AI/ML Engineer, 
              I specialize in Generative AI, LLM-powered applications, and computer vision,
              turning research grade ideas into production ready solutions.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
               My toolkit: Python, TensorFlow, PyTorch, and scikit-learn for modeling 
               and deployment, plus hands-on experience with RAG pipelines, embeddings, 
               vector databases, LLM fine-tuning, and agentic AI systems that automate 
               workflows end to end.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I don't just talk about AI, I've shipped it. I engineered a 
              YOLO11m + BoT-SORT computer vision system for automatic passenger counting, 
              published in transportation research. I designed a deep learning risk-forecasting 
              and CVaR portfolio optimization pipeline for a quantitative finance client — 
              spanning GARCH baselines, LSTM/Transformer models, and stress-testing across historical
              market crashes. I've built recommender systems, fraud detection APIs, and real time 
              price intelligence platforms for retail clients across multiple markets.

            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm on a mission to keep pushing the boundary of what intelligent systems 
              can do and I'm looking for the right team to do it with.
            </p>

</AnimatedElement>

          {/* Right Content - Stats */}
          <AnimatedElement
            animation="fade-in-right"
            duration={600}
            delay={200}
            className="grid grid-cols-2 gap-6 md:grid-cols-3 auto-rows-fr self-start"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg text-center border border-gray-200 dark:border-dark-600 hover:shadow-2xl transition-all duration-300 ease-out hover:scale-105 cursor-pointer hover:-translate-y-1 h-full flex flex-col justify-center min-h-[180px]"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </AnimatedElement>
        </div>

      </div>
    </section>
  );
};

export default About;
