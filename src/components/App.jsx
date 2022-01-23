import React, {useState} from "react"
import { BrowserRouter} from "react-router-dom"
import Layout from "./Layout.jsx"


export default function App() {
    
    return (
        <BrowserRouter >
            <Layout/>
        </BrowserRouter>
    )
}