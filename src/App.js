
import './App.css';
import Achievements from './components/Achievements';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Header/>
      <Achievements/>
      <Reviews/>
      <Contacts/>
    </div>
  );
}

export default App;
