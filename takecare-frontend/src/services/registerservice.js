
    import axios from "axios";

    const API_URL = 'http://localhost:3001';

    let returnedMessage = ""

    export let registerUser = async (values) => {

        try {
            await axios.post(`${API_URL}/users/register`, {
                "email": values.email,
                "password": values.password,
                "nickname": values.nickname,
                "name": values.name,
                "surname": values.surname,
                
            }).then(response => {
                console.log(response)
                returnedMessage = response.data.message
            })
            return returnedMessage
         }
        catch (error) {
            returnedMessage = "This email has been registered already."
            return returnedMessage
         }
  };