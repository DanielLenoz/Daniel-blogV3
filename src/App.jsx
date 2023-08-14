import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
          <Route path="/area/:id"/>
          <Route path="/blog/:id"/>
          <Route path="/contact"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
