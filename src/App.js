import Home from "./pages/home/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import  Profiler  from './profile/Profile';


function App() {
  return (

  <Router>
   <Routes>

    <Route  path='/' element={<Home/>}/>
      <Route  path='/login' element={ <Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile/:username' element={<Profiler/>}/>
   </Routes>
  </Router>
  );
}

export default App;
