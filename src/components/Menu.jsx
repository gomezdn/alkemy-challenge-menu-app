import React, {useMemo} from "react"
import {Link} from "react-router-dom"
import RecipeCard from "./RecipeCard.jsx"
import {Grid, Flex, Text, Stack, Container, Image} from "@chakra-ui/react"
import MenuCart from "../assets/menu-cart.png"


function EmptyMenu() {
    return (
        <Container maxW="max-content">
            <Stack mt="3em" align="center" direction="column" justify="center" spacing="2.2em">
                <Image src={MenuCart} w={["250px", "300px"]}/>
                <Text fontSize="1.5em" maxW="max-content">You haven't added any recipe yet! Go <Link to="/search"><Text as="span" color="brown">search</Text></Link> for them.</Text>
            </Stack>
        </Container>
    )
}

export default function Menu(props) {
    
    const isEmpty = useMemo(() => {
        return props.menuRecipes.length < 1
    },[props.menuRecipes])

    const menuPrice = useMemo(() => {
        const prices = props.menuRecipes.map(recipe => recipe.pricePerServing)
        return prices.reduce((a, b) => a + b, 0).toFixed(2)
    }, [props.menuRecipes])
    
    const avgPrepTime = useMemo(() => {
        const prepTimes = props.menuRecipes.map(recipe => recipe.readyInMinutes)
        const totalRecipes = props.menuRecipes.length 
        const totalTime = prepTimes.reduce((a, b) => a + b, 0)
        const avgTime = totalTime / totalRecipes
        return Number.isInteger(avgTime) ? avgTime : avgTime.toFixed(2) 
    }, [props.menuRecipes])

    const avgHealthScore = useMemo(() => {
        const scores = props.menuRecipes.map(recipe => recipe.healthScore)
        const totalRecipes = props.menuRecipes.length
        const totalScores = scores.reduce((a, b) => a + b, 0)
        const avgScore = totalScores / totalRecipes
        return Number.isInteger(avgScore) ? avgScore : avgScore.toFixed(2)
    }, [props.menuRecipes])


    if (isEmpty) {return EmptyMenu()}
        else return (
            <Flex display={props.menuRecipes[0] ? "flex" : "none"} bg="#E3C16F" direction="column" align="center" justify="space-around" mb="1em"
                spacing="1em" p="2em" rounded="lg">

                <Stack mb="1em" fontFamily="monospace" fontSize="1.7em">
                    <Text>Menu price: {menuPrice ? `$ ${menuPrice}` : ""}</Text>
                    <Text>Average preparation time: {avgPrepTime ? `${avgPrepTime} min`: ""}</Text>
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



