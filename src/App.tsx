import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './css/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from './page/Home';
import { About } from './page/About';
import { IDO } from './page/IDO';
import me from './assets/face.png';
import { useEffect, useRef, useState } from 'react';

const queryClient = new QueryClient();

function App() {
  const [hideHeader, setHideHeader] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
     requestAnimationFrame(() => {
      document.querySelector(".App")?.classList.add("snap-ready");
    });
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setHideHeader(true);
      } 

      lastScrollY = currentScrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 50) {
        // cursor near top → show header
        setHideHeader(false);
      } else if (window.scrollY > 100) {
        // cursor away from top & scrolled down → hide header
        setHideHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
}, []);

  const handleSectionClick = () => {
    setHideHeader(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <header ref={headerRef} className={`header ${hideHeader ? 'hide' : ''}`}>
            <div>
              <img src={me} alt="profile" />
              <h1 className="title">NIZAM</h1>
            </div>
            <nav className="nav">
              <ul>
                <li>
                  <a href="#home" onClick={handleSectionClick}>
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#ido" onClick={handleSectionClick}>
                    WHAT I DO
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={handleSectionClick}>
                    ABOUT ME
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <section id="home">
            <Home />
          </section>
          <section id="ido">
            <IDO />
          </section>
          <section id="about">
            <About />
          </section>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
