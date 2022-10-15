import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <nav>
        <img src="/assets/µLearn.png" alt="" class={styles.mulearn_img} />
        <a
          href="http://discord.mulearn.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <button class={styles.joindiscord}>Join Discord</button>
        </a>
      </nav>
      <div className={styles.main_view_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Bring <span>Every Buisness</span> Online.
              </p>
              <p className={styles.fv_tagline}>
                Project Awesome aka Bring Every Buissness Onine is an Open
                Source Initative to make an open source collection of webpages
                for every business out there. To contribute to the project all
                you have to do is build a website for a store or buiness online.
              </p>
            </div>
          </div>
          <img src="/assets/fvimg1.jpg" alt="" className={styles.fv_image} />
        </div>
      </div>
    </>
  );
};

export default Home;
