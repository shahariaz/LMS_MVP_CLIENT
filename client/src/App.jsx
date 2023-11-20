import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

import { Login } from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
