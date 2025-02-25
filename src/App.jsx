import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "swiper/css";
import "swiper/css/navigation"; // Import Navigation styles


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./router/Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Router />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
