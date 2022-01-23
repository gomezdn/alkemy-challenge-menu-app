import React from "react"
import Swal from "sweetalert2"
import API from "../api/Api.js"
import {FormControl, Input, Button, VStack} from "@chakra-ui/react"

export default function LoginForm() {

    function handleError(form) {
        Swal.fire({
            title: 'There was a problem with your input or connection.',
            text: 'Try again.',
            icon: 'error',
            confirmButtonText: 'Continue'
          })
        form.reset()
    }

    function saveTokenToStorage(token) {
        window.localStorage.setItem("authToken", token)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const user = event.target.email.value
        const pass = event.target.password.value
        API.getLoginToken(user, pass, ()=>handleError(event.target)).then(res => saveTokenToStorage(res))    
    }

    return (
        <FormControl w={["98%", "40%"]} bg="#F5D491" mt={["0", "3em"]} ml={["0","3.5em"]}
                     paddingY="4.5em" borderRadius="5px"
                     as="form" onSubmit={handleSubmit}>
            <VStack spacing="3em">
                <Input  w="max-content" variant="flushed"  isRequired type="email"    textAlign="center" _placeholder={{color: "black"}}
                        name="email"       autoComplete="off" placeholder="Enter your email..."
                        focusBorderColor="#95C0C6"/>
                <Input  w="max-content" maxW="max-content" variant="flushed"  isRequired type="password" textAlign="center" _placeholder={{color: "black"}}
                        name="password"    autoComplete="off" placeholder="Enter your password..."
                        focusBorderColor="#95C0C6"/>
                <Button bg="#95C0C6" colorScheme="#C5283D" maxW="max-content" type="submit">Login</Button>
            </VStack>
        </FormControl>
    )
}