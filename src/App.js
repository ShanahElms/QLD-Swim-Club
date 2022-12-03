import './App.css';
import "./assets/js/script";
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import OurChampions from './components/OurChampions/OurChampions';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <OurChampions />
    </div>
  );
}

export default App;
