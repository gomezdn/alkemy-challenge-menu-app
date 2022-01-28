import React from "react"
import {Route, Routes, Navigate} from "react-router-dom"
import LoginForm from "../components/LoginForm.jsx"
import RecipesGridDisplay from "../components/RecipesGridDisplay.jsx"
import Menu from "../components/Menu.jsx"
import RecipeDetails from "../components/RecipeDetails.jsx"

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
        setRecipes={props.setRecipes}
    />

    const login = <LoginForm setHasToken={props.setHasToken}/>
    const recipeDetails = <RecipeDetails allRecipes={props.allRecipes}/>

    const goToLogin = <Navigate to="/login"/>


    return (
        <Routes>
            <Route path="/" element={props.hasToken ? menu : goToLogin}></Route>

            <Route path="/search" element={props.hasToken ? search : goToLogin}></Route>
        
            <Route path="/login" element={!props.hasToken ? login : <Navigate to="/"/>}></Route>

            <Route path="/recipeInfo/:id" element={props.hasToken ? recipeDetails : goToLogin}></Route>
    
            <Route path="*" element={<h1>Not found 404</h1>}></Route>
         </Routes>
    )
}