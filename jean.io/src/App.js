import Header from './components/Header/header.jsx'
import Navbar from './components/Navbar/navbar.jsx';
import AboutMe from './components/AboutMe/aboutMe.jsx';
import Contacts from './components/Contacts/contacts.jsx';
import Projects from './components/Projetos/projects.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <AboutMe />
      <Contacts />
      <Projects />
    </div>
  );
}

export default App;
