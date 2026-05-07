import './App.css'

// Profile picture import
import profilePic from './assets/portfolio-picture.jpeg';

// React icons import
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

function App() {

  return (
    <div className='min-h-screen flex flex-col'>

      {/* Menu will contain resume and quick access to the contact section */}
      <section id="menu"
        className='flex justify-between items-center mb-10 px-6 md:px-16 py-6 text-white'
      >
        <div>
          <h1>CA</h1>
        </div>
        
        <div>
          <ul className='flex justify-between w-32'>
            <li>
              <a href="/Resume.pdf" target='_blank' download>Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Header contains a summary of info on myself and a profile picture */}
      <section id="header"
        className="flex flex-col md:flex-row items-center justify-between gap-5 px-6 md:px-16 text-white"
      >
        {/* Summary Section */}
        <div className="w-full md:w-[65%] text-left">
          <p className="text-lg mb-2">Hi, I'm</p>

          <h1 className="text-5xl md:text-8xl text-red-500 font-bold mb-5">
            Carlos Aguilar
          </h1>

          <p className="text-base md:text-lg leading-7 text-gray-300">
            Results-driven Software Developer with a strong background in UI/UX
            development, web design, and full-stack application development.
            Over 4 years of experience delivering scalable, user-focused solutions
            as a frontend and full-stack developer. Core strengths include React
            and TypeScript, with a passion for crafting intuitive interfaces and
            bringing design concepts to life through clean, maintainable code.
            Experience in leading projects end-to-end, collaborating with
            cross-functional teams, and driving technical decisions to deliver
            high-quality products on time.
          </p>
        </div>

        {/* Profile Picture Section */}
        <div className="w-full md:w-[35%] flex justify-center">
          <img
            src={profilePic}
            alt="Profile picture"
            className="w-52 md:w-80 rounded-2xl object-cover shadow-xl"
          />
        </div>
      </section>

      <hr />

      <section id="experience">
        <div className='flex flex-col md:flex-row justify-center items-center md:justify-between text-white pl-15 pr-15'>
          EXPERIENCE
          <div>
            <div>
              
            </div>
            <div>

            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Contact section contains all links to my socials */}
      <section id="contact"
        className='w-full flex flex-col md:flex-row justify-center items-center gap-5'
      >
        CONTACT
        <ul className='flex flex-col md:flex-row justify-between gap-3 md:gap-5'>
          <li>
            <a href='https://www.linkedin.com/in/juan-carlos-aguilar-03721052/?locale=en' target='_blank'>
              <AiFillLinkedin />
              LinkedIn
            </a>
          </li>
          <li>
            <a href='https://github.com/carlos-3196' target='_blank'>
              <AiFillGithub />
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:carlos-3196@hotmail.com?subject=Portfolio Contact">
              <MdEmail />
              Email
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default App
