import axios from "axios";


const apiurl = 'http://127.0.0.1:8000/api/'
const token ='Bearer'+ localStorage.getItem('Token')
const authaxios = axios.create (
    {
        baseURL: apiurl,
        headers: {
            'Authorization': token
        }
    }
)

export default authaxios