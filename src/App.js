import {Routes, Route, Navigate} from "react-router-dom";
import {Home} from "./Pages/Home";
import {Login} from "./Pages/Login";
import {Dashboard} from "./Pages/Dashboard";
import {NotFound} from "./Pages/NotFound";
import {Boardgames} from "./Pages/Boardgames";
import {Register} from "./Pages/Register";

function App() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/boarddgames" element={<Boardgames/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/404" element={<NotFound/>}/>
      <Route path="*" element={<Navigate to="404" replace />}/>
    </Routes>
  );
};

export default App;
