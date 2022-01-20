import React, {useState} from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import LoginForm from "./LoginForm.jsx"


export default function App() {
    const [hasToken, setHasToken] = useState(false)


    return (
        <BrowserRouter>
            <div id="app">
                <nav id="navBar">
                    <Link className="link" to="/home">Home</Link>
                    <Link className="link" to="/search">Search</Link>
                    <Link className="link" to="/logout">Logout</Link>
                    <Link className="link" to="/login">Login</Link>

                </nav>
                <Routes>
                    <Route path="/home" element={<h1>MENU</h1>}></Route>
                    <Route path="/search" element={<h1>SEARCH</h1>}></Route>
                    <Route path="/logout" element={<h1>LOGOUT</h1>}></Route>
                    <Route path="/login" element={<LoginForm/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}