import React from "react";
import images from "../../exports/images";
import classes from "./Slider.module.css";
import { motion } from "framer-motion";

const Slider2 = () => {
  return (
    <motion.div className={classes.sliderContainer2}>
      <motion.div className={classes.slider} drag='x' dragConstraints={{right:-200, left:-840} }>
        {images.map((image, i) => (
          <motion.div key={i} className={classes.item}>
            <img src={image} alt="something wrong has happened" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Slider2;