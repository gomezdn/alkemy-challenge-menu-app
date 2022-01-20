import React from "react"
import Swal from "sweetalert2"
import API from "../api/Api.js"

export default function LoginForm() {

    function handleError() {
        Swal.fire({
            title: 'There was a problem with your input or connection.',
            text: 'Try again.',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }

    function saveTokenToStorage(token) {
        window.localStorage.setItem("authToken", token)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const user = event.target.email.value
        const pass = event.target.password.value
        API.getLoginToken(user, pass, handleError).then(res => saveTokenToStorage(res))    
    }

    return (
        <form id="loginForm" onSubmit={handleSubmit}>
            <input className="loginInput" required type="email" name="email" autoComplete="off" placeholder="Enter your email..."/>
            <input className="loginInput" required type="password" name="password" autoComplete="off" placeholder="Enter your password..."/>
            <button className="loginBtn" type="submit">Login</button>
        </form>
    )
}