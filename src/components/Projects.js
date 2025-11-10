import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

function Projects() {
  const [listProjects] = useState([
    {
      name: 'bckrs.ai',
      des: 'An AI-native intelligence platform transforming venture capital and private equity operations by connecting Venture firms, LPs, and startups through advanced data analytics. With sophisticated automation capabilities, bckrs empowers investors with cutting-edge tools for portfolio analysis, firm scoring, document processing, and market intelligence, driving data-driven investment decisions and expanding access to comprehensive venture capital insights.',
      role: 'AI Engineer',
      language: 'Python, PostgreSQL, Flask, LangChain, Supabase, CI/CD, SQL, Automation, RAG, Generative AI, Redis, Playwright, OpenAI, Anthropic Claude, Perplexity AI.',
      images: '/bckrs.png',
      link: 'https://www.bckrs.ai/',
      tags: ['AI', 'FinTech', 'Data Analytics']
    },
    {
      name: 'Infiuss Health',
      des: 'An AI-driven platform revolutionising clinical research by connecting researchers, patients, and healthcare facilities. With a lean team of under 50 employees, Infiuss empowers researchers with cutting-edge tools for study planning, participant recruitment, and data management, driving innovation and expanding access to vital healthcare insights across the continent.',
      role: 'AI Fullstack Engineer',
      language: 'PostgreSQL, LangChain, GraphQL, Python, HTML, CSS, Jira, Javascript, MYSQL, REST, AWS, Nuxt.JS, SEO, Laravel, Node.JS, Machine Learning, Automation, RAG',
      images: '/probe.png',
      link: 'https://infiuss.com',
      tags: ['AI', 'HealthTech', 'Full Stack']
    },
    {
      name: 'Woven Finance',
      des: 'Woven Finance simplifies day-to-day business transactions, making digital payments and reconciliations super easy for your business.',
      role: 'Fullstack Engineer',
      language: 'Javascript, HTML, GraphQL, Jira, Jinja, CSS, React.JS, REST, Postman, SEO, NodeJS, CI/CD, Vue.JS, MySQL, PostgreSQL, AWS',
      images: '/woven.png',
      link: 'https://woven.finance/',
      tags: ['FinTech', 'Full Stack', 'Payments']
    },
    {
      name: 'SIMROP (SIM Registration Operations Portal)',
      des: 'SIMROP is a management portal that allows MTN and their outlets to easily manage all SIM registration activities of agents and dealers in one place. An extension of BioSmart, the portal helps you monitor and control agents, track devices & kits, and manage customer information from anywhere.',
      role: 'Software Engineer, Automation Tester',
      language: 'HTML5, CSS3, Selenium, Java, TDD, Jenkins',
      images: '/simrop.png',
      link: 'https://sraa.mtnnigeria.net/simrop/',
      tags: ['Enterprise', 'Automation', 'Testing']
    },
    {
      name: 'Workwise Visitor Management',
      des: 'Whether you\'re managing a small office or a large corporate campus, wVisitor has you covered. Say goodbye to the hassle of manual visitor logs and hello to a smarter, more streamlined way of managing visitors with wVisitor.',
      role: 'Fullstack Engineer',
      language: 'HTML5, CSS3, Javascript, React.JS, Laravel, PHP, CI/CD, AWS, Postman, Node.JS',
      images: '/workwise.png',
      link: 'https://workwise.ng/',
      tags: ['SaaS', 'Enterprise', 'Full Stack']
    },
    {
      name: 'Netflix Clone',
      des: 'This is a simple netflix clone in react',
      role: 'Frontend-developer',
      language: 'HTML5, CSS3, ReactJS',
      images: '/netflix.png',
      link: 'https://silly-joliot-0ac098.netlify.app/',
      tags: ['React', 'Frontend', 'UI/UX']
    },
    {
      name: 'Gzero',
      des: 'GZERO Media is a company dedicated to providing the public with intelligent and engaging coverage of global affairs. It was created in 2017 as a subsidiary of Eurasia Group, the world\'s leading political risk analysis firm.',
      role: 'Platform Engineer',
      language: 'HTML5, CSS3, Javascript, REST API, Jinja',
      images: '/gzero.png',
      link: 'https://www.gzeromedia.com/',
      tags: ['Media', 'Platform', 'Full Stack']
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="Projects" className='projects' ref={scrollTab}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-badge">Portfolio</div>
        <h2 className="title gradient-text" ref={(el) => el && divs.current.push(el)}>
          Featured Projects
        </h2>
        <p className="section-subtitle">
          Transforming ideas into innovative digital solutions
        </p>
      </motion.div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {listProjects.map((value, key) => (
          <motion.div 
            className='project-card' 
            key={key} 
            ref={(el) => el && divs.current.push(el)}
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <div className="card-glow"></div>
            
            <div className="project-image-container">
              <a href={value.link} target="_blank" rel="noopener noreferrer">
                <OptimizedImage 
                  src={value.images} 
                  alt={value.name} 
                  className="project-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="image-overlay">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="overlay-icon" />
                  <span>View Live Project</span>
                </div>
              </a>
              <div className="project-tags">
                {value.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">
                {value.name}
                <a href={value.link} target="_blank" rel="noopener noreferrer" className="external-link">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </h3>
              
              <p className="project-description">{value.des}</p>

              <div className="project-details">
                <div className="detail-item">
                  <div className="detail-icon">
                    <FontAwesomeIcon icon={faPersonCircleQuestion} />
                  </div>
                  <div className="detail-content">
                    <h4>Role</h4>
                    <p>{value.role}</p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <FontAwesomeIcon icon={faEarthAmericas} />
                  </div>
                  <div className="detail-content">
                    <h4>Technologies</h4>
                    <div className="tech-pills">
                      {value.language.split(', ').slice(0, 6).map((tech, idx) => (
                        <span key={idx} className="tech-pill">{tech}</span>
                      ))}
                      {value.language.split(', ').length > 6 && (
                        <span className="tech-pill more">+{value.language.split(', ').length - 6}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
