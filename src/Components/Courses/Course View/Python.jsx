import React from 'react';
import './Python.css';
import Accordion from './Accordion';

const accordionItems = [
  {
    title: 'Introduction to Python',
    content: <ul className='courseListitem'>
      <li>Introduction to Python</li>
      <li>History Of Python</li>
      <li>Python Features</li>
      <li>Areas Of Application Of Python</li>
    </ul>
  },
  {
    title: 'Installation and Execution',
    content: <ul className='courseListitem'>
    <li>Local Environment Setup</li>
    <li>Installing Python on different Platforms(Windows and Linux)</li>
    <li>Python Interpreter and Python Interactive Shell</li>
    <li>User Interface or IDE</li>
  </ul>
  },
  {
    title: 'Python Basics',
    content: <ul className='courseListitem'>
    <li>Data types and variables</li>
    <li>Operators and operator precedence</li>
    <li>Data type conversions</li>
    <li>Command line argument</li>
    <li>Data input & Output</li>  
  </ul>
  },
  {
    title: 'Python Flow Control',
    content: <ul className='courseListitem'>
    <li>If statement</li>
    <li>If…elif...else statement</li>
    <li>Nested if</li>
    <li>While loop</li>
    <li>For loop</li>  
    <li>Break & continue</li>
  </ul>
  },
  {
    title: 'Python Sequences',
    content: <ul className='courseListitem'>
    <li>String</li>
    <li>List</li>
    <li>Tuple</li>
    <li>Dictionary</li>
    <li>For loop</li>  
    <li>Set</li>
  </ul>
  },
  {
    title: 'Functions and modules',
    content: <ul className='courseListitem'>
    <li>What is a function?</li>
    <li>Define a function</li>
    <li>Pass arguments</li>
    <li>Arguments with default values</li>
    <li>Local and global variables</li>  
    <li>Return a value from function</li>
    <li>Return multiple values</li>
  </ul>
  },
  {
    title: 'Python Modules & Packages',
    content: <ul className='courseListitem'>
    <li>Python Packages</li>
    <li>What is a module?</li>
    <li>Import module using import statement</li>
    <li>Use .. import statement</li>
    <li>Python Math Module</li>  
    <li>Random Module</li>
    <li>Date Module</li>
  </ul>
  },
  {
    title: 'Exception Handling',
    content: <ul className='courseListitem'>
    <li>What is exception?</li>
    <li>Python built-in exceptions</li>
    <li>Try - Except</li>
    <li>Finally</li>
  </ul>
  },
  {
    title: 'Object Oriented Programming (OOPS)',
    content: <ul className='courseListitem'>
    <li>Introduction</li>
    <li>OOPS Concept & Principles</li>
    <li>Access modifiers</li>
    <li>Constroctor</li>
  </ul>
  },
  {
    title: 'Inheritance',
    content: <ul className='courseListitem'>
    <li>Introduction Inheritance</li>
    <li>Types of inheritance</li>
    <li>Single inheritance</li>
    <li>Multiple inheritance</li>
    <li>Multilevel inheritance</li>
  </ul>
  },
  {
    title: 'Polymorphism & Abstraction',
    content: <ul className='courseListitem'>
    <li>Introduction Polymorphism</li>
    <li>Derived Types </li>
    <li>Method overloading</li>
    <li>Method overriding</li>
    <li>Abstraction</li>
  </ul>
  },
  
  {
    title: 'HTML',
    content: <ul className='courseListitem'>
    <li>Introduction of HTML</li>
    <li>Basic Tag</li>
    <li>Simple Article Page Design</li>
  </ul>
  },
  {
    title: 'Form Design',
    content: <ul className='courseListitem'>
    <li>Form Controls</li>
    <li>Input types</li>
    <li>Form Submition</li>
  </ul>
  },
  {
    title: 'Database programming',
    content: <ul className='courseListitem'>
    <li>MySQL Connector module installation</li>
    <li>MySQL Query Execution</li>
    <li>Table Creation</li>
    <li>Storing Datas</li>
  </ul>
  },
  {
    title: 'Git & GitHub',
    content: <ul className='courseListitem'>
    <li>Git installation</li>
    <li>Git-Hub Features</li>
    <li>Git commands</li>
    <li>Project Deployment</li>
  </ul>
  },
];
function Python() {
 
  return (
    <div className="courseNameMain">
      <section className="courseNameBanner">
        <div className="courseName">
          <h5>
            Home {'>'} Courses {'>'} Python Course
          </h5>
          <h2>Best Python Training in Erode</h2>
        </div>

        <div className="courseDetails">
          <div className="course_Details_img">
            <img
              src="../assets/Images/Course Images/Course Items/Course Icons/python.svg"
              width="50%"
            ></img>
            <h2>Python</h2>
          </div>
          <div className="courseModule">
            <div className="Courseduration">
              <div>
                {' '}
                <svg
                  width="20"
                  height="20"
                  fill="#212216"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.125 3.82V2.25h-2.25v1.57a8.953 8.953 0 0 0-3.958 1.506L5.625 4.031 4.031 5.625l1.2 1.2A8.961 8.961 0 0 0 3 12.75c0 4.963 4.037 9 9 9s9-4.037 9-9c0-4.582-3.442-8.375-7.875-8.93ZM12 15a2.25 2.25 0 0 1-.75-4.371V6.375h1.5v4.254A2.25 2.25 0 0 1 12 15Z"></path>
                </svg>
                <span
                  style={{ position: 'relative', top: '-5px', left: '5px' }}
                >
                  Duration
                </span>
              </div>
              <div style={{ position: 'relative', top: '-5px', left: '5px' }}>
                80 Hours
              </div>
            </div>
          </div>
          <div className="courseHR">
            {' '}
            <hr className="hr"></hr>
          </div>
          <div className="courseModule">
            <div className="Courseduration">
              <div>
                {' '}
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <span
                  style={{ position: 'relative', top: '-5px', left: '5px' }}
                >
                  Modules
                </span>
              </div>
              <div style={{ position: 'relative', top: '-5px', left: '5px' }}>
                15+5
              </div>
            </div>
          </div>
          <div className="courseHR">
            {' '}
            <hr className="hr"></hr>
          </div>
          <div className="courseModule">
            <div className="Courseduration">
              <div>
                {' '}
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h7v7H3z"></path>
                  <path d="M14 3h7v7h-7z"></path>
                  <path d="M14 14h7v7h-7z"></path>
                  <path d="M3 14h7v7H3z"></path>
                </svg>
                <span
                  style={{ position: 'relative', top: '-5px', left: '5px' }}
                >
                  Skill Level
                </span>
              </div>
              <div style={{ position: 'relative', top: '-5px', left: '5px' }}>
                Expert
              </div>
            </div>
          </div>
          <div className="courseHR">
            {' '}
            <hr className="hr"></hr>
          </div>
          <div className="courseModule">
            <div className="Courseduration">
              <div>
                {' '}
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <metadata>
                    Created by potrace 1.16, written by Peter Selinger 2001-2019
                  </metadata>
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M259 4766 c-99 -26 -184 -98 -231 -195 l-23 -46 -3 -1587 c-2 -1586
-2 -1587 19 -1642 27 -74 104 -157 177 -193 l57 -28 1333 -3 1333 -2 -6 -33
c-49 -291 -75 -463 -75 -494 0 -51 41 -135 77 -161 50 -35 113 -48 173 -34 30
7 177 78 346 167 161 85 302 155 314 155 11 0 148 -68 305 -150 304 -161 347
-180 404 -180 58 0 137 45 166 94 41 69 40 108 -4 379 -23 136 -41 250 -41
252 0 2 64 5 143 7 132 3 146 5 199 31 73 36 150 119 177 193 21 55 21 56 19
1642 l-3 1587 -23 47 c-37 74 -96 134 -170 170 l-67 33 -2275 2 c-1782 1
-2285 -1 -2321 -11z m4521 -309 l25 -13 3 -1516 c2 -1380 1 -1518 -14 -1533
-13 -13 -37 -15 -142 -13 l-126 3 -27 165 -26 165 33 46 c56 77 113 203 141
306 34 133 36 316 4 447 -75 310 -312 568 -611 664 -114 37 -182 45 -332 40
-120 -5 -157 -10 -228 -33 -266 -86 -451 -248 -570 -498 -136 -284 -111 -629
63 -894 l53 -81 -23 -143 c-13 -79 -25 -154 -28 -166 l-5 -23 -1314 0 c-1183
0 -1316 2 -1330 16 -15 14 -16 163 -14 1532 l3 1516 25 13 c20 10 470 13 2220
13 1750 0 2200 -3 2220 -13z m-850 -1575 c264 -93 429 -317 430 -583 0 -230
-134 -446 -340 -546 -106 -51 -162 -64 -271 -64 -169 0 -305 57 -430 181 -130
129 -185 273 -177 460 6 126 39 221 112 324 80 112 221 207 360 243 73 18 245
10 316 -15z m-402 -1484 c62 -17 106 -21 222 -21 159 0 234 15 370 72 70 29
70 29 75 8 14 -62 115 -701 111 -705 -3 -2 -91 41 -197 97 -214 113 -264 131
-356 131 -100 0 -144 -16 -356 -128 -109 -57 -201 -102 -203 -99 -5 4 101 681
111 714 3 8 26 2 75 -18 38 -17 105 -39 148 -51z"
                    />
                    <path
                      d="M702 3880 c-101 -62 -97 -216 8 -271 33 -18 101 -19 1795 -19 1694 0
1762 1 1795 19 19 10 46 33 58 52 33 47 28 145 -8 185 -55 58 73 54 -1847 54
-1747 0 -1768 0 -1801 -20z"
                    />
                    <path
                      d="M710 3062 c-105 -56 -109 -210 -8 -272 32 -19 52 -20 813 -20 l780 0
37 25 c67 45 87 152 40 214 -10 14 -31 34 -46 45 -27 21 -37 21 -804 24 -742
2 -779 1 -812 -16z"
                    />
                  </g>
                </svg>
                <span
                  style={{ position: 'relative', top: '-5px', left: '5px' }}
                >
                  Certificate
                </span>
              </div>
              <div style={{ position: 'relative', top: '-5px', left: '5px' }}>
                Yes
              </div>
            </div>
          </div>
          <div className="courseHR">
            {' '}
            <hr className="hr"></hr>
          </div>
          <div className="courseModule">
            <div className="Courseduration">
              <div>
                {' '}
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.315 15.444a9 9 0 1 0-16.63-6.888 9 9 0 0 0 16.63 6.888Z"></path>
                  <path d="M5.121 17.804A13.936 13.936 0 0 1 12.001 16c2.5 0 4.846.655 6.878 1.804"></path>
                  <path d="M14.121 12.121A3 3 0 1 0 9.88 7.88a3 3 0 0 0 4.242 4.242Z"></path>
                </svg>
                <span
                  style={{ position: 'relative', top: '-5px', left: '5px' }}
                >
                  Mode
                </span>
              </div>
              <div style={{ position: 'relative', top: '-5px', left: '5px' }}>
                Offline | Online
              </div>
            </div>
          </div>
          <div className="courseHR">
            {' '}
            <hr className="hr"></hr>
          </div>
          <div className="courseModule">
            <div className="Courseduration">
              <div>
                {' '}
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.315 15.444a9 9 0 1 0-16.63-6.888 9 9 0 0 0 16.63 6.888Z"></path>
                  <path d="M5.121 17.804A13.936 13.936 0 0 1 12.001 16c2.5 0 4.846.655 6.878 1.804"></path>
                  <path d="M14.121 12.121A3 3 0 1 0 9.88 7.88a3 3 0 0 0 4.242 4.242Z"></path>
                </svg>
                <span
                  style={{ position: 'relative', top: '-5px', left: '5px' }}
                >
                  Batch
                </span>
              </div>
              <div style={{ position: 'relative', top: '-5px', left: '5px' }}>
                Weekdays | Weekend
              </div>
            </div>
          </div>

          <div className="CourseJoin">
            <button>
              <span>Join Now</span>{' '}
            </button>
          </div>
          <div className="CourseJoinWhatsapp">
            <button>
              <span>Whatsapp Now</span>{' '}
            </button>
          </div>
        </div>
      </section>
      <section className="CourseSyllabus">
        <h2>Python Course Overview</h2>
        <div>
          <p>
            This Python Course will assist you with dominating significant
            Python programming ideas like information and record tasks in
            Python, object-situated ideas in Python and different Python
            libraries like Math, Numpy, mysqlconnector.The course is organized
            by industry specialists which incorporates constant contextual
            investigations Python Certification Training. Python is a
            programming language that can be utilized to create websites,
            software, data analysis, etc.Nurture would help you to get proper
            knowledge regarding python programming concepts
          </p>
        </div>
        <br></br>
        <h2>Who Can Join</h2>
        <div>
          <ul className='courseul'>
          <li>BE / BTech / M Tech / BCA / MCA passed aspirants to make their career as Python Developer</li>
          <li>A candidate who would like to restart their career after a gap.</li>
          <li>Complete beginners interested in Python programming.</li>
          <li>Aspiring web developers seeking Python and Django expertise.</li>
          <li>Those seeking to advance their knowledge about modern web technology.</li>
          </ul>
        </div>
        <br></br>
       
      </section>
      <section className='CourseAccordionContainer'>
        <h2>What You Will Learn</h2><br></br>
          <div className='courseAccordion'>
         
            <Accordion items={accordionItems}>

            </Accordion>

            <div className='realtedCourseBanner'>
                <div className='relatedCoursediv'>
                  <h1>Related Course</h1>
                  <div className="relatedcourseList">
                    <span>Data Analytics</span>
                    <span>Django</span>
                    <span>Machine Learning</span>
                    <span>Data Science</span>
                    <span>SQL</span>
                   
                  </div>
                </div>
            </div>
            
          </div>
          
        </section>
        
    </div>
  );
}

export default Python;
