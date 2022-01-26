import React from "react"
import {Route, Routes, Navigate} from "react-router-dom"
import LoginForm from "../components/LoginForm.jsx"
import RecipesGridDisplay from "../components/RecipesGridDisplay.jsx"
import Menu from "../components/Menu.jsx"

export default function AppRoutes(props) {

    const menu = <Menu
        addToMenu={props.addToMenu}
        deleteFromMenu={props.deleteFromMenu}
        menuRecipes={props.menuRecipes}
        recipes={props.recipes}
    />

    const search = <RecipesGridDisplay
        addToMenu={props.addToMenu}
        deleteFromMenu={props.deleteFromMenu}
        menuRecipes={props.menuRecipes}
        recipes={props.recipes}
    />

    const login = <LoginForm setHasToken={props.setHasToken}/>


    return (
        <Routes>
            <Route path="/" element={props.hasToken ? menu : <Navigate to="/login"/>}></Route>
        
            
            <Route path="/search" element={props.hasToken ? search : <Navigate to="/login"/>}></Route>
        
        
            <Route path="/logout" element={<h1>LOGOUT</h1>}></Route>
        
        
            <Route path="/login" element={login}></Route>

            <Route path="*" element={<h1>Not found 404</h1>}></Route>
         </Routes>
    )
}