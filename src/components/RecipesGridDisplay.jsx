import React from "react"
import RecipeCard from "../components/RecipeCard.jsx"
import {Grid} from "@chakra-ui/react"

export default function RecipesGridDisplay(props) {
    return (
        <Grid paddingY="1em" gap="1em" w="max-content" justify="center" templateColumns={["1fr","1fr 1fr 1fr 1fr"]}>
            {props.recipes.map(
                rec =><RecipeCard menu={props.menu} recipeObject={rec}/>
            )}
        </Grid>
    )
}