import React, {useState} from "react"
import Header from "./Header.jsx"
import {Flex} from "@chakra-ui/react"
import Routes from "../routes/AppRoutes.jsx"


export default function Layout() {


    const recipes = JSON.parse(window.localStorage.getItem("recipes")).data.results
    
    const [menuRecipes, setMenuRecipes] = useState([recipes[0],recipes[2],recipes[5],recipes[3]])

    return (
        <Flex align="center" rowGap="1em" direction="column">
            <Header/>
            <Routes recipes={recipes} menuRecipes={menuRecipes}
                    setMenuRecipes={setMenuRecipes}/>
        </Flex>
    )
}

