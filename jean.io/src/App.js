import Header from './components/Header/header.jsx'
import Navbar from './components/Navbar/navbar.jsx';
import AboutMe from './components/AboutMe/aboutMe.jsx';
import Contacts from './components/Contacts/contacts.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <AboutMe />
      <Contacts />
    </div>
  );
}

export default App;
