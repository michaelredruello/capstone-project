import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import MyNavbar from "./components/MyNavbar";
import MyCategory from "./components/MyCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <div className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:category" element={<MyCategory />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
