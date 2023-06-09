import Header from './components/Header'
import Home from './pages/Home'
import Destination from './pages/Destination';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from './components/Container';
import { useContext } from 'react';
import BackgroundContext from './context/BackgroundContext';



function App() {
  const { backgroundImage, changeBackgroundImage } = useContext(BackgroundContext)

  return (
    <Container background={backgroundImage}>
      <BrowserRouter>
        <Header setBackground={changeBackgroundImage}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
