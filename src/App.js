import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Rows from './components/Rows';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    
    <Rows/>
    <Rows/>
    <Rows/>
    <Rows/>
    <Rows/>
    </div>
  );
}

export default App;
