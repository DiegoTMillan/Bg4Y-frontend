import React from "react";
import images from "../../exports/images";
import classes from "./Slider.module.css";
import { motion } from "framer-motion";

const Slider = () => {
  return (
    <motion.div className={classes.sliderContainer}>
      <motion.div className={classes.slider} drag='x' dragConstraints={{right:0, left:-730} }>
        {images.map((image) => (
          <motion.div className={classes.item}>
            <img src={image} alt="something wrong has happened" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
