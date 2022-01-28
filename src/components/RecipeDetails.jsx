import React from "react"
import {useParams} from "react-router-dom"
import {Heading, Text, Image, Stack} from "@chakra-ui/react"

export default function RecipeDetails(props) {
    const {id} = useParams()
    const recipe = props.allRecipes.find(rec => rec.id == id)

    return (
        <Stack fontFamily="monospace" bg="#E3C16F" pt="1em" margin="0 3em" rounded="xl" fontSize="1.5em" 
               direction="column" align="center" justify="center" spacing="1em">
            <Heading color="brown" fontFamily="monospace">{recipe.title}</Heading>
            <Image maxW={["200px", "350px"]} rounded="md" h="auto" src={recipe.image}/>
            <Text color="#90323D" fontSize="1.2em">{`This plate costs $ ${recipe.pricePerServing} per serving.`}</Text>
            <Text color="#90323D" fontSize="1.2em">{`It will be ready in ${recipe.readyInMinutes} minutes.`}</Text>
            <Text color="#90323D" fontSize="1.2em">{`It has a Health Score of ${recipe.healthScore}`}</Text>
            <Text p="1em 2em 0.2em 2em" bg="#D8D8D8" rounded="md" lineHeight="2em" textAlign="justify" maxW="70%" dangerouslySetInnerHTML={{__html:`${recipe.summary}`}}></Text>
        </Stack>
    )
}
