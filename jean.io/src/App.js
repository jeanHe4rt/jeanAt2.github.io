import Header from './components/Header/header.jsx'
import Navbar from './components/Navbar/navbar.jsx';
import AboutMe from './components/AboutMe/aboutMe.jsx';
import Contacts from './components/Contacts/contacts.jsx';
import Projects from './components/Projetos/projects.jsx';
import Services  from './components/Serviços/servicos.jsx';
import Skils  from './components/Skils/skils.jsx';
import Footer from './components/Footer/footer.jsx';

function App() {
  return (
    <div classNameName="App">
      <Navbar/>
      <Header />
      <AboutMe />
      <Contacts />
      <Projects />
      <Services />
      <Skils />
      <Footer />
    </div>
  );
}

export default App;
