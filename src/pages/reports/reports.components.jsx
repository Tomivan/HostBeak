import React from "react";
import Stroke from "../../assets/images/stroke.png";
import Sidenav from "../../components/sidenav/sidenav.component";
import Topnav from "../../components/topnav/topnav.component";
import "./reports.styles.css";

const Reports = () => {
    return(
        <div className="reports">
            <Topnav />
            <div className="reports-section">
                <Sidenav />
                <div className="report-details">
                    <h2>View Reports</h2>
                    <div className="report">
                        <div className="report-left">
                            <input type="checkbox" />
                            <p>February Report</p>
                            <p>4th, October 2021 11:20am</p>
                        </div>
                        <div className="report-right">
                            <button className="view">View</button>
                            <img src={Stroke} alt="" />
                        </div>
                    </div>
                    <div className="report">
                        <div className="report-left">
                            <input type="checkbox" />
                            <p>March 2021 Report</p>
                            <p>4th, October 2021 11:20am</p>
                        </div>
                        <div className="report-right">
                            <button className="view">View</button>
                            <img src={Stroke} alt="" />
                        </div>
                    </div>
                    <div className="report">
                        <div className="report-left">
                            <input type="checkbox" />
                            <p>March 2021 Report</p>
                            <p>4th, October 2021 11:20am</p>
                        </div>
                        <div className="report-right">
                            <button className="view">View</button>
                            <img src={Stroke} alt="" />
                        </div>
                    </div>
                    <div className="report">
                        <div className="report-left">
                            <input type="checkbox" />
                            <p>March 2021 Report</p>
                            <p>4th, October 2021 11:20am</p>
                        </div>
                        <div className="report-right">
                            <button className="view">View</button>
                            <img src={Stroke} alt="" />
                        </div>
                    </div>
                    <div className="report">
                        <div className="report-left">
                            <input type="checkbox" />
                            <p>March 2021 Report</p>
                            <p>4th, October 2021 11:20am</p>
                        </div>
                        <div className="report-right">
                            <button className="view">View</button>
                            <img src={Stroke} alt="" />
                        </div>
                    </div>
                    <div className="report">
                        <div className="report-left">
                            <input type="checkbox" />
                            <p>March 2021 Report</p>
                            <p>4th, October 2021 11:20am</p>
                        </div>
                        <div className="report-right">
                            <button className="view">View</button>
                            <img src={Stroke} alt="" />
                        </div>
                    </div>
                    <div className="report">
                        <div className="report-left">
                            <input type="checkbox" />
                            <p>March 2021 Report</p>
                            <p>4th, October 2021 11:20am</p>
                        </div>
                        <div className="report-right">
                            <button className="view">View</button>
                            <img src={Stroke} alt="" />
                        </div>
                    </div>
                    <div className="report">
                        <div className="report-left">
                            <input type="checkbox" />
                            <p>March 2021 Report</p>
                            <p>4th, October 2021 11:20am</p>
                        </div>
                        <div className="report-right">
                            <button className="view">View</button>
                            <img src={Stroke} alt="" />
                        </div>
                    </div>
                    <div className="report">
                        <div className="report-left">
                            <input type="checkbox" />
                            <p>March Report</p>
                            <p>4th, October 2021 11:20am</p>
                        </div>
                        <div className="report-right">
                            <button className="view">View</button>
                            <img src={Stroke} alt="" />
                        </div>
                    </div>
                    <div className="report">
                        <div className="report-left">
                            <input type="checkbox" />
                            <p>February Report</p>
                            <p>4th, October 2021 11:20am</p>
                        </div>
                        <div className="report-right">
                            <button className="view">View</button>
                            <img src={Stroke} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports;