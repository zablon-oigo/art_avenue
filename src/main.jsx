import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Portfolio from './pages/Portfolio'
import Nopage from './pages/Nopage'
import Contact from './pages/Contact'
import About from './pages/About.jsx'
import artist from './assets/images/artist.jpg'
import abstract1 from './assets/images/abstract1.jpg'
import abstract2 from './assets/images/abstract2.jpg'
import abstract3 from './assets/images/abstract3.jpg'
import drawing1 from './assets/images/hand1.jpg'
import drawing2 from './assets/images/hand2.jpg'
import drawing3 from './assets/images/hand3.jpg'
import map from './assets/images/maps.jpg'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
const images={
  abstract1:abstract1,
  abstract2:abstract2,
  abstract3:abstract3,
  drawing1:drawing1,
  drawing2:drawing2,
  drawing3:drawing3,
  artist:artist,
  map:map,
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App /> }/>
    <Route path="contact" element={<Contact img={images}/>}/>
    <Route path="portfolio" element={<Portfolio img={images}/>}/>
    <Route path="about" element={<About img={images}/>}/>
    <Route path="*" element={<Nopage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
