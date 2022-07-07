//import components, tools, and css
import { Fragment } from "react";
import classes from "./Boardgames.module.css";
import { Spinner } from "../../Components/spinner/Spinner";
import { useState, useEffect } from "react";
import { BgCard } from "../../Components/bgCard/BgCard";

export const Boardgames = (props) => {
  // save data about boardgames
  const [gamesDetails, setGamesDetails] = useState();

  useEffect(() => {
    //getting all games
    fetch(`http://127.0.0.1:8000/boardgames/`)
      .then((res) => res.json())
      .then((data) => {
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
      <div className={classes.bigBox}>
        <div className={classes.titles}>
          <div>
            <h1>The boardgames shelf</h1>
            <h3>most shared board games</h3>
          </div>
          {/* <img src={require('../../img/junta.jpeg')} /> */}
        </div>
        <div className={classes.container}>
          {gamesDetails.data.map((game, index) => {
            return (
              <BgCard
                photo={game.photo}
                name={game.name}
                editorial={game.editorial}
                author={game.author.join(", ")}
                numPlayers={`${game.numPlayers.min} - ${game.numPlayers.max} players`}
                duration={`${game.avgMinDuration} min`}
                ageRecommended={`+ ${game.minAgeRecommended} years`}
                expansions={game.expansions.join(", ")}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
