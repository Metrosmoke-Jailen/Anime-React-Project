// src/components/ui/StatBar.jsx
import { useEffect, useState } from "react";
import styles from "./StatBar.module.css";

function StatBar({ label, value, max = 100 }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const percentage = (value / max) * 100;
    setTimeout(() => setWidth(percentage), 100);
  }, [value, max]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.labelRow}>
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className={styles.barBackground}>
        <div
          className={styles.barFill}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default StatBar;