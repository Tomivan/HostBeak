import React from "react";
import Dashboard from "../../assets/images/dashboard.png";
import Welcome from "../../assets/images/welcome.png";
import Sales from "../../assets/images/sales.png";
import Purchase from "../../assets/images/purchase.png";
import Accounting from "../../assets/images/accounting.png";
import Bank from "../../assets/images/bank.png";
import Payroll from "../../assets/images/payroll.png";
import Reports from "../../assets/images/reports.png";
import Analytics from "../../assets/images/analytics.png";
import Settings from "../../assets/images/settings.png";
import Logout from "../../assets/images/logout.png";
import Accept from "../../assets/images/accept.png";
import { Link } from "@reach/router"
import "./sidenav.styles.css";

const Sidenav = () => {
    return(
        <div class="sidenav">
            <nav className="nav flex-column">
                <ul>
                    <li className="nav-link"><img src={Welcome} alt="" className="nav-icon"/>Welcome</li>
                    <li className="nav-link"><img src={Dashboard} alt="" className="nav-icon"/>Dashboard</li>
                    <li className="nav-link"><img src={Sales} alt="" className="nav-icon"/>Sales</li>
                    <li className="nav-item dropdown">
                        <img src={Purchase} alt="" className="nav-icon purchase" />
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Purchases</Link>
                        <ul className="dropdown-menu">
                            <Link to="/bills" className="link"><li className="dropdown-item">Bills</li></Link>
                            <li className="dropdown-item">Vendors</li>
                            <li className="dropdown-item">Product &#38; services</li>
                        </ul>
                    </li>
                    <li className="nav-link"><img src={Accounting} alt="" className="nav-icon"/>Accounting</li>
                    <li className="nav-link"><img src={Bank} alt="" className="nav-icon"/>Banking</li>
                    <li className="nav-link"><img src={Payroll} alt="" className="nav-icon"/>Payroll</li>
                    <li className="nav-link"><img src={Reports} alt="" className="nav-icon"/>Reports</li>
                    <li className="nav-item dropdown">
                        <img src={Analytics} alt="" className="nav-icon" />
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Analytics</Link>
                        <ul className="dropdown-menu">
                            <Link to="/reports" className="link"><li className="dropdown-item">View Report</li></Link>
                            <li className="dropdown-item">To-Do</li>
                            <li className="dropdown-item">Upload Docs</li>
                            <li className="dropdown-item">Chat</li>
                            <li className="dropdown-item">Schedule</li>
                            <li className="dropdown-item">Message Board</li>
                            <li className="dropdown-item">Make Payments</li>
                            <li className="dropdown-item">Billing</li>
                        </ul>
                    </li>
                    <li className="nav-link"><img src={Settings} alt="" className="nav-icon"/>Settings</li>
                    <Link to="/" className="link"><li className="nav-link"><img src={Logout} alt="" className="nav-icon"/>Logout</li></Link>
                </ul>
                <hr />
                <button className="accept"><img src={Accept} alt="" className="accept-icon"/>Accept Payments</button>
            </nav>
        </div>
    )
}

export default Sidenav;