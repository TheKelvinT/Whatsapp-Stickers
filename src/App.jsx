
import { useState } from "react"
import { Routes,Route } from "react-router-dom"
import "./App.css"
import Funny from "./pages/funny/Funny"
import Pin from "./pages/pin/Pin"
import Prelander from "./pages/prelander/Prelander"
import Romance from "./pages/romance/Romance"
import ThankYou from "./pages/thankyou/ThankYou"


function App() {
  const [userId, setUserId] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Prelander/>}/>
        <Route path="/funny" element={<Funny userId={userId} setUserId={setUserId}/>}/>
        <Route path="/romance" element={<Romance userId={userId} setUserId={setUserId}/>}/>
        <Route path="/pin" element={<Pin userId={userId}/>} />
        <Route path="/thankyou" element={<ThankYou/>}/>
      </Routes>
    </div>
  )
}

export default App
