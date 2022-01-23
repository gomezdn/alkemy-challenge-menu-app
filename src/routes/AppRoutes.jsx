import React from "react"
import {Route, Routes} from "react-router-dom"
import LoginForm from "../components/LoginForm.jsx"
import RecipesGridDisplay from "../components/RecipesGridDisplay.jsx"

export default function AppRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={"dasdsad"}></Route>
            <Route path="/search" element={<RecipesGridDisplay recipes={props.recipes}/>}></Route>
            <Route path="/logout" element={<h1>LOGOUT</h1>}></Route>
            <Route path="/login" element={<LoginForm/>}></Route>
         </Routes>
    )
}