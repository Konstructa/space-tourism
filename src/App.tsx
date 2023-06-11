import Header from './components/Header'
import Home from './pages/Home'
import Destination from './pages/Destination';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from './components/Container';
import { useContext } from 'react';
import { BackgroundProvider } from './context/BackgroundContext';
import BackgroundContext from "./context/BackgroundContext"



function App() {
  

  return (
    <BackgroundProvider>
          <Container >
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/destination" element={<Destination />} />
              </Routes>
            </BrowserRouter>
        </Container>
    </BackgroundProvider>
  )
}

export default App
