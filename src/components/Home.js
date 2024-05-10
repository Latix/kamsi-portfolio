import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>KAMSI KODI</span>
            </div>
            <div className="des">
                {/* 30 */}
                Full Stack Engineer with 6 years of experience developing and maintaining highly scalable applications in the Fintech and E-commerce industries. Skilled in strategic planning and utilising best practices and industry standards to enhance user experiences in web applications leading to a 50% increase in customer satisfaction. 
            </div>
            
            <a href="https://drive.google.com/file/d/1xhgbfU6TREI2ClfqtkfKstr6BMh3E1-3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>VietNamese</div>
                    <div>03/12</div>
                    <div>Male</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
