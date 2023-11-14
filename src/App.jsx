// import { useState } from 'react'
import hero from './assets/images/hero.jpg'
import Header from './components/Header'
import Main from './components/MainContent'
import drawing from './assets/images/drawing.jpg'
import drawing2 from './assets/images/drawing2.jpg'
import Story from './components/Story'
import artist from'./assets/images/artist.jpg'
import Exhibition from './components/Exhibitions'
import library from './assets/images/library.jpg'
import library1 from './assets/images/library1.jpg'
import library2 from './assets/images/library2.jpg'
import library3 from './assets/images/library3.jpg'
import Footer from './components/Footer'
function App() {
    
  const images={
    drawing:drawing,
    drawing2:drawing2,
    artist:artist,
    library:library,
    library1:library1,
    library2:library2,
    library3:library3,
   

  }

  return (
    <>
   <Header img={hero}/>
    <Main  img={images}/>
    <Story img={images}/>
    <Exhibition img={images}/>
    <Footer/>
    </>
  )
}

export default App
