import {useContext} from "react";
import { Fragment } from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from "../../Components/AuthContext";

export const Dashboard = () => {
    const {token, setToken} = useContext(AuthContext);
    if (!token) return <Navigate to="/login" replace/>;
    return(
        <Fragment>
            <h1>
                Dashboard
            </h1>
            <button onClick={()=>setToken(undefined)}>Log out</button>
        </Fragment>
    );
};