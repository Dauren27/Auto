import './index.css'
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyAuto from './pages/BuyAuto';
import SaleAuto from './pages/SaleAuto';
import OurOfferPage from './pages/OurOfferPage';
import Favorites from './pages/Favorites';
import ComparePage from './pages/ComparePage';
import CarIdPage from './pages/CarIdPage';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile';
function App() {
  const isAuth=useSelector(state=>state.authReducer.auth)
  return (
    <div className="App">
      <BrowserRouter>
      {
        isAuth ?
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route exact path='/buy' element={<BuyAuto/>}/>
          <Route path='/sale' element={<SaleAuto/>}/>
          <Route path='/sale/offer' element={<OurOfferPage/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/compare' element={<ComparePage/>}/>
          <Route exact path='/buy/:id' element={<CarIdPage/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path="*" element={<Main/>} />
        </Routes>
        :
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<Login/>}/>
        </Routes>
      }
        
      </BrowserRouter>
    </div>
  );
}

export default App;
