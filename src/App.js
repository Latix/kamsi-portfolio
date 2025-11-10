import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import ThreeBackground from './components/ThreeBackground';

function App() {
  return (
    <>
      <ThreeBackground />
      <main className="app-container">
        <NavBar />
        <Home />
        <Skills />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}

export default App;
