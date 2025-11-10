import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Email',
      value: 'kamsikodi@gmail.com',
      icon: faEnvelope,
      link: 'mailto:kamsikodi@gmail.com',
      color: '#EA4335'
    },
    {
      title: 'Location',
      value: 'Remote • Global',
      icon: faLocationDot,
      link: null,
      color: '#4285F4'
    }
  ]);

  const [socialLinks] = useState([
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/kamsi-kodi',
      color: '#0A66C2'
    },
    {
      name: 'GitHub',
      icon: faGithub,
      link: 'https://github.com/Latix',
      color: '#181717'
    },
    {
      name: 'Twitter',
      icon: faTwitter,
      link: 'https://twitter.com/kamsikodi',
      color: '#1DA1F2'
    }
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  return (
    <section id="Contacts" className='contacts' ref={scrollTab}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-badge">Get In Touch</div>
        <h2 className="title gradient-text" ref={(el) => el && divs.current.push(el)}>
          Let's Work Together
        </h2>
        <p className="section-subtitle">
          Have a project in mind? Let's create something amazing together
        </p>
      </motion.div>

      <motion.div 
        className="contacts-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        ref={(el) => el && divs.current.push(el)}
      >
        <div className="contact-info">
          {listContacts.map((value, key) => (
            <motion.div 
              className='contact-card' 
              key={key}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              style={{ '--contact-color': value.color }}
            >
              {value.link ? (
                <a href={value.link} className="contact-link">
                  <div className="contact-icon" style={{ backgroundColor: `${value.color}20` }}>
                    <FontAwesomeIcon icon={value.icon} style={{ color: value.color }} />
                  </div>
                  <div className="contact-content">
                    <h3>{value.title}</h3>
                    <p>{value.value}</p>
                  </div>
                </a>
              ) : (
                <>
                  <div className="contact-icon" style={{ backgroundColor: `${value.color}20` }}>
                    <FontAwesomeIcon icon={value.icon} style={{ color: value.color }} />
                  </div>
                  <div className="contact-content">
                    <h3>{value.title}</h3>
                    <p>{value.value}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="social-links"
          variants={itemVariants}
        >
          <h3 className="social-title">Connect With Me</h3>
          <div className="social-buttons">
            {socialLinks.map((social, key) => (
              <motion.a
                key={key}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: social.color
                }}
                whileTap={{ scale: 0.95 }}
                style={{ '--social-color': social.color }}
              >
                <FontAwesomeIcon icon={social.icon} />
                <span>{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="cta-section"
          variants={itemVariants}
        >
          <div className="cta-content">
            <h3>Ready to Start a Project?</h3>
            <p>I'm available for freelance work and exciting opportunities</p>
            <a 
              href="mailto:kamsikodi@gmail.com?subject=Project Inquiry" 
              className="cta-button"
            >
              Send Me a Message
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; {new Date().getFullYear()} Kamsi Kodi. Built with React & Three.js</p>
      </motion.footer>
    </section>
  );
}

export default Contacts;
