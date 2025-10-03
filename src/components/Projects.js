import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
  const [listProjects] = useState([
    {
      name: 'bckrs.ai',
      des: 'An AI-powered intelligence platform transforming venture capital and private equity operations by connecting Venture firms, LPs, and startups through advanced data analytics. With sophisticated automation capabilities, bckrs empowers investors with cutting-edge tools for portfolio analysis, firm scoring, document processing, and market intelligence, driving data-driven investment decisions and expanding access to comprehensive venture capital insights.',
      role: 'AI Engineer',
      language: 'Python, PostgreSQL, Flask, LangChain, Supabase, CI/CD, SQL, Automation, RAG, Generative AI, Redis, Playwright, OpenAI, Anthropic Claude, Perplexity AI.',
      images: '/bckrs.png',
      link: 'https://www.bckrs.ai/'
    },
    {
      name: 'Infiuss Probe',
      des: 'An AI-driven platform revolutionising clinical research by connecting researchers, patients, and healthcare facilities. With a lean team of under 50 employees, Infiuss empowers researchers with cutting-edge tools for study planning, participant recruitment, and data management, driving innovation and expanding access to vital healthcare insights across the continent.',
      role: 'AI Fullstack Engineer',
      language: 'PostgreSQL, LangChain, GraphQL, Python, HTML, CSS, Jira, Javascript, MYSQL, REST, AWS, Nuxt.JS, SEO, Laravel, Node.JS, Machine Learning, Automation, RAG',
      images: '/probe.png',
      link: 'https://infiuss.com'
    },
    {
      name: 'Woven Finance',
      des: 'Woven Finance simplifies day-to-day business transactions, making digital payments and reconciliations super easy for your business.',
      role: 'Fullstack Engineer',
      language: 'Javascript, HTML, GraphQL, Jira, Jinja, CSS, React.JS, REST, Postman, SEO, NodeJS, CI/CD, Vue.JS, MySQL, PostgreSQL, AWS',
      images: '/woven.png',
      link: 'https://woven.finance/'
    },
    {
      name: 'SIMROP (SIM Registration Operations Portal)',
      des: 'SIMROP is a management portal that allows MTN and their outlets to easily manage all SIM registration activities of agents and dealers in one place.An extension of BioSmart, the portal helps you monitor and control agents, track devices & kits, and manage customer information from anywhere.',
      role: 'Software Engineer, Automation Tester',
      language: 'HTML5, CSS3, Selenium, Java, TDD, Jenkins',
      images: '/simrop.png',
      link: 'https://sraa.mtnnigeria.net/simrop/'
    },
    {
      name: 'Workwise Visitor Management',
      des: 'Whether you’re managing a small office or a large corporate campus, wVisitor has you covered. Say goodbye to the hassle of manual visitor logs and hello to a smarter, more streamlined way of managing visitors with wVisitor.',
      role: 'Fullstack Engineer',
      language: 'HTML5, CSS3, Javascript, React.JS, Laravel, PHP, CI/CD, AWS, Postman, Node.JS',
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
      role: 'Platform Engineer',
      language: 'HTML5, CSS3, Javascript, REST API, Jinja',
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
                <a href={value.link} target="_blank" rel="noreferrer">
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
