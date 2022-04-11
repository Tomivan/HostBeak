import React from "react";
import { Router } from '@reach/router';
import Signin from "./signup/signup.component";
import Bills from "./bills/bills.component";
import Reports from "./reports/reports.components";

const Pages = () => {
    return(
        <Router>
            <Signin exact path="/" />
            <Bills path="/bills" />
            <Reports path="/reports" />
        </Router>
    )
}

export default Pages;