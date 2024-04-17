import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
