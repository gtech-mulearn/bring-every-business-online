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
              <p className={styles.quote}>
                "Together let’s bring 30 million business online"
              </p>
              <p className={styles.fv_tagline}>
                Project Awesome aka Bring Every Buissness Onine is an Open
                Source Initative to make an open source collection of webpages
                for every business out there. To contribute to the project all
                you have to do is build a website for a store or buiness online.
              </p>
              <button class={styles.start_contributing}>
                Start Contributing
              </button>
            </div>
          </div>
          <img src="/assets/fvimg1.jpg" alt="" className={styles.fv_image} />
        </div>

        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>
                {" "}
                A <span>Digital</span> Presence in this{" "}
                <span>Digital World</span>
              </p>
              <p className={styles.sv_tagline}>
                In today’s world, having a Digital presence is an absolute
                necessity, making stores easier to find, improving market reach
                and ultimately making life easier for both stores and customers.
                Unaware of its importance and lacking the necessary skills or
                resources, most local stores have still not made their way to
                the internet
              </p>
            </div>
            <div className={styles.right_side}>
              This Hacktoberfest, join us as we create an open source collection
              of Web pages for every business out there.
              <br />
              <br />
              Contributing to this project is as simple as it gets. All you have
              to do is scout for shops in your locality, gather information and
              create a Web page for them.
              <br />
              <br />
              P.S - Shops include Chayakadas, Thattukadas and basically any
              functional business!
            </div>
          </div>
        </div>

        <div className={styles.steps_view_container}>
          <div className={styles.steps_view}>
            <div className={styles.stv_texts}>
              <p className={styles.stv_heading}>
                Steps for <span>Contributing.</span>
              </p>
              <p className={styles.stv_tagline}>
                Below given is the step by step breakdown of how you can
                contribute to the project and create an online presence for a
                buisness nearby.
              </p>
            </div>
            <div className={styles.steps_container}>
              <div className={styles.step}>
                <p className={styles.step_heading}>Step 1</p>
                <p className={styles.step_text}>
                  Before starting you would have to signup for hacktoberfest
                  using the link which is provided above.Once that is done you
                  can{" "}
                  <a
                    href="https://github.com/gtech-mulearn/mulearn/"
                    className={styles.link}
                  >
                    fork
                  </a>{" "}
                  the repository from github.
                </p>
              </div>
              <div className={styles.step}>
                <p className={styles.step_heading}>Step 2</p>
                <p className={styles.step_text}>
                  There is folder inside the public folder named as India,
                  inside which there is folder called kerala having sub-folders
                  of each district. You can contribute to the disctrict in which
                  the buisness belongs to.
                </p>
              </div>
              <div className={styles.step}>
                <p className={styles.step_heading}>Step 3</p>
                <p className={styles.step_text}>
                  Make sure that the website that you are making for the
                  buisness satisfies all the basic requirements which are
                  specified below.
                </p>
              </div>
              <div className={styles.step}>
                <p className={styles.step_heading}>Step 4</p>
                <p className={styles.step_text}>
                  Once you have completed making the website. You can create a
                  pull request mentioning the sufficient details and create a
                  pull request.
                </p>
              </div>
              <div className={styles.step}>
                <p className={styles.step_heading}>Step 5</p>
                <p className={styles.step_text}>
                  Soon, our team will be quality checking the pull request and
                  will be merging it with the parent repository. Which ensures
                  and completes your participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
