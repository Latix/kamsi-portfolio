import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'SIMROP (SIM Registration Operations Portal)',
    des: 'SIMROP is a management portal that allows MTN and their outlets to easily manage all SIM registration activities of agents and dealers in one place.An extension of BioSmart, the portal helps you monitor and control agents, track devices & kits, and manage customer information from anywhere.',
    role: 'Software Engineer, Automation Tester',
    language: 'HTML5, CSS3, Selenium, Java, TDD, Jenkins',
    images: '/simrop.png',
    link: 'https://sraa.mtnnigeria.net/simrop/'
  },
  {
    name: 'Woven Finance',
    des: 'Woven Finance simplifies day-to-day business transactions, making digital payments and reconciliations super easy for your business.',
    role: 'Software Engineer',
    language: 'HTML5, CSS3, Javascript, ReactJS, NodeJS, CI/CD, VueJS',
    images: '/woven.png',
    link: 'https://woven.finance/'
  },
  {
    name: 'Workwise Visitor Management',
    des: 'Whether you’re managing a small office or a large corporate campus, wVisitor has you covered. Say goodbye to the hassle of manual visitor logs and hello to a smarter, more streamlined way of managing visitors with wVisitor.',
    role: 'Frontend Developer',
    language: 'HTML5, CSS3, Javascript, React JS, Laravel, PHP, CI/CD',
    images: '/workwise.png',
    link: 'https://workwise.ng/'
  },
  {
    name: 'Netflix Clone',
    des: 'This is a simple netflix clone in react',
    role: 'Frontend-developer',
    language: 'HTML5, CSS3, ReactJS',
    images: '/netflix.png',
    link: 'https://silly-joliot-0ac098.netlify.app/'
  },
  {
    name: 'Gzero',
    des: 'GZERO Media is a company dedicated to providing the public with intelligent and engaging coverage of global affairs. It was created in 2017 as a subsidiary of Eurasia Group, the world\'s leading political risk analysis firm.',
    role: 'Frontend-developer',
    language: 'HTML5, CSS3, VanillaJS, API, Jinja',
    images: '/gzero.png',
    link: 'https://www.gzeromedia.com/'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section id="Projects" className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum. */}
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <a href={value.link} target="_blank">
                  <img src={value.images} alt="" />
                </a>
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Role</h4>
                        <div className="des">{value.role}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
