import logo from './logo.svg';
import './App.css';

import {Route, Routes} from 'react-router-dom'
import Home from './component/Homes.jsx';



function App() {
  return (

    <Routes>
      <Route path='/' element= {<Home/>} />
    </Routes>
  );
}  

export default App;

