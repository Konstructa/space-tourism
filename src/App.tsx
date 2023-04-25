import Header from './components/Header'
import Home from './pages/Home'
import Destination from './pages/Destination';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styled.css'

function App() {

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
