import React from "react"
import RecipeCard from "../components/RecipeCard.jsx"
import {Grid, Stack, Input} from "@chakra-ui/react"

export default function RecipesGridDisplay(props) {

    return (
        <Stack direction="column" align="center">
            <Input variant="filled"  _placeholder={{color: "black"}} focusBorderColor="brown"
                    textAlign="center" width={["70%", "35%"]} placeholder="Search for recipes here..."/>
            <Grid paddingY="1em" gap="1em" w="max-content" justify="center" templateColumns={["1fr","1fr 1fr 1fr 1fr"]}>
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


