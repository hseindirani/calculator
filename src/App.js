import './App.css';
import BmiCalc from './pages/bmiCalc';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NormalCalc from './pages/normalCalc';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
          <Route path="/bmiCalc" exact element={<BmiCalc/>} />
          <Route path="/normalcalc" exact element={<NormalCalc/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
