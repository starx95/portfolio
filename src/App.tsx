import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './css/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from './page/Home';
import { About } from './page/About';
import { IDO } from './page/IDO';
// import me from './assets/face.png';
import { useEffect } from 'react';
import { MyPortfolio } from './page/MyPortfolio';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './store/store';

const queryClient = new QueryClient();

function App() {
  
  useEffect(() => {
     requestAnimationFrame(() => {
      document.querySelector(".App")?.classList.add("snap-ready");
    });
}, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
            <Header />
            <div className="App">
              <section id="home">
                <Home />
              </section>
              <section id="ido">
                <IDO />
              </section>
              <section id="portfolio">
                <MyPortfolio />
              </section>
              <section id="about">
                <About />
              </section>
            </div>
        </Router>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
