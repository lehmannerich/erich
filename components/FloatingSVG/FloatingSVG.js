import Image from 'next/image';
import styles from "./FloatingSVG.module.css";

const FloatingSVG = ({ svgPath }) => {
  return (
    <div className={styles.container}>
      <Image src={svgPath} alt="floating-svg" className={styles.floatingSVG} layout="fill" objectFit="contain" />
    </div>
  );
};

export default FloatingSVG;
