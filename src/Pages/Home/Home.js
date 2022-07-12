import { Fragment } from "react";
import classes from "./Home.module.css";
import { News } from "../../Components/news/News";
import { Review } from "../../Components/reviews/Review";

export const Home = () => {
  return (
    <Fragment>
      <div className={classes.titles}>
        <h1>News & Reviews</h1>
      </div>
      <div className={classes.center}>
        <div className={classes.news}>
          <div className={classes.divTitle}>
            <h1 className={classes.newsTitle}>News</h1>
          </div>
            <News
            url="https://images.pexels.com/photos/8111367/pexels-photo-8111367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            text="All the lattest news about Essen 2022"
            author="Diego Tapia"
            date="27/06/22"
            link="/new1"
            />
          <News
            url="https://images.pexels.com/photos/8111328/pexels-photo-8111328.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-8111328.jpg&fm=jpg"
            text="Abstract games, are they here to stay?"
            author="Diego Tapia"
            date="25/06/22"
            link="/new2"
          />
          <News
            url="https://st.depositphotos.com/1009051/2363/i/450/depositphotos_23639719-stock-photo-playing-alias-game.jpg"
            text="Boardgames industry, an unstoppable bussiness"
            author="Diego Tapia"
            date="17/06/22"
            link="/new3"
          />
        </div>
        <div className={classes.reviews}>
          <div className={classes.divReview}>
            <h1 className={classes.reviewsTitle}>Reviews</h1>
          </div>
          <Review
            url="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            text="Settlers of Catan, a classic that never dies"
            author="Diego Tapia"
            date="20/06/22"
            link="/review1"
          />
          <Review
            url="https://images.unsplash.com/photo-1585504198199-20277593b94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1617&q=80"
            text="Do you want to be a roman trader? Let's see Concordia"
            author="Diego Tapia"
            date="07/06/22"
            link="/review2"
          />
          <Review
            url="https://images.pexels.com/photos/4691567/pexels-photo-4691567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            text="Don't forget the departure hour, Ticket to ride is ready"
            author="Diego Tapia"
            date="05/06/22"
            link="/review3"
          />
        </div>
      </div>
    </Fragment>
  );
};
