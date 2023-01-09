import axios from 'axios'; 

const API_URL = 'http://localhost:3001';

let returnedMessage = ""; 

export let loginUser = async (values) => {
    try {
        await axios.post(`${API_URL}/auth/login`, {
            "Email": values.email,
            "Password": values.password            
        }).then(response => {
            returnedMessage = response.data
        })
        return returnedMessage
    }
    catch(error) {
        returnedMessage = "Ivalid Email or Password"
        return returnedMessage
    }
    };
