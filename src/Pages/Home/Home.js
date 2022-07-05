import { Fragment } from "react";
import classes from "./Home.module.css";
import { News } from "../../Components/news/News";
import { Review } from "../../Components/reviews/Review";
import Slider from "../../Components/slider/Slider";

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
            text="All the latest news about Essen 2022"
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
            url="https://ksr-ugc.imgix.net/assets/024/933/912/046573ee55d8eeaae3c33f9660149d28_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1556465339&auto=format&frame=1&q=92&s=9b6bb3518eeb1b8d7f9b58b89a967646"
            text="On Mars, a deep review about Vital Lacerda's last game"
            author="Diego Tapia"
            date="20/06/22"
            link="/review1"
          />
          <Review
            url="https://live.staticflickr.com/65535/52074782049_19320915ec_b.jpg"
            text="Ark Nova, Is it really the best boardgame of Essen 2021?"
            author="Diego Tapia"
            date="07/06/22"
            link="/review2"
          />
          <Review
            url="https://cf.geekdo-images.com/y264FIxNHrfwWFg_Ir9wgA__large/img/wd0pWiEjYOppXp_fFWoSaahDsTg=/fit-in/1024x1024/filters:no_upscale():strip_icc()/pic5783313.jpg"
            text="Beyond the Sun, let's see if we can save humankind"
            author="Diego Tapia"
            date="05/06/22"
            link="/review3"
          />
        </div>
      </div>
    </Fragment>
  );
};
