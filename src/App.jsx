import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Menu } from "./components/Menu"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Area } from "./pages/Area"
import { Blog } from "./pages/Blog"
import { Contact } from "./pages/Contact"

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/:id"
            element={<Area />}
          />
          <Route
            path="/blog/:id"
            element={<Blog />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/*"
            element={<p>no encontrada</p>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
