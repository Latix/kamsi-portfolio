import React, { useRef } from 'react';
import CustomHook from './CustomHook';
import { motion } from 'framer-motion';
import AnimatedAvatar from './AnimatedAvatar';

function Home() {
    const scrollTab = useRef();
    CustomHook(scrollTab);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const floatVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="Home" ref={scrollTab} className='home'>
            <motion.div 
                className="content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="greeting" variants={itemVariants}>
                    <span className="wave">👋</span> Hi, I'm
                </motion.div>
                
                <motion.div className="name" variants={itemVariants}>
                    <span className="gradient-text">KAMSI KODI</span>
                </motion.div>
                
                <motion.div className="title" variants={itemVariants}>
                    <span className="title-line">Full Stack Engineer</span>
                    <span className="title-accent"> • </span>
                    <span className="title-line">AI Specialist</span>
                </motion.div>

                <motion.div className="des" variants={itemVariants}>
                    With over 6 years of experience building and scaling web applications in 
                    <span className="highlight"> Fintech</span>, 
                    <span className="highlight"> HealthTech</span>, and 
                    <span className="highlight"> E-commerce</span>. 
                    I specialize in creating efficient, user-focused solutions with modern JavaScript 
                    frameworks like <span className="tech-tag">React.js</span> and <span className="tech-tag">Next.js</span>, 
                    paired with backend technologies such as <span className="tech-tag">Flask</span>, 
                    <span className="tech-tag">Node</span> and <span className="tech-tag">Laravel</span>.
                </motion.div>

                <motion.div 
                    className="cta-container"
                    variants={itemVariants}
                >
                    <a 
                        href="https://drive.google.com/file/d/1yMYqdhsc95HN-5I8zyS6Bzuike1GLjg3/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='btn-primary'
                    >
                        <span>Download CV</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 3V15M10 15L15 10M10 15L5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </a>
                    
                    <a 
                        href="#Projects" 
                        className='btn-secondary'
                    >
                        <span>View Projects</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </motion.div>

                {/* Stats */}
                <motion.div 
                    className="stats"
                    variants={itemVariants}
                >
                    <div className="stat-item">
                        <div className="stat-number">6+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Projects Delivered</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">15+</div>
                        <div className="stat-label">Technologies</div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div 
                className="avatar"
                variants={floatVariants}
                animate="animate"
            >
                <div className="card-3d">
                    <div className="card-glow"></div>
                    <AnimatedAvatar />
                    <div className="card-shine"></div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
                className="scroll-indicator"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    delay: 2,
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            >
                <div className="scroll-text">Scroll</div>
                <div className="scroll-arrow">↓</div>
            </motion.div>
        </section>
    );
}

export default Home;
