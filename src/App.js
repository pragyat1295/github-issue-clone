
import './App.css';
import GetSlides from './components/GetSlides';
import { BrowserRouter as Router,
  Routes, 
  Route,
  Link } from 'react-router-dom';


function App() {

  return (
    <div >

      <Router>
        <GetSlides />
      </Router>
      
      
    </div>
  );
}

export default App;
