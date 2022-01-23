import React from "react"
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

    const info = {
        title: props.recipeObject.title,
        imageUrl: props.recipeObject.image,
        cheap: props.recipeObject.cheap,
        glutenFree: props.recipeObject.glutenFree,
        popular: props.recipeObject.veryPopular,
        healthy: props.recipeObject.veryHealthy,
        vegan: props.recipeObject.vegan,
        vegetarian: props.recipeObject.vegetarian,
        price: props.recipeObject.pricePerServing,
        time: props.recipeObject.readyInMinutes,
        health: props.recipeObject.healthScore,
    }

    return (
        <Flex maxW={["90vw", "300px"]} paddingX="10%" rowGap="0.5em" border="1px solid #555B6E" 
              bg="#F9F0F2"        align="center"          justify="stretch"
              direction="column"  borderRadius="5px"     shadow="xl"
              justify="space-evenly">

            <Heading maxW="max-content" fontFamily="monospace" mt="0.5em" fontSize="2.5em" textAlign="center">{info.title}</Heading>
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
                <Button mb="1em" size="md" paddingX="1em" bg="#D5C3C6" colorScheme="red" variant="outline">Details</Button>
                <Button mb="1em" size="md" paddingX="1em" bg="#D5C3C6" colorScheme="red" variant="outline">Add to menu</Button>
            </Stack>
        </Flex>
    )
}