import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {FrontPage,SecondPage} from "./components/ManagePage"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route>
          <Route path="/" element={<FrontPage />} />
          <Route path="/second" element={<SecondPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
