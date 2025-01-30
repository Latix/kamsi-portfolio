import React, { useRef } from 'react'
import CustomHook from './CustomHook';
import { ReactComponent as MyIcon } from './svg/iterate.svg';
function Home() {
    const scrollTab = useRef();
    CustomHook(scrollTab);

    return (
        <section id="Home" ref={scrollTab} className='home'>
            <div className="content">
                <div className="name">
                    MY NAME IS <span>KAMSI KODI</span>
                </div>
                <div className="des">
                    {/* 30 */}
                    I’m a Full Stack Engineer with over 6 years of experience building and scaling web applications in industries like Fintech, HealthTech, and E-commerce. I specialize in creating efficient, user-focused solutions with modern JavaScript frameworks like React.js and Next.js, paired with backend technologies such as Flask, Node and Laravel. I’m skilled in strategic planning, integrating AI tools, and following best practices to deliver smooth, impactful user experiences. Whether it’s working with APIs, databases like MySQL, or cloud platforms like AWS and GCP, I focus on developing systems that are both robust and scalable. I’m passionate about driving innovation, whether it’s through automation, Web3, or AI-powered applications.
                </div>

                <a href="https://drive.google.com/file/d/1dcfJJlCb2KEdHUJvJ18a46tOHmkzkk-e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='animation active '>
                    Download My CV
                </a>
            </div>
            <div className="avatar">
                <div className="card">
                    <MyIcon />
                    {/* <img src="/iterate.png" alt="Kamsi Kodi" /> */}
                    {/* <div className="info">
                    <div>Developer</div>
                    <div>VietNamese</div>
                    <div>03/12</div>
                    <div>Male</div>
                </div> */}
                </div>
            </div>
        </section>
    )
}

export default Home
