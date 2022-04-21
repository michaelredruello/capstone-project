import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <div className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
