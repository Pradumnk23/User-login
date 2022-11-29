import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import Homee from './Components/Homee';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/home" element={<Homee />} />
          <Route  path="*" element={<NotFound />}/>
          
      </Routes>
    </>
  );
}


export default App;
