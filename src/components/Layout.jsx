import React, {useState} from "react"
import Header from "./Header.jsx"
import {Flex} from "@chakra-ui/react"
import Routes from "../routes/AppRoutes.jsx"


export default function Layout() {
    const recipes = JSON.parse(window.localStorage.getItem("recipes")).data.results
    const [menu, updateMenu] = useState([])
    return (
        <Flex align="center" rowGap="1em" direction="column">
            <Header/>
            <Routes recipes={recipes} menu={menu} updateMenu={updateMenu}/>
        </Flex>
    )
}

