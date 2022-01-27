import React, {useState} from "react"
import Header from "./Header.jsx"
import {Flex} from "@chakra-ui/react"
import AppRoutes from "../routes/AppRoutes.jsx"


export default function Layout() {

    const [recipes, setRecipes] = useState([])

    const [menuRecipes, setMenuRecipes] = useState(getMenuFromLocalStorage())
    
    const [hasToken, setHasToken] = useState(window.localStorage.authToken !== undefined)


    function spaceValidation(recipe) {
        if (menuRecipes.length > 3) {
            return {errorMessage: "Yor menu is full. Try removing some.", hasSpace: false}
        } else {
            const newMenu = menuRecipes.concat([recipe])
            const stillHasSpace = newMenu.filter(rec => rec.vegan == recipe.vegan).length <= 2
            const type = recipe.vegan ? "vegan" : "non vegan"
            return {errorMessage: `There are already enough ${type} recipes in the menu.`, hasSpace: stillHasSpace}
        }
    }

    function addToMenu(recipeToAdd) {
        const validation = spaceValidation(recipeToAdd)
        if (!validation.hasSpace) {alert(validation.errorMessage);return}
        const newMenu = menuRecipes.concat([recipeToAdd])
        setMenuRecipes(newMenu)
        saveToLocalStorage(newMenu)
    }
    
    function deleteFromMenu(recipeToDel) {
        const filteredMenu = menuRecipes.filter(recipe => recipe.id !== recipeToDel.id)
        setMenuRecipes(filteredMenu)
        saveToLocalStorage(filteredMenu)
    }

    function saveToLocalStorage(menu) {
        window.localStorage.setItem("menu", JSON.stringify(menu))
    }

    function getMenuFromLocalStorage() {
        const menu = JSON.parse(window.localStorage.getItem("menu"))
        return menu || []
    }

    return (
        
        <Flex align="center" rowGap="1em" direction="column">
            <Header hasToken={hasToken}      setHasToken={setHasToken}/>
            <AppRoutes recipes={recipes}     menuRecipes={menuRecipes}
                       hasToken={hasToken}   setHasToken={setHasToken}
                       addToMenu={addToMenu} deleteFromMenu={deleteFromMenu}
                       setRecipes={setRecipes}/>
        </Flex>
    )
}

