//import components, tools, and css
import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Boardgames.module.css";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthContext";
import { useContext, useState, useEffect } from "react";

export const Boardgames = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <h1>Boardgames database</h1>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>editorial</th>
              <th>author</th>
              <th>number of players</th>
              <th>average duration</th>
              <th>minimum age recommended</th>
              <th>expansions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
