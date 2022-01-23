import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App.jsx"
import {ChakraProvider} from "@chakra-ui/react"
import "./css/reset.css"

ReactDOM.render(
    <ChakraProvider>
        <App />
    </ChakraProvider>,
    document.getElementById("root")
)



