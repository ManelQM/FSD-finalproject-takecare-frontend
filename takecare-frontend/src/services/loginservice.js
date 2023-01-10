import axios from 'axios'; 

const API_URL = 'http://localhost:3001';

let returnedMessage = ""; 

export let loginUser = async (values) => {
    try {
        await axios.post(`${API_URL}/auth/login`, {
            "email": values.email,
            "password": values.password,
            
        }).then(response => {
            console.log(response, "holaaaaaaaa")
            returnedMessage = response.data;
            console.log(returnedMessage,"señoorrrr ayuuudanoooossss")
        })
        return returnedMessage
        
        
    }
    catch(error) {
        returnedMessage = "Ivalid Email or Password"
        return returnedMessage
    }
    };
