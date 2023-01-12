
import './App.css';
import GetSlides from './components/GetSlides';
import { BrowserRouter as Router,
  Routes, 
  Route,
  // redirect,
  // useNavigate ,
  Link } from 'react-router-dom';


function App() {

  return (
    <div >
      <GetSlides />

      {/* <Router>
        <Routes>
          <Route path='/github-issue-clone' element = {(
            <GetSlides />
          )} />
        </Routes>
      </Router> */}
      
      
    </div>
  );
}

export default App;
