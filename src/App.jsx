import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelDetails from './pages/HotelDetails'
import Home  from './pages/Home'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/HotelDetails' element={<HotelDetails />} />
      </Routes>
    </Router>
    )
}

export default App;
