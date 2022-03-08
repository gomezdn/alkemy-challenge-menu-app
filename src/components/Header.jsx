import React from "react"
import {Stack, Box, Heading} from "@chakra-ui/react"
import {Link} from "react-router-dom"



function NavBar(props) {

    function logout() {
        delete window.localStorage.authToken
        props.setHasToken(false)
        props.setRecipes([])
    }

    return (
        <Stack justify="space-between" spacing="1em" direction="row" color="white" fontSize="1.2em" as="nav">
            <Link to="/alkemy-challenge-menu-app/">Menu</Link>
            <Link to="/alkemy-challenge-menu-app/search">Search</Link>
            {props.hasToken ? <Link onClick={logout} to="/">Logout</Link> : ""}
        </Stack>
    )
}

export default function Header(props) {
    return (
        <Box padding="1em" width="100%" bg="#752F3A" boxShadow="sm">
            <Stack direction={["column", "row"]} rowGap="0.5em" justify="space-between" align="center">

                <Heading color="#FFFDFD" ml={["0", "1em"]}>Your menu!</Heading>
                <NavBar hasToken={props.hasToken} setHasToken={props.setHasToken}/>
            </Stack>
        </Box>
    )
}

