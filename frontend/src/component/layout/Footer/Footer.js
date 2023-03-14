import React from "react";

import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer id="footer">
            <div class="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="appStore" />
            </div>
            
            <div class="midFooter">
                <h1>ECOMMERCE</h1>
                <p>High Quality is our first priority</p>
                <p>Copyrights 2021 &copy; MeAdilAnsari</p>
            </div>
            <div class="rightFooter">
                <h4>Follow Us</h4>
                <a href="https://www.linkedin.com/in/adil-ansari-0482b51aa/">LinkedIn</a>
                <a href="https://www.facebook.com/profile.php?id=100021625204495">FAcebook</a>
                <a href="https://www.instagram.com/ansari.adil2015/">Instagram</a>
            </div>
        </footer>
    )
}

export default Footer;