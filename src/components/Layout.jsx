import React, {useState, useMemo} from "react"
import Header from "./Header.jsx"
import {Flex} from "@chakra-ui/react"
import AppRoutes from "../routes/AppRoutes.jsx"


export default function Layout() {



    const recipes = JSON.parse(window.localStorage.getItem("recipes")).data.results
    
    const [menuRecipes, setMenuRecipes] = useState([])

    const [hasToken, setHasToken] = useState(window.localStorage.authToken !== undefined)

    function addToMenu(recipeToAdd) {
        setMenuRecipes(menuRecipes.concat([recipeToAdd]))
    }
    
    function deleteFromMenu(recipeToDel) {
        setMenuRecipes(menuRecipes.filter(recipe => recipe.id !== recipeToDel.id))
    }

    return (
        
        <Flex align="center" rowGap="1em" direction="column">
            <Header hasToken={hasToken} setHasToken={setHasToken}/>
            <AppRoutes recipes={recipes} menuRecipes={menuRecipes} hasToken={hasToken} setHasToken={setHasToken}
                       addToMenu={addToMenu} deleteFromMenu={deleteFromMenu}/>
        </Flex>
    )
}

