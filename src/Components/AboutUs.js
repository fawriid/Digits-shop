import React, { Component } from "react";
import styles from "./AboutUs.module.css";

import AboutUsBanner from "../images/digits.jpg";

class AboutUs extends Component {
    render() {
        return (
            <div className={styles.bgc}>
                <div className={styles.container}>
                    <img
                        className={styles.digits__pic}
                        alt="background"
                        src={AboutUsBanner}
                    ></img>
                    <div className={styles.context}>
                        <div className={styles.QA}>
                            <h1>Who Are We ?</h1>
                            <p>we are a selling compony which sails high tech products</p>
                        </div>
                        <div className={styles.QA}>
                            <h1>Where Are We ?</h1>
                            <p>
                                we have many facilties around the world, main facility is
                                in Us
                            </p>
                        </div>
                        <div className={styles.QA}>
                            <h1>How To Order ?</h1>
                            <p>
                                you can order at our Representations, you can order your
                                product on Digits.com, we are also in amazon.com
                            </p>
                        </div>
                        <div className={styles.QA}>
                            <h1>How You Can Get Your Product ?</h1>
                            <p>
                                you can get your product again at one of our
                                Representation, or we will send it to you{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;
