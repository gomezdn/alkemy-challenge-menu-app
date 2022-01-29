import React from "react"
import RecipeCard from "../components/RecipeCard.jsx"
import API from "../api/Api.js"
import Swal from "sweetalert2"
import {useFormik} from "formik"
import {Grid, Stack, Input, FormControl,
       InputLeftElement, InputGroup, Button, Text} from "@chakra-ui/react"
import {Search2Icon} from "@chakra-ui/icons"

export default function RecipesGridDisplay(props) {

    function searchRecipes(values) {
        const searchTerm = values.search
        API.getRecipes(searchTerm).then(res => {
            if (res.length == 0) {
                Swal.fire({
                    background: "#EEE5D5",
                    confirmButtonColor: "#752F3A",
                    text: "No results, try something else.",
                    confirmButtonText: 'Ok'})
            } else {
                props.setRecipes(res)
              }
        })
    }

    function validate(values) {
        const errors = {}
        if (values.search.length < 3) {errors.search = "Enter at least 3 characters to search."}
        return errors
    } 

    const formik = useFormik({
         initialValues: {search: ""},
         validate,
         validateOnChange: false,
         validateOnBlur: false,
         onSubmit: searchRecipes
    })

    return (
        <Stack direction="column" align="center" w="100%">

            <FormControl as="form" width={["60%", "35%"]} onSubmit={formik.handleSubmit}>
                <InputGroup>
                    <InputLeftElement type="submit" children={<Search2Icon/>}
                                      pointerEvents="none" pl="1em"/>

                    <Input variant="filled"  type="text" _placeholder={{color: "black"}} value={formik.values.search}
                           autoComplete="off" focusBorderColor="brown" fontFamily="monospace" onChange={formik.handleChange}
                           textAlign="center" w="100%" name="search" id="search" placeholder="Search for recipes here..."/>
                </InputGroup>
                <Text m={["0", "0.25em 0 0 7.5em"]} color="brown">{formik.errors.search ? formik.errors.search : ""}</Text>

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


