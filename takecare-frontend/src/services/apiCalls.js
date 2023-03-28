import axios from "axios";

const API_URL = "http://localhost:3001";

let returnedMessage = "";

export let loginUser = async (values) => {
  try {
    await axios
      .post(`${API_URL}/auth/login`, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        returnedMessage = response.data;
      });
    return returnedMessage;
  } catch (error) {
    returnedMessage = "Ivalid Email or Password";
    return returnedMessage;
  }
};

export let registerUser = async (values) => {
  try {
    await axios
      .post(`${API_URL}/users/register`, {
        email: values.email,
        password: values.password,
        nickname: values.nickname,
        name: values.name,
        surname: values.surname,
      })
      .then((response) => {
        returnedMessage = response.data.message;
      });
    return returnedMessage;
  } catch (error) {
    returnedMessage = "This email has been registered already.";
    return returnedMessage;
  }
};

export let publicationsReq = async () => {
  try {
    const res = await axios.get(`${API_URL}/publications/allpublications`, {
      params: {
        select: "title,nickname,text",
      },
    });
    return res.data;
  } catch (error) {
    errorMessage = "Cant get the publications";
    return errorMesage;
  }
};

export let newPublication = async (newPublicationData) => {
  try {
    const createPublication = await axios.post(
      `${API_URL}/publications/newpublication`,
      newPublicationData
    );
    return createPublication;
  } catch (error) {
    returnedMessage = "Cant create the publication";
    return returnedMessage;
  }
};

export const getProfile = async () => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    let res = await axios.get(`${API_URL}users/profile`, config);
    let data = res.data.user;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export let contractsReq = async (id, token) => {
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const listContracts = await axios.get(
    `${API_URL}/contracts/usercontracts/${id}`,
    config
  );
  return listContracts;
};

export const newContract = async (newContractData, token) => {
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const createContract = await axios.post(
    `${API_URL}/contracts/newcontract`,
    newContractData,
    config
  );
  return createContract;
};

export const deleteContract = async (contractid, token) => {
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const deletedContract = await axios.delete(
    `${API_URL}/contracts/deletecontract/${contractid}`,
    config
  );
  return deletedContract;
};

export const usersReq = async () => {
  try {
    const res = await axios.get(`${API_URL}/users/all`, {
      params: {
        select: "name,surname,nickname,email,city",
      },
    });
    return res.data;
  } catch (error) {
    errorMessage = "Cant get full users list";
    return errorMesage;
  }
};

export const deleteUser = async (email, jwt) => {
  return await axios.delete(`${API_URL}/users/delete` + email, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

export let updateProfile = async (newprofileData, token) => {
  try {
    const updateUser = await axios.patch(
      `${API_URL}/users/update/` + newprofileData.id,
      newprofileData,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return updateUser;
  } catch (error) {
    returnedMessage = "Cant update User";
    return returnedMessage;
  }
};

// export let allContractsList = async () => {
//   try {
//     const res = await axios.get( `${API_URL}/contracts/allcontracts`, {
//       params: {
//         select:"userid,publicationid,nickname,title",
//       },
//     });
//     return res.data;
//   } catch (error) {
//     errorMessage = "Cant get full contracts list";
//     return errorMessage;
//   };
// };
export let allContractsList = async (token) => {
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const accesAdminContracts = await axios.get(
    `${API_URL}/contracts/allcontracts`,
    config
  );
  return accesAdminContracts;
};
