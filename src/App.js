import { Route, Routes, useNavigate} from 'react-router-dom';
import './App.css';
import SearchPageComponent from './pages/SearchPageComponent';
import Player from './Component/Player';
import { useEffect } from 'react';
import Favourite from './Component/Favourite';
import About from './Component/About';
import NotFoundPage from './Component/NotFoundPage';

function App() {
  const HomeRedirect = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
      navigate('/home');
    },[])
    return null;
  }


  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomeRedirect />}></Route>
        <Route path='/home' element={<SearchPageComponent />}></Route>
        <Route path='/player/:song' element={<Player/>}></Route>
        <Route path='/favourite' element={<Favourite/>}></Route>
        <Route path='/about' element={<About />}></Route>
        // <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      
    </>
  );
}

export default App;
