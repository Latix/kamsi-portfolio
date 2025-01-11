import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel, faNodeJs, faPython, faAws, faDocker, faMdb } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: 'Python',
      icon: faPython
    },
    {
      name: 'NodeJs',
      icon: faNodeJs
    },
    {
      name: 'Javascript',
      icon: faJs
    },
    {
      name: 'AWS',
      icon: faAws
    },
    {
      name: 'MySql',
      icon: faMdb
    },
    {
      name: 'ReactJs',
      icon: faReact
    },
    {
      name: 'VueJs',
      icon: faVuejs
    },
    {
      name: 'Docker',
      icon: faDocker
    },
    {
      name: 'HTML',
      icon: faHtml5
    },
    {
      name: 'CSS',
      icon: faCss3
    },
    {
      name: 'Laravel',
      icon: faLaravel
    }

  ]);
  return (
    <section id="Skills" className='skills' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Skills
      </div>
      <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{value.name}</h3>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

