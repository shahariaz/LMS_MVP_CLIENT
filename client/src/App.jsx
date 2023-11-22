import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

import { Login, Teacher, Hw } from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/homework" element={<Hw />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
