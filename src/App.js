
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBarDesign/Navbar';
import Home from './Components/NavBarDesign/Home';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar></Navbar>



          <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
        </Router>
        
    </div>
  );
}

export default App;
