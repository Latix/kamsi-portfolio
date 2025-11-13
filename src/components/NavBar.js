import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { changeTabActive } from '../redux/actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const NavBar = ({activeTab}) => {
    const dispatch = useDispatch();
    const [linkNav] = useState(['Home', 'Skills', 'Projects', 'Contacts']);
    const [statusNav, changeStatusNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNav = () => {
        changeStatusNav(!statusNav);
    };

    const changeTab = (value) => {
        dispatch(changeTabActive(value));
        changeStatusNav(false);
    };

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const mobileMenuVariants = {
        hidden: { 
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        visible: { 
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const menuItemVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
            }
        })
    };

    return (
        <>
            <motion.header 
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                variants={navVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="navbar-container">
                    <Link to="Home" spy={true} smooth={true} duration={500}>
                        <motion.div 
                            className="logo"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Logo size={45} />
                            <span className="logo-text">
                                <span className="gradient-text">Kamsi</span>
                            </span>
                        </motion.div>
                    </Link>

                    <nav className="desktop-nav">
                        {linkNav.map((value, index) => (
                            <Link 
                                key={value} 
                                to={value} 
                                spy={true} 
                                smooth={true} 
                                duration={500}
                                offset={-80}
                            >
                                <motion.span 
                                    className={`nav-link ${activeTab === value ? 'active' : ''}`}
                                    onClick={() => changeTab(value)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {value}
                                    <span className="nav-indicator"></span>
                                </motion.span>
                            </Link>
                        ))}
                    </nav>

                    <motion.a 
                        href="https://drive.google.com/file/d/1IGuWD6hh3ZMmlkeKU5h45_4rFhANVDVL/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-cta desktop-only"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download CV
                    </motion.a>

                    <motion.div 
                        className="menu-toggle" 
                        onClick={toggleNav}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FontAwesomeIcon icon={statusNav ? faTimes : faBars} />
                    </motion.div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {statusNav && (
                    <>
                        <motion.div 
                            className="mobile-menu-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleNav}
                        />
                        <motion.nav 
                            className="mobile-menu"
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <div className="mobile-menu-header">
                                <div className="logo">
                                    <Logo size={40} />
                                    <span className="logo-text gradient-text">Kamsi</span>
                                </div>
                                <button className="close-btn" onClick={toggleNav}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>

                            <div className="mobile-menu-links">
                                {linkNav.map((value, index) => (
                                    <Link 
                                        key={value} 
                                        to={value} 
                                        spy={true} 
                                        smooth={true} 
                                        duration={500}
                                        offset={-80}
                                    >
                                        <motion.div
                                            className={`mobile-nav-link ${activeTab === value ? 'active' : ''}`}
                                            onClick={() => changeTab(value)}
                                            custom={index}
                                            variants={menuItemVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover={{ x: 10 }}
                                        >
                                            <span className="link-number">0{index + 1}</span>
                                            <span className="link-text">{value}</span>
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>

                            <motion.div 
                                className="mobile-menu-footer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <a 
                                    href="https://drive.google.com/file/d/1IGuWD6hh3ZMmlkeKU5h45_4rFhANVDVL/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mobile-cta"
                                >
                                    Download CV
                                </a>
                            </motion.div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);
