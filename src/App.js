import './App.css';
import "./assets/js/script";
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import OurChampions from './components/OurChampions/OurChampions';
import EventInformation from './components/EventInformation/EventInformation';
import ChampionshipResults from './components/ChampionshipResults/ChampionshipResults';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <OurChampions />
      <EventInformation />
      <ChampionshipResults />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
