import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Debt from "./pages/debt"
import Home from "./pages/home"
import Investing from "./pages/investing"

function App() {
  return (
  <>
  <Navbar />
  <div class="flex justify-center mt-10">
  <Routes>
    <Route path="/debt" element={<Debt />} />
    <Route path="/" element={<Home />} />
    <Route path="/investing" element={<Investing />} />
  </Routes>
  </div>
  </>
  );
  
}

export default App;
