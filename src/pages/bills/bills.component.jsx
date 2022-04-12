import React from "react";
import Trash from "../../assets/images/trash.png";
import Edit from "../../assets/images/edit.png"
import "./bills.styles.css";
import Topnav from "../../components/topnav/topnav.component";
import Sidenav from "../../components/sidenav/sidenav.component";

const Bills = () => {
    return(
        <div className="bills">
            <Topnav />
            <div className="bill">
                <Sidenav />
                <div className="add-bill">
                    <h2>Add Bill</h2>
                    <div className="bill-top">
                        <div className="column">
                            <label>Vendor</label>
                            <select>
                                <options>Choose</options>
                            </select>
                            <label>Currency</label>
                            <select>
                                <options>USD - US Dollar</options>
                            </select>
                            <label>Upload Copy of Bill</label>
                            <input type="text" placeholder="Upload File"/>
                        </div>
                        <div className="column">
                            <label>Date</label>
                            <input type="date" />
                            <label>Currency</label>
                            <input type="date" />
                            <label>P.O / S.O</label>
                            <input type="text" />
                        </div>
                        <div className="column">
                            <label>Bill</label>
                            <input type="text" />
                            <label>Notes</label>
                        <textarea></textarea>
                        </div>
                    </div>
                    <div className="bill-bottom">
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Expense Category</th>
                                    <th>Description</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Tax</th>
                                    <th>Amount</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <select className="item">
                                            <option>Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select className="expense">
                                            <option>Choose</option>
                                        </select>
                                    </td>
                                    <td><input type="text" className="desciption"/></td>
                                    <td><input type="text" className="qty"/></td>
                                    <td><input type="text" className="price"/></td>
                                    <td className="tax"><input type="text" /><img src={Edit} alt="" className="edit"/></td>
                                    <td>N0.00</td>
                                    <td><img src={Trash} alt="" className="trash"/></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="buttons">
                            <button className="cancel">Cancel</button>
                            <button className="save">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bills;