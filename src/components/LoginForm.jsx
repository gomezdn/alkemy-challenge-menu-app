import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2"
import {useFormik} from "formik"
import API from "../api/Api.js"
import {FormControl, Input, Button, VStack, Text} from "@chakra-ui/react"

export default function LoginForm(props) {

    const navigate = useNavigate()
    const [btnLoading, setBtnLoading] = useState(false)
    
    function validate(values) {
        const errors = {}
        if (values.email == "") {errors.email = "Email can't be empty."}
        if (values.password == "") {errors.password = "Password can't be empty"}
        return errors
    }

    const formik = useFormik({
        initialValues: {email: "", password: ""},
        validate,
        validateOnChange: false,
        onSubmit: submitLogin
    })

    function handleError() {
        Swal.fire({
            background: "#EEE5D5",
            confirmButtonColor: "#752F3A",
            title: 'There was a problem with your input or connection.',
            text: 'Try again.',
            icon: 'error',
            confirmButtonText: 'Continue'
          })
        setBtnLoading(false)
    }

    function saveTokenToStorage(token) {
        window.localStorage.setItem("authToken", token)
    }

    function submitLogin(values) {
        setBtnLoading(true)
        const user = values.email
        const pass = values.password
        API.getLoginToken(user, pass).then(res => {
                                        saveTokenToStorage(res)
                                        props.setHasToken(true)
                                        navigate("/alkemy-challenge-menu-app")})
                                     .catch(handleError)
    }



    return (
        <FormControl w={["98%", "40%"]} bg="#F5D491" mt={["0", "3em"]} ml={["0","3.5em"]}
                     paddingY="4.5em" borderRadius="5px" as="form" onSubmit={formik.handleSubmit}>

            <VStack spacing="3em">
                <VStack>
                    <Input  w="max-content" variant="flushed"  type="email"    textAlign="center" _placeholder={{color: "black"}}
                            name="email"    autoComplete="off" placeholder="Enter your email..."
                            focusBorderColor="#95C0C6" value={formik.values.email} onChange={formik.handleChange} />
                    <Text color="brown">{formik.errors.email ? formik.errors.email : ""}</Text>
                </VStack>
                <VStack>
                    <Input  w="max-content" maxW="max-content" variant="flushed"  type="password" textAlign="center" _placeholder={{color: "black"}}
                            name="password" autoComplete="off" placeholder="Enter your password..."
                            focusBorderColor="#95C0C6" value={formik.values.password} onChange={formik.handleChange}/>
                    <Text color="brown">{formik.errors.password ? formik.errors.password : ""}</Text>
                </VStack>
                <Button bg="#95C0C6" isLoading={btnLoading} name="button" colorScheme="#C5283D" maxW="max-content" type="submit">Login</Button>
            </VStack>

        </FormControl>
    )
}