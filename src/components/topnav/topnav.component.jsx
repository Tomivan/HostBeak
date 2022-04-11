import React from "react";
import Logo from "../../assets/images/logo.png";
import Notification from "../../assets/images/notification.png";
import "./topnav.styles.css";

const Topnav = () => {
    return(
        <div className="topnav">
            <img src={Logo} alt="The official logo of HostBeak" className="logo" />
            <div className="topnav-right">
                <img src={Notification} alt="A symbol for notification"  className="notification"/>
                <div class="blue">
                    <p>#</p>
                </div>
                <p>Ogoluwa</p>
            </div>
        </div>
    )
}

export default Topnav;