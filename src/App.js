
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Header/>
      <Reviews/>
      <Contacts/>
    </div>
  );
}

export default App;
