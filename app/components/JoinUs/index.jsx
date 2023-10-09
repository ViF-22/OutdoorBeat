import React from "react";
import styles from "./styles.module.css";

function JoinUs() {
  return (
    <section className={styles.join_us}>
      <div className={styles.join_us__inner}>
        <h2 className={styles.join_us__title}>
          Join the
          <span className={styles.mission}>
            mission
            <svg
              viewBox="0 0 634 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.40051 2.37525C1.40051 2.37525 68.8688 48.875 223.369 20.375C377.869 -8.125 633.4 12.3911 633.4 12.3911"
                stroke="black"
                strokeWidth="4"
              />
            </svg>
          </span>
        </h2>
        <p className={styles.join_us__text}>
          Leave your email to be part of the email list when we launch.
        </p>
        <button className={styles.button}>Sign me up</button>
      </div>
    </section>
  );
}

export default JoinUs;
