import React, {useMemo} from "react"
import {Link} from "react-router-dom"
import {Flex,
        Stack,
        Image,
        Heading,
        Button,
        List,
        ListItem,
        ListIcon} from "@chakra-ui/react"
import {CheckCircleIcon, SmallCloseIcon} from "@chakra-ui/icons"

export default function RecipeCard(props) {

    const recipeObject = props.recipeObject
    const isAdded = () => props.menuRecipes.some(recipe => recipe.id == recipeObject.id)

    const addOrDelText = useMemo(() => {
        return isAdded() ? "Delete from menu" : "Add to menu"
    },[isAdded()])
    
    
    const info = {
        title: recipeObject.title,
        imageUrl: recipeObject.image,
        cheap: recipeObject.cheap,
        glutenFree: recipeObject.glutenFree,
        popular: recipeObject.veryPopular,
        healthy: recipeObject.veryHealthy,
        vegan: recipeObject.vegan,
        vegetarian: recipeObject.vegetarian,
        price: recipeObject.pricePerServing,
        time: recipeObject.readyInMinutes,
        health: recipeObject.healthScore,
        summary: recipeObject.summary,
    }

    function handleActionClick() {
        if (isAdded()) {
            props.deleteFromMenu(recipeObject)
        }else {
            props.addToMenu(recipeObject)
        }
    }


    return (
        <Flex maxW={["90vw", "300px"]} paddingX="10%" rowGap="0.5em" border="1px solid #555B6E" 
              bg="#F9F0F2"        align="center"          justify="stretch"
              direction="column"  borderRadius="5px"     shadow="xl"
              justify="space-evenly">

            <Heading maxW="max-content" fontFamily="monospace" color="brown"
                     mt="0.5em" fontSize="2.2em" textAlign="center">{info.title}</Heading>
            <Image borderRadius="5px" w="200px" h="auto" src={info.imageUrl}/>
            <List  textAlign="left">
                <ListItem>
                    <ListIcon color={info.cheap ? "#aed687" : "black"} as={info.cheap ? CheckCircleIcon : SmallCloseIcon}></ListIcon>
                    Cheap
                </ListItem>
                <ListItem>
                    <ListIcon color={info.glutenFree ? "#aed687" : "black"} as={info.glutenFree ? CheckCircleIcon : SmallCloseIcon}></ListIcon>
                    Gluten free
                </ListItem>
                <ListItem>
                    <ListIcon color={info.popular ? "#aed687" : "black"} as={info.popular ? CheckCircleIcon : SmallCloseIcon}></ListIcon>
                    Very popular
                </ListItem>
                <ListItem>
                    <ListIcon color={info.healthy ? "#aed687" : "black"} as={info.healthy ? CheckCircleIcon : SmallCloseIcon}></ListIcon>
                    Very healthy
                </ListItem>
                <ListItem>
                    <ListIcon color={info.vegan ? "#aed687" : "black"} as={info.vegan ? CheckCircleIcon : SmallCloseIcon}></ListIcon>
                    Vegan
                </ListItem>
                <ListItem>
                    <ListIcon color={info.vegetarian ? "#aed687" : "black"} as={info.vegetarian ? CheckCircleIcon : SmallCloseIcon}></ListIcon>
                    Vegetarian
                </ListItem>
            </List>
            <Stack w="100%" direction="row" justify="space-around">
                <Link to={`/recipeInfo/${recipeObject.id}`}>
                    <Button mb="1em" size="md" paddingX="1em" bg="#D5C3C6"
                        colorScheme="red" variant="outline">Details</Button>
                </Link>
               
                <Button mb="1em" size="md" paddingX="1em" bg="#D5C3C6" onClick={handleActionClick}
                        colorScheme="red" variant="outline">{addOrDelText}</Button>
            </Stack>
        </Flex>
    )
}