import React from "react"
import {Stack, Container, Box, Heading, Input} from "@chakra-ui/react"
import {Link} from "react-router-dom"


export default function Header() {
    return (
        <Box padding="1em" width="100%" bg="#752F3A" boxShadow="sm">
            <Stack direction={["column", "row"]} rowGap="0.5em" justify="space-between" align="center">

                <Heading color="#FFFDFD" ml={["0", "1em"]}>Your menu!</Heading>
                <Input variant="filled"  _placeholder={{color: "black"}} focusBorderColor="white"
                        textAlign="center" width={["70%", "35%"]} placeholder="Search for recipes here..."/>
                <Stack justify="space-between" spacing="1em" direction="row" color="white" fontSize="1.2em" as="nav">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/search">Search</Link>
                    <Link className="link" to="/logout">Logout</Link>
                </Stack>

            </Stack>
        </Box>
    )
}

