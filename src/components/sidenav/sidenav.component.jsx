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
import { SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem } from 'carbon-components-react/lib/components/UIShell';
import { Link } from "@reach/router"
import "./sidenav.styles.css";

const Sidenav = () => {
    return(
        <div isFixedNav expanded isChildOfHeader={false} aria-label="Side Navigation" class="sidenav">
            <SideNavItems>
                <SideNavLink><img src={Welcome} alt="" className="nav-icon"/>Welcome</SideNavLink>
                <SideNavLink><img src={Dashboard} alt="" className="nav-icon"/>Dashboard</SideNavLink>
                <SideNavLink><img src={Sales} alt="" className="nav-icon"/>Sales</SideNavLink>
                <SideNavMenu><img src={Purchase} alt="" className="nav-icon" />
                    <Link to="/bills"><SideNavMenuItem>Bills</SideNavMenuItem></Link>
                    <SideNavMenuItem>Vendors</SideNavMenuItem>
                    <SideNavMenuItem>Product &#38; services</SideNavMenuItem>
                </SideNavMenu>
                <SideNavLink><img src={Accounting} alt="" className="nav-icon"/>Accounting</SideNavLink>
                <SideNavLink><img src={Bank} alt="" className="nav-icon"/>Banking</SideNavLink>
                <SideNavLink><img src={Payroll} alt="" className="nav-icon"/>Payroll</SideNavLink>
                <SideNavLink><img src={Reports} alt="" className="nav-icon"/>Reports</SideNavLink>
                <SideNavMenu><img src={Analytics} alt="" className="nav-icon" />
                    <Link to="/reports"><SideNavMenuItem>View Report</SideNavMenuItem></Link>
                    <SideNavMenuItem>To-Do</SideNavMenuItem>
                    <SideNavMenuItem>Upload Docs</SideNavMenuItem>
                    <SideNavMenuItem>Chat</SideNavMenuItem>
                    <SideNavMenuItem>Schedule</SideNavMenuItem>
                    <SideNavMenuItem>Message Board</SideNavMenuItem>
                    <SideNavMenuItem>Make Payments</SideNavMenuItem>
                    <SideNavMenuItem>Billing</SideNavMenuItem>
                </SideNavMenu>
                <SideNavLink><img src={Settings} alt="" className="nav-icon"/>Settings</SideNavLink>
                <SideNavLink><img src={Logout} alt="" className="nav-icon"/>Logout</SideNavLink>
                <hr />
                <button className="accept"><img src={Accept} alt="" className="accept-icon"/>Accept Payments</button>
            </SideNavItems>
        </div>
    )
}

export default Sidenav;