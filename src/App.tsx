import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import profilePic from './assets/portfolio-picture.jpeg';

function App() {

  return (
    <>
      <section id="header" className='flex gap-25'>
        <div className='text-left'>
          Hi, I'm
          <h1>Carlos Aguilar</h1>
          <div>
            Results-driven Software Developer with a strong background in UI/UX development, web design, 
            and full-stack application development. Over 4 years of experience delivering scalable, 
            user-focused solutions as a frontend and full-stack developer. Core strengths include React and Typescript, 
            with a passion for crafting intuitive interfaces and bringing design concepts to life through clean, maintainable code. 
            Experience in leading projects end-to-end, collaborating with cross-functional teams,
            and driving technical decisions to deliver high-quality products on time.
          </div>
        </div>
        <div className="hero">
          <img src={profilePic} alt='Profile Picture' />
        </div>
      </section>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Find my resume and certifications</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Resume
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
