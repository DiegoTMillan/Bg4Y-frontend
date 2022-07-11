// import { useState, useEffect, Fragment } from "react";
// import { Spinner } from "../../Components/spinner/Spinner";
// import { Card } from "../../Components/Card/Card";
// import classes from "./Users.module.css";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// export const Users = () => {
//   const token = useSelector((state) => state.login.login.data.data.token);
//   const [usersDetails, setUsersDetails] = useState();
//   const [id, setId] = useState()

//   axios
//     .get("http://127.0.0.1:8000/users/", {
//       headers: {
//         authorization: "Bearer " + token,
//         "Content-Type": "application/json",
//       },
//     })
//     .then((response) => {
//       setUsersDetails(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//     const handleChange = (e) => {
//       setId(e.current.value)
//     }
//     console.log(id)

//      function deleteStudent(id) {
//       const response = await fetch(`127.0.0.1:8000/users/${id}`, {
//         method: "DELETE",
//       });
//       return response.json();
//     }

//   if (!usersDetails) {
//     return (
//       <div className={classes.spinner}>
//         <Spinner />
//       </div>
//     );
//   }
//   return (
//     <Fragment>
//       <h1 className={classes.titles}>Users</h1>
//       <div className={classes.bigContainer}>
//         {usersDetails.data.map((user, index) => {
//           return (
//             <Fragment>
//               <div className={classes.container}>
//                 <Card
//                   key={index}
//                   photo={user.photo}
//                   first_name={user.first_name}
//                   last_name={user.last_name}
//                   email={user.email}
//                   phone={user.phone}
//                   city={user.city}
//                   district={user.district}
//                   game_name={user.game_name.join(", ")}
//                 />
//               </div>
//               <div>
//                 <button
//                   onClick={handleChange}
//                   value={user._id}
//                   className={classes.button}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </Fragment>
//           );
//         })}
//       </div>
//     </Fragment>
//   );
// };
