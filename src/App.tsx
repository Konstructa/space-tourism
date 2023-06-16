import Header from './components/comum/surfaces/Header'
import Home from './pages/Home'
import Destination from './pages/Destination';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from './components/comum/container';
import { BackgroundProvider } from './context/BackgroundContext';
import { Technology } from './pages/Technology';
import { Crew } from './pages/Crew';



function App() {
  return (
    <BackgroundProvider>
      <Container >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew/>} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </BackgroundProvider>
  )
}

export default App
