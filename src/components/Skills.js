import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel, 
  faNodeJs, faPython, faAws, faDocker, faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faBrain, faRobot } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';
import { motion } from 'framer-motion';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  
  const [listSkills] = useState([
    {
      name: 'Python',
      icon: faPython,
      category: 'Backend',
      proficiency: 95,
      color: '#3776AB'
    },
    {
      name: 'JavaScript',
      icon: faJs,
      category: 'Frontend',
      proficiency: 92,
      color: '#F7DF1E'
    },
    {
      name: 'React.js',
      icon: faReact,
      category: 'Frontend',
      proficiency: 90,
      color: '#61DAFB'
    },
    {
      name: 'Node.js',
      icon: faNodeJs,
      category: 'Backend',
      proficiency: 88,
      color: '#339933'
    },
    {
      name: 'AWS',
      icon: faAws,
      category: 'Cloud',
      proficiency: 85,
      color: '#FF9900'
    },
    {
      name: 'AI/ML',
      icon: faBrain,
      category: 'AI',
      proficiency: 87,
      color: '#FF6B6B'
    },
    {
      name: 'Vue.js',
      icon: faVuejs,
      category: 'Frontend',
      proficiency: 82,
      color: '#4FC08D'
    },
    {
      name: 'Docker',
      icon: faDocker,
      category: 'DevOps',
      proficiency: 80,
      color: '#2496ED'
    },
    {
      name: 'SQL',
      icon: faDatabase,
      category: 'Database',
      proficiency: 90,
      color: '#4479A1'
    },
    {
      name: 'Laravel',
      icon: faLaravel,
      category: 'Backend',
      proficiency: 85,
      color: '#FF2D20'
    },
    {
      name: 'HTML5',
      icon: faHtml5,
      category: 'Frontend',
      proficiency: 95,
      color: '#E34F26'
    },
    {
      name: 'CSS3',
      icon: faCss3,
      category: 'Frontend',
      proficiency: 93,
      color: '#1572B6'
    },
    {
      name: 'LangChain',
      icon: faRobot,
      category: 'AI',
      proficiency: 88,
      color: '#00C853'
    },
    {
      name: 'GitHub',
      icon: faGithub,
      category: 'DevOps',
      proficiency: 90,
      color: '#181717'
    }
  ]);

  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'AI', 'Cloud', 'DevOps', 'Database'];

  const filteredSkills = activeCategory === 'All' 
    ? listSkills 
    : listSkills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section id="Skills" className='skills' ref={scrollTab}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-badge">Expertise</div>
        <h2 className="title gradient-text" ref={(el) => el && divs.current.push(el)}>
          Skills & Technologies
        </h2>
        <p className="section-subtitle">
          Building modern solutions with cutting-edge technologies
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        className="category-filter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category, idx) => (
          <button
            key={idx}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        key={activeCategory}
      >
        {filteredSkills.map((value, key) => (
          <motion.div 
            className='skill-card' 
            key={key} 
            ref={(el) => el && divs.current.push(el)}
            variants={skillVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              '--skill-color': value.color
            }}
          >
            <div className="skill-card-inner">
              <div className="skill-icon-wrapper">
                <FontAwesomeIcon icon={value.icon} className="skill-icon" />
                <div className="icon-glow" style={{ backgroundColor: value.color }}></div>
              </div>
              
              <h3 className="skill-name">{value.name}</h3>
              
              <div className="skill-category-badge">{value.category}</div>
              
              {/* Proficiency Bar */}
              <div className="proficiency-container">
                <div className="proficiency-label">
                  <span>Proficiency</span>
                  <span className="proficiency-value">{value.proficiency}%</span>
                </div>
                <div className="proficiency-bar">
                  <motion.div 
                    className="proficiency-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: key * 0.05, ease: "easeOut" }}
                    style={{ backgroundColor: value.color }}
                  />
                </div>
              </div>
            </div>
            
            {/* Hover effect */}
            <div className="card-shine"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Info */}
      <motion.div 
        className="skills-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p>Always learning and exploring new technologies to stay at the forefront of innovation</p>
      </motion.div>
    </section>
  );
}

export default Skills;
