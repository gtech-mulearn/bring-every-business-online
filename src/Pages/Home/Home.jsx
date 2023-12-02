import React from "react";
import Footer from "../../Components/Footer/Footer";
import styles from "./Home.module.css";
import data from "../../data.json";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <nav>
        <a href="http://mulearn.org">
          <img src="/assets/μlearn-new-logo.svg" alt="" class={styles.mulearn_img} />
        </a>

        <a
          href="https://app.mulearn.org/register"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <button class={styles.joindiscord}>Join µLearn</button>
        </a>
      </nav>
      <div className={styles.main_view_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Bring <span>Every Business</span> Online.
              </p>
              <p className={styles.quote}>
                "Together let’s bring 1 Lakh business online"
              </p>
              <p className={styles.fv_tagline}>
                Awesome aka Bring Every Business Online is an Open Source
                Initiative to make an open source collection of web-pages for
                every business out there. To contribute to the project, all you
                have to do is build a website for a store or business.
              </p>
              <div className={styles.event_partners}>
                <div className={styles.partners}>
                  <p className={styles.event_partners_heading}>Supported By:</p>

                  <img
                    src="assets/supporter.jpg"
                    alt=""
                    className={styles.partner_image}
                  />
                  <img
                    src="assets/pygrammers.png"
                    alt=""
                    className={styles.partner_image}
                  />
                </div>
              </div>
              <a
                href="https://github.com/gtech-mulearn/bring-every-business-online"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class={styles.start_contributing}>
                  Start Contributing
                </button>
              </a>
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
              Join us as we create an open source collection of Web pages for
              every business out there.
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
                business nearby.
              </p>
            </div>
            <div className={styles.steps_container}>
              <div className={styles.step}>
                <p className={styles.step_heading}>Step 1</p>
                <p className={styles.step_text}>
                  For starting out on this project, you will collect all the
                  relevant information which are required for building a website
                  for a business. such as images, location, working hours,
                  contact details etc..
                </p>
              </div>
              <div className={styles.step}>
                <p className={styles.step_heading}>Step 2</p>
                <p className={styles.step_text}>
                  Using the information you have just collected create a simple
                  website using HTML, CSS and host them via Github Pages.
                </p>
              </div>
              <div className={styles.step}>
                <p className={styles.step_heading}>Step 3</p>
                <p className={styles.step_text}>
                  Once you have completed making the website and hosted it, you
                  can create a pull request adding your website information in
                  the JSON File along with hosted link.
                </p>
              </div>
              <div className={styles.step}>
                <p className={styles.step_heading}>Step 4</p>
                <p className={styles.step_text}>
                  Soon, our team will be quality checking the pull request and
                  merging it with the parent repository, which ensures and
                  completes your participation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.third_view_container}>
          <div className={styles.third_view}>
            <div className={styles.tv_texts}>
              <p className={styles.tvheader}>
                Minimum <span>Requirements</span>
              </p>
              <p className={styles.tvtagline}>
                Please make sure that you upload the shop's consent letter in
                the PR comments. It could even be a screenshot of a consent mail
                from the store.Please try to include as much info as you can
                collect about the shop on the website you are building.
              </p>
            </div>

            <div className={styles.tvpoints}>
              <ol>
                <li className={styles.listitem}>
                  The webpage should have images of the business
                </li>
                <li className={styles.listitem}>
                  Basic Details such as location, working hours etc.. should be
                  present.
                </li>
                <li className={styles.listitem}>
                  Contact Details of the business should be added.
                </li>
                <li className={styles.listitem}>
                  Disclaimer - No limits on creativity. Feel free to exhibit
                  your creative brilliance
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className={styles.fourth_view_container}>
          <div className={styles.fourth_view}>
            <div className={styles.frv_texts}>
              <p className={styles.frv_heading}>
                <span>We’ve got</span> your back !
              </p>
              <p className={styles.frv_text}>
                In case you have any queries, you can always reach out to our
                mentors on our Discord server. We’ve also set up Office hours to
                help you clear all your doubts. If you’re new to Web Development
                and Git, fear not coz we’ve set up some sessions to help you get
                started.
              </p>
            </div>
            <div className={styles.sv_points}>
              <div className={styles.sv_point}>
                <p className={styles.sv_image}>⌛</p>
                <div className={styles.svp_heading}>Office Hours</div>
                <div className={styles.svp_text}>
                  There will Office Hours hosted by our mentors regularly to
                  help you clear all your doubts and queries regarding the
                  event.
                </div>
              </div>
              <div className={styles.sv_point}>
                <p className={styles.sv_image}>🖥</p>
                <div className={styles.svp_heading}>Learning Session</div>
                <div className={styles.svp_text}>
                  Various learning bootcamps will be conducted during the span
                  of this event to help you all get started with Web Development
                  and how you can make a beautiful website.
                </div>
              </div>

              <div className={styles.sv_point}>
                <p className={styles.sv_image}>💯</p>
                <div className={styles.svp_heading}>Karma Points</div>
                <div className={styles.svp_text}>
                  For each successful submission, gain Karma points.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fifth_view_container}>
          <div className={styles.fifth_view}>
            <div className={styles.ffv_texts}>
              <p className={styles.ffv_heading}>
                <span>The Businesses</span> Online
              </p>
              <p className={styles.ffv_text}>
                Listed below are the websites which were built by the students
                from across the state. Start building now to get yours listed.
              </p>
            </div>
          </div>
          <div className={styles.ffv_cards_container}>
            <div className={styles.ffv_cards}>
              {data &&
                data.reverse().map((store, key) => (
                  <div className={styles.ffv_card}>
                    <div className={styles.header}>
                      <img
                        src={store.storeImage}
                        alt=""
                        className={styles.ffvc_image}
                      />
                      <p className={styles.ffvc_heading}>{store.storeName}</p>
                      <p className={styles.ffvc_description}>
                        {store.storeDescription}
                      </p>
                      <a
                        href={`https://github.com/${store.githubUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className={styles.ffvc_builtby}>
                          Built By: {store.githubUsername}
                        </p>
                      </a>
                      <p className={styles.ffvc_builtby}>
                        Store Type: {store.storeType}
                      </p>
                    </div>
                    <div className={styles.buttons}>
                      <a
                        href={store.hostedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className={styles.ffvc_button}>
                          View Website
                        </button>
                      </a>
                      <a
                        href={store.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className={styles.ffvc_button}>
                          View Github
                        </button>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
