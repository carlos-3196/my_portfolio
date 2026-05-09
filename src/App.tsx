import './App.css'

// Profile picture import
import profilePic from './assets/portfolio-picture.jpeg';

// React icons import
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

function App() {

  return (
    <div className='min-h-screen flex flex-col'>

      {/* Menu section
      * - resume download link
      * - quick access to different portfolio sections
      */}
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

      {/* Header section
      * - professional summary
      * - profile picture
      */}
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

      {/* Experience section
      * - all current and past professional experience
      */}
      <section id="experience"
        className='text-white px-6 md:px-10'
      >
        <div className='flex flex-col items-center md:items-start mb-5'>
          <p className='text-xl'>EXPERIENCE</p>
        </div>
        <div className='exp-list'>
          <div>
            <div>
              <p className='text-xl'>Web Developer</p>
              <p className='text-xs text-blue-600'>TMAC South Texas at UTRGV</p>
              <br />
            </div>
            <div>
              <p>Jul '17 - Dec '19</p>
            </div>
          </div>
          <ul className='text-xs'>
            <li>Maintained, updated, and troubleshot the company website: www.utrgv.edu/tmac</li>
            <li>Managed website content and functionality using Cascade Server CMS</li>
            <li>Designed and developed the TMAC mobile application to support client needs and improve accessibility</li>
            <li>Utilized Android Studio for mobile application development and testing</li>
            <li>Provided technical support by diagnosing and resolving computer and network-related issues</li>
            <li>Worked with technologies including JavaScript, HTML, CSS, Android Studio, Cascade Server, and Microsoft Office</li>
          </ul>
          <div>
            <div>
              <p className='text-xl'>Software Developer (Remote)</p>
              <p className='text-xs text-blue-600'>Atos</p>
            </div>
            <div>
              <p>Nov '21 - May '23</p>
            </div>
          </div>
          <div>
            <div>
              <p className='text-xl'>Software Developer (Remote)</p>
              <p className='text-xs text-blue-600'>Protrans Inernational</p>
            </div>
            <div>
              <p>May '23 - Feb '26</p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Contact section 
      * - links to socials
      * - email delivery
      */}
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
