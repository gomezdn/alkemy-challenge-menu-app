import React from "react"
import {useParams} from "react-router-dom"
import {Heading, Text, Image, Stack} from "@chakra-ui/react"

export default function RecipeDetails(props) {
    const {id} = useParams()
    const recipe = props.allRecipes.find(rec => rec.id == id)

    return (
        <Stack fontFamily="monospace" bg="#EEE5D5" pt="1em" margin={["0", "0 7em 0.5em 7em"]} rounded="xl" fontSize="1.5em" 
               direction="column" align="center" textAlign="center" justify="center" spacing="1em">

            <Heading color="brown" fontFamily="monospace">{recipe.title}</Heading>
            <Image maxW={["200px", "400px"]} rounded="md" h="auto" src={recipe.image}/>
            <Text color="#90323D" fontSize="1.2em">{`This plate costs $ ${(recipe.pricePerServing / 100).toFixed(2)} per serving.`}</Text>
            <Text color="#90323D" fontSize="1.2em">{`It will be ready in ${recipe.readyInMinutes} minutes.`}</Text>
            <Text color="#90323D" fontSize="1.2em">{`It has a Health Score of ${recipe.healthScore}`}</Text>
            <Text p="1em 2em 0.2em 2em" bg="#F0DCCA" rounded="md" lineHeight="2em" textAlign="center"
                  maxW={["100%","70%"]} dangerouslySetInnerHTML={{__html:`${recipe.summary}`}}></Text>
      
        </Stack>
    )
}
