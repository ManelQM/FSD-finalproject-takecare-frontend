import axios from 'axios'; 

const API_URL = 'http://localhost:3001';

let returnedMessage = ""; 

export let loginUser = async (values) => {
    try {
        await axios.post(`${API_URL}`)
    }
}