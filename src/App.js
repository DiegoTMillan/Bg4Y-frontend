import {Routes, Route, Navigate} from "react-router-dom";
import {Home} from "./Pages/Home/Home";
import {Login} from "./Pages/Login/Login";
import {Dashboard} from "./Pages/Dashboard/Dashboard";
import {NotFound} from "./Pages/NotFound/NotFound";
import {Boardgames} from "./Pages/Boardgames/Boardgames";
import {Register} from "./Pages/Register/Register";
import {New1} from "./Pages/News/New1"
import {New2} from "./Pages/News/New2"
import {New3} from "./Pages/News/New3"
import {Review1} from "./Pages/Reviews/Review1"
import {Review2} from "./Pages/Reviews/Review2"
import {Review3} from "./Pages/Reviews/Review3"
import {Update} from "./Pages/Update-profile/Update"

function App() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/boardgames" element={<Boardgames/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/new1" element={<New1/>}/>
      <Route path="/new2" element={<New2/>}/>
      <Route path="/new3" element={<New3/>}/>
      <Route path="/review1" element={<Review1/>}/>
      <Route path="/review2" element={<Review2/>}/>
      <Route path="/review3" element={<Review3/>}/>
      <Route path="/update-profile" element={<Update/>}/>
      <Route path="/404" element={<NotFound/>}/>
      <Route path="*" element={<Navigate to="404" replace />}/>
    </Routes>
  );
};

export default App;
