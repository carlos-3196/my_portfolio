import './App.css'

import portfolioPic from './assets/portfolio-picture.jpeg';
import { TiDocumentText } from 'react-icons/ti'

function App() {

  return (
    <>
      <section id="header">
        <div className="portfolio-picture">
          {/* Profile picture goes here */}
          <img src={portfolioPic} alt='Profile'/>
        </div>
        
        <h1>Carlos Aguilar</h1>
      </section>

      <section id="info">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <TiDocumentText />
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
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
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="footer"></section>
    </>
  )
}

export default App
