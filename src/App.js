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
      navigate('/music/home');
    },[])
    return null;
  }


  return (
    <>
      <Routes>
        <Route exact path='/music' element={<HomeRedirect />}></Route>
        <Route path='/music/home' element={<SearchPageComponent />}></Route>
        <Route path='/music/player/:song' element={<Player/>}></Route>
        <Route path='/music/favourite' element={<Favourite/>}></Route>
        <Route path='/music/about' element={<About />}></Route>
        // <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      
    </>
  );
}

export default App;
