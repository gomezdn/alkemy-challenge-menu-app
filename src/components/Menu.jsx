import React, {useMemo} from "react"
import RecipeCard from "./RecipeCard.jsx"
import {Grid, Flex, Text, Stack} from "@chakra-ui/react"


export default function Menu(props) {
    
    const menuPrice = useMemo(() => {
        const prices = props.menuRecipes.map(recipe => recipe.pricePerServing)
        return prices.reduce((a, b) => a + b, 0)
    }, [props.menuRecipes])
    
    const avgPrepTime = useMemo(() => {
        const prepTimes = props.menuRecipes.map(recipe => recipe.readyInMinutes)
        const totalRecipes = props.menuRecipes.length 
        const totalTime = prepTimes.reduce((a, b) => a + b, 0)
        return totalTime / totalRecipes
    }, [props.menuRecipes])

    const avgHealthScore = useMemo(() => {
        const scores = props.menuRecipes.map(recipe => recipe.healthScore)
        const totalRecipes = props.menuRecipes.length
        const totalScores = scores.reduce((a, b) => a + b, 0)
        return totalScores / totalRecipes
    }, [props.menuRecipes])

    return (
        <Flex bg="#2D3047" direction="column" align="center" justify="space-around" mb="1em"
              spacing="1em" maxW="max-content" w="max-content" p="2em" rounded="lg">

            <Stack mb="1em" fontFamily="monospace" color="white" fontSize="1.5em">
                <Text>Menu price: {menuPrice ? `$ ${menuPrice}` : ""}</Text>
                <Text>Average preparation time: {avgPrepTime ? avgPrepTime : ""}</Text>
                <Text>Average health score: {avgHealthScore ? avgHealthScore : ""}</Text>
            </Stack>
            
            <Grid justify="center" align="center" templateColumns={["1fr", "1fr 1fr 1fr 1fr"]} gap="1em">
                {props.menuRecipes.map(recipe => <RecipeCard menuRecipes={props.menuRecipes}
                                                             addToMenu={props.addToMenu}
                                                             deleteFromMenu={props.deleteFromMenu}
                                                             recipeObject={recipe}
                                                             key={recipe.id}/>
                )}        
            </Grid>
        </Flex>
    )
}