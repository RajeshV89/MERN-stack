import React from "react"
import Header from './components/Header.jsx'
import InputContent from './components/InputContent.jsx'
import DisplayContent from "./components/DisplayContent.jsx";
import Footer from './components/Footer.jsx'
import Counter from "./components/Counter.jsx";

function App() {
  return (<div>
    <Counter/>
    <Header/>
    <InputContent/>
    <DisplayContent/>
    <Footer/>
  </div>
);}

export default App
