import React from "react";
import { Router } from '@reach/router';
import Signup from "./signup/signup.component";
import Bills from "./bills/bills.component";
import Reports from "./reports/reports.components";
import Login from "./login/login.component";

const Pages = () => {
    return(
        <Router>
            <Signup exact path="/" />
            <Login path="/login" />
            <Bills path="/bills" />
            <Reports path="/reports" />
        </Router>
    )
}

export default Pages;