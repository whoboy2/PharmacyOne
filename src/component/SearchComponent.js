import React, {Component} from 'react';
import Sidebar from './Sidebar';
const { allPatients }
= require("../helpers/firestore-helpers/database");
const {formatDate} = require("../component/prescriptionTable");

class SearchComponent extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        let html="<tbody>"
        const patientInfo = allPatients.where("NHS_ID", "==", id);

        patientInfo
        .limit(1)
        .get()
        .then(data => {
            let docRef;
            
            data.forEach((doc) => {
                docRef = doc.id;

                var dob = new Date(doc.data().DOB * 1000);
                dob = formatDate(dob, 'mmddyyyy');
                var bwExpiry = new Date(doc.data().bloodworkExpiry * 1000);
                bwExpiry = formatDate(bwExpiry);

                html +=
                    "<tr><td>" + doc.data().name + "</td></tr>"
                    +"<tr><td>" + doc.data().NHS_ID + "</td></tr>"
                    +"<tr><td>" + dob + "</td></tr>"
                    +"<tr><td>" + doc.data().bloodworkType + "</td></tr>"
                    +"<tr><td>" + doc.data().bloodworkValid + "</td></tr>"
                    +"<tr><td>" + bwExpiry + "</td></tr>"
                    +"<tr><td>" + doc.data().mobile +"</td></tr>"
                    +"<tr><td>" + doc.data().address +"</td></tr>"
                    +"<tr><td>" + doc.data().email +"</td></tr>"
                    +"<tr><td>" + doc.data().nextOfKin +"</td></tr>"
            })
            html += "</tbody>"
            if (docRef == null) {
                document.getElementById('not-found-div').innerHTML += "<h3>Patient not found</h3>";
            }
            else {
                document.getElementById('patient-details-table').innerHTML += html;
            }

        })
    }

    render(){
        return (
            <main>
                <Sidebar/>
                <div className="screen">
                    <h1 className="page-title">Patients</h1>
                    <div id="not-found-div">
                    </div>
                    <table className="table" id="patient-details-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                            <tr>
                                <th>NHS ID</th>
                            </tr>
                            <tr>
                                <th>Date of Birth</th>
                            </tr>
                            <tr>
                                <th>Bloodwork Type</th>
                            </tr>
                            <tr>
                                <th>Valid Bloodwork?</th>
                            </tr>
                            <tr>
                                <th>Bloodwork Expiry</th>
                            </tr>
                            <tr>
                                <th>Mobile</th>
                            </tr>
                            <tr>
                                <th>Address</th>
                            </tr>
                            <tr>
                                <th>Email</th>
                            </tr>
                            <tr>
                                <th>Next of Kin</th>
                            </tr>
                        </thead>
                        
                    </table>
                </div>
            </main>
        )
    }
}

export default SearchComponent;