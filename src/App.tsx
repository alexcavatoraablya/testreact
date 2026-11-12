import './App.css'
import {Route, Routes} from "react-router";
import homePage from "./pages/homePage.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={homePage()} />
        </Routes>
    </>
  )
}

export default App
