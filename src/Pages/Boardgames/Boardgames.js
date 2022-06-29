//import components, tools, and css
import { Fragment } from "react";
import classes from "./Boardgames.module.css";
import { Spinner } from "../../Components/spinner/Spinner";
import { useState, useEffect } from "react";
// import { Row } from "../../Components/row/row";

export const Boardgames = (props) => {
  // save data about boardgames
  const [gamesDetails, setGamesDetails] = useState();

  useEffect(() => {
    //getting all games
    fetch(`http://127.0.0.1:8000/boardgames/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setGamesDetails(data);
      });
  }, []);

  //While is charging, you can see a spinner
  if (!gamesDetails) {
    return (
      <div className={classes.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.titles}>
          <h1>Boardgames database</h1>
          <h3>most shared board games</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>editorial</th>
              <th>author</th>
              <th>num players</th>
              <th>avg duration</th>
              <th>min age</th>
              <th>exps</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO add new file component
            {bgDetails.map(game => {
              <Row details={game}/>
            })} */}
            {gamesDetails.data.map((game) => {
              return (
                <tr>
                  <td>{game.name}</td>
                  <td>{game.editorial}</td>
                  <td>
                    {game.author[0]}<br/>{game.author[1]}<br/>{game.author[2]}
                  </td>
                  <td>
                    {game.numPlayers.min} - {game.numPlayers.max}
                  </td>
                  <td>{game.avgMinDuration}</td>
                  <td>{game.minAgeRecommended}</td>
                  <td>
                    {game.expansions[0]}
                    <br />
                    {game.expansions[1]}
                    <br />
                    {game.expansions[2]}
                    <br />
                    {game.expansions[3]}
                    <br />
                    {game.expansions[4]}
                    <br />
                    {game.expansions[5]}
                    <br />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
