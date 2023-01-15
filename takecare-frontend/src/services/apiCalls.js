import axios from 'axios'; 

const API_URL = 'http://localhost:3001';

let returnedMessage = ""; 

export let loginUser = async (values) => {
    try {
        await axios.post(`${API_URL}/auth/login`, {
            "email": values.email,
            "password": values.password,
            
        }).then(response => {
            
            returnedMessage = response.data;
        })
        return returnedMessage
        
        
    }
    catch(error) {
        returnedMessage = "Ivalid Email or Password"
        return returnedMessage
    }
};


export let registerUser = async (values) => {

    try {
        await axios.post(`${API_URL}/users/register`, {
            "email": values.email,
            "password": values.password,
            "nickname": values.nickname,
            "name": values.name,
            "surname": values.surname,
            
        }).then(response => {
            returnedMessage = response.data.message
        })
        return returnedMessage
     }
    catch (error) {
        returnedMessage = "This email has been registered already."
        return returnedMessage
     }
};

export let publicationsReq = async () => {

    let res = await axios.get(`${API_URL}/publications/allpublications`);

    return res.data.results; 
}