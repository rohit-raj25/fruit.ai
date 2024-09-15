import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "../pages/Signup";

import Home from "../pages/Home";
import Chatbot from "../pages/Chatbot";
import Faq from "../pages/Faq";
import Translator from "../pages/Translator";
import About from "../pages/About";

function App() {
 

  return (
    <BrowserRouter>
      


      <Routes>
        <Route path="/" element={<Signup />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/translator" element={<Translator/>} />
        <Route path="/about" element={<About/>} />
        

       
       
        {/* <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          
        </Route> */}
      </Routes>


    </BrowserRouter>
  )
}


export default App
