import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Qalification from './components/qalification/Qalification';
import ScrollUp from './components/scrollup/ScrollUp';
import Services from './components/services/Services';
import Skill from './components/skills/Skill';


function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skill/>
        <Services/>
        <Qalification/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </main>
      <footer>
      <ScrollUp/>
      </footer>
    </div>
  );
}

export default App;
