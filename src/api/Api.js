import axios from "axios"

const API = {
    getLoginToken: (user, pass, onError) => {
        const data = {email: user, password: pass}
        const url = "http://challenge-react.alkemy.org/"
        
        return axios.post(url, data).then(res => res.data.token).catch(onError)
    }
}



export default API