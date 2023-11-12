import { RangeProps } from "./Range.props";
import styles from "./Range.module.css";
import cn from "classnames";
import { ChangeEvent, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { priceRu } from "../../helpers/helpers";

export const Range = ({range, setRange, className, children, ...props}: RangeProps):JSX.Element => {
  const controls = useAnimation();

  const [rangeOne, setRangeOne] = useState<number>(0);
  const [rangeTwo, setRangeTwo] = useState<number>(100);

  useEffect(() => {
    setRange && setRange({min: rangeOne * 300, max: rangeTwo * 300});
    controls.start({background: `linear-gradient(90deg, #B2B5BB ${rangeOne}%, #444B58 ${rangeOne}%, #444B58 ${rangeTwo}%, #B2B5BB ${rangeTwo}%)`});
  }, [rangeOne, rangeTwo, controls]);


  const handleMinChange = (radius: string) => {
    const value = parseFloat(radius);
    if(value <= rangeTwo) {
      setRangeOne(value);
    }
  };

  const handleMaxChange = (radius: string) => {
    const value = parseFloat(radius);
    if(value >= rangeOne) {
      setRangeTwo(value);
    }
  };

  return (
  <div className={styles.container}>
    <div className={styles.rangeValues}>
      <span>{priceRu(rangeOne * 300)}</span>
      <span>{priceRu(rangeTwo * 300)}</span>
    </div>

    <motion.div 
      animate={controls}
      className={styles.track}
      initial={{background: `linear-gradient(90deg, #B2B5BB ${rangeOne}%, #444B58 ${rangeOne}%, #444B58 ${rangeTwo}%, #B2B5BB ${rangeTwo}%)`}}
      transition={{duration: 0}}
    >
      <div></div>
    </motion.div>
    
    <input 
      type="range" 
      value={rangeOne} 
      min={0} 
      max={100} 
      id="slider-1" 
      className={styles.range} 
      onChange={({ target: {value: radius} }) => handleMinChange(radius)}
    />
    <input 
      type="range" 
      value={rangeTwo} 
      min={0} 
      max={100} 
      id="slider-2" 
      className={styles.range}
      onChange={({ target: {value: radius} }) => handleMaxChange(radius)}
    />
  </div>
  );
};