import styles from "./FloatingSVG.module.css";

const FloatingSVG = ({ svgPath }) => {
  return (
    <div className={styles.container}>
      <img src={svgPath} alt="floating-svg" className={styles.floatingSVG} />
    </div>
  );
};

export default FloatingSVG;
