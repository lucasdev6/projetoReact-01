import './App.css';
import Home from './home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Camiseta from './camiseta/Camiseta';
import Calca from './calca/Calca';
import Sapato from './sapato/Sapato';
import Menu from './menu/Menu';
import Footer from './Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/camisetas' element={<Camiseta />}/>
        <Route path='/calcas' element={<Calca/>}/>
        <Route path='/sapatos' element={<Sapato/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
