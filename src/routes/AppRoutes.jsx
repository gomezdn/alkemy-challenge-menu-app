import React from "react"
import {Route, Routes, Navigate} from "react-router-dom"
import LoginForm from "../components/LoginForm.jsx"
import RecipesGridDisplay from "../components/RecipesGridDisplay.jsx"
import Menu from "../components/Menu.jsx"
import RecipeDetails from "../components/RecipeDetails.jsx"
import NotFound from "../components/NotFound.jsx"

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

    const goToLogin = <Navigate to="/alkemy-challenge-menu-app/login"/>
    const goToHome = <Navigate to="/alkemy-challenge-menu-app"/>


    return (
        <Routes>
            <Route path="/alkemy-challenge-menu-app" element={props.hasToken ? menu : goToLogin}></Route>

            <Route path="/alkemy-challenge-menu-app/search" element={props.hasToken ? search : goToLogin}></Route>
        
            <Route path="/alkemy-challenge-menu-app/login" element={!props.hasToken ? login : <Navigate to="/alkemy-challenge-menu-app"/>}></Route>

            <Route path="/alkemy-challenge-menu-app/recipeInfo/:id" element={props.hasToken ? recipeDetails : goToLogin}></Route>
    
            <Route path="/" element={goToHome}></Route>

            <Route path="*" element={<NotFound />}></Route>
         </Routes>
    )
}