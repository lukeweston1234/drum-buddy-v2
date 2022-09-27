import React from "react";
import "../styles/Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h3>Privacy Policy</h3>
      <text className="policy">
        Drumbuddy.io uses tracking cookies and tokens in order to provide a
        consistent experience for our users. We use the Google 0Auth2 API, which
        gives us information including your Google email, profile, as well as
        time sensitive data like when you access our page. We will likely send
        emails to users in the future, documenting new features and any future
        policy changes. This site currently is not monetized, and outside of
        Google Analytics, we are not using your data with any third parties for
        profit. By creating an account with us, you consent to us using your
        personal data for the above purposes. You can email the site creator at
        lukeweston1234@gmail.com if you wish to have your account removed.
      </text>
    </div>
  );
};

export { Privacy };
