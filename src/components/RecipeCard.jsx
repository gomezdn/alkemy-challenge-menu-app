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
    
    
    const recipeProps = {
        Cheap: recipeObject.cheap,
        GlutenFree: recipeObject.glutenFree,
        Popular: recipeObject.veryPopular,
        Healthy: recipeObject.veryHealthy,
        Vegan: recipeObject.vegan,
        Vegetarian: recipeObject.vegetarian,
    }

    const info = {
        title: recipeObject.title,
        imageUrl: recipeObject.image,
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

    function displayPropertiesListItems(propsObject) {
        const keys = Object.keys(propsObject)
        const listItems = keys.map(key => {
            return(
                <ListItem>
                    <ListIcon color={propsObject[key] ? "#aed687" : "black"}
                              as={propsObject[key] ? CheckCircleIcon : SmallCloseIcon}/>
                    {key}
                </ListItem>
            )
        })
        console.log(listItems)
        return listItems
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
                {displayPropertiesListItems(recipeProps)}
            </List>
            <Stack w="100%" direction="row" justify="space-around">
                <Link to={`/recipeInfo/${recipeObject.id}`}>
                    <Button mb="1em" size="md" p={["1.4em 1em","0 1em"]} bg="#D5C3C6"
                        colorScheme="red" variant="outline">Details</Button>
                </Link>
                <Button mb="1em" size="md" p={["1.4em 0.6em","0 1em"]} bg="#D5C3C6" onClick={handleActionClick}
                        colorScheme="red" variant="outline">{addOrDelText}</Button>
            </Stack>
        </Flex>
    )
}