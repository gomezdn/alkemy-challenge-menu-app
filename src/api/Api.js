import axios from "axios"

const baseUrl = "https://api.spoonacular.com/recipes/complexSearch?"
const key = "abfb2a7c962043cba83e3c01e2232ed9"

const API = {  
    getLoginToken: (user, pass) => {
        const data = {email: user, password: pass}
        const url = "https://challenge-react.alkemy.org/"
        
        return axios.post(url, data).then(res => res.data.token).catch(err => console.log(err))
    },

    getRecipes: (searchTerm) => {
        const url = `${baseUrl}&query=${searchTerm}&number=16&apiKey=${key}&addRecipeInformation=true`
        return axios.get(url).then(res => res.data.results)
    }
}



export default API