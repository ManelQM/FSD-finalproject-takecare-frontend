// import React,{ useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteUser, getAllUsers } from "../../../services/apiCalls";
// import { addUsers, setError } from "../AdminSlice";
// import {Button, Card} from "react-bootstrap/Button";


// const AdminUsers = () => {
//   const dispatch = useDispatch();
//   const allUsers = useSelector((state) => state.allUsers);
//   const error = useSelector((state) => state.error);
//   const userJWT = useSelector((state) => state.userJWT);

//   const destroyUser = (userDelete) => {
//     deleteUser(userDelete, userJWT).then((res) => {
//       getAllUsers(userJWT)
//         .then((res) => {
//           dispatch(addUsers(res.data));
//         })
//         .catch((error) => {
//           dispatch(setError(error.response?.data || "ups intentalo de nuevo"));
//         });
//     });
//   };

//   useEffect(() => {
//     //This function is triggered when the component is mounted for the first time.
//     getAllUsers(userJWT)
//       .then((res) => {
//         dispatch(getAllUsers(res.data));
//       })
//       .catch((error) => {
//         dispatch(setError(error.response?.data || "try again"));
//       });
//   }, []);


//   if (allUsers.length !== 0) {
//     return (
//       <div className="contentStyle2">
//         {allUsers.map((allUser) => {
//           return (
//             <Card style={{ width: "18rem" }}>
//               <Card.Body>
//                 <Card.Title>{allUser.name}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">
//                   {allUser.surname}
//                 </Card.Subtitle>
//                 <Card.Text>{allUser.nickname}</Card.Text>
//                 <Card.Text>{JSON.stringify(allUser.email)}</Card.Text>
//                 <Button variant="danger" onClick={() => destroyUser(allUser._id)}>
//                   Eliminar
//                 </Button>
//               </Card.Body>
//             </Card>
//           );
//         })}
//       </div>
//     );
//   } 
// };

// export default AdminUsers;
