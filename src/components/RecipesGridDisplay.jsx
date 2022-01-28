import React from "react"
import RecipeCard from "../components/RecipeCard.jsx"
import API from "../api/Api.js"
import {Grid, Stack, Input, FormControl, InputLeftElement, InputGroup, Button} from "@chakra-ui/react"
import {Search2Icon} from "@chakra-ui/icons"

export default function RecipesGridDisplay(props) {

    function handleSubmit(event) {
        event.preventDefault()
        const searchTerm = event.target.search.value
        event.target.search.value = ""
        API.getRecipes(searchTerm).then(res => props.setRecipes(res))
    }

    return (
        <Stack direction="column" align="center" w="100%">

            <FormControl as="form" width={["60%", "35%"]} onSubmit={handleSubmit}>
                <InputGroup>
                    <InputLeftElement type="submit" children={<Search2Icon/>}
                                      pointerEvents="none" pl="1em"/>
                    <Input variant="filled"  type="text" _placeholder={{color: "black"}}
                           autoComplete="off" focusBorderColor="brown" fontFamily="monospace"
                           textAlign="center" w="100%" name="search" placeholder="Search for recipes here..."/>
                </InputGroup>
                <Button type="submit" display="none"/>   
            </FormControl>
           
            <Grid paddingY="1em" gap="1em 1em" w="max-content" justify="center" templateColumns={["1fr","1fr 1fr 1fr 1fr"]}>
                {props.recipes.map(
                    recipe => <RecipeCard menuRecipes={props.menuRecipes}
                                        addToMenu={props.addToMenu}
                                        deleteFromMenu={props.deleteFromMenu}
                                        recipeObject={recipe}
                                        key={recipe.id}/>
                )}
            </Grid>
        </Stack>

    )
}


