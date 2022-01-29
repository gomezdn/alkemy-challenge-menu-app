import React, {useState, useMemo} from "react"
import Header from "./Header.jsx"
import {Flex} from "@chakra-ui/react"
import AppRoutes from "../routes/AppRoutes.jsx"
import Swal from "sweetalert2"




export default function Layout() {

    const [recipes, setRecipes] = useState([])

    const [menuRecipes, setMenuRecipes] = useState(getMenuFromLocalStorage())
    
    const allRecipes = useMemo(() => {
        return menuRecipes.concat(recipes)
    },[menuRecipes, recipes])

    const [hasToken, setHasToken] = useState(window.localStorage.authToken !== undefined)



    function spaceValidation(recipe) {
        if (menuRecipes.length > 3) {
            return "Yor menu is full. Try removing some."
        }
        const newMenu = menuRecipes.concat([recipe])
        const hasSpace = newMenu.filter(rec => rec.vegan == recipe.vegan).length <= 2
        if (!hasSpace) {
            const type = recipe.vegan ? "vegan" : "non vegan"
            return `There are already enough ${type} recipes in the menu.`
        }
    }

    function showAddingError(message) {
        Swal.fire({
            text: message,
            confirmButtonText: 'Ok'
          })
    }

    function addToMenu(recipeToAdd) {
        const errorMessage = spaceValidation(recipeToAdd)
        if (errorMessage) {showAddingError(errorMessage);return}
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
            <Header hasToken={hasToken}      setHasToken={setHasToken} setRecipes={setRecipes}/>
            <AppRoutes recipes={recipes}     menuRecipes={menuRecipes}
                       hasToken={hasToken}   setHasToken={setHasToken}
                       addToMenu={addToMenu} deleteFromMenu={deleteFromMenu}
                       setRecipes={setRecipes} allRecipes={allRecipes}/>
        </Flex>
    )
}

