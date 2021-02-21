import React, {Component} from 'react';
const { medications }
  = require("../helpers/firestore-helpers/database");

class MedicationDetails extends Component {
    componentDidMount() {
        var details = "";
        medications
        .limit(20)
        .orderBy("medicationID")
        .get()
        .then(data => {
            data.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            details += "<tr>" 
            + "<td>" + doc.data().medicationID +"</td>"
            + "<td>" + doc.data().name +"</td>"
            + "<td>" + doc.data().bloodworkLevel +"</td>"
            + "</tr>"
            })
            document.getElementById('medication-table').innerHTML += details;
        });
    }

    render() {
        return (
            <div>
                <h2>Medication details</h2>
                <table className="table" id="medication-table">
                    <tbody>
                        <tr>
                            <th>Medication ID</th>
                            <th>Medication Name</th>
                            <th>Bloodwork Level</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MedicationDetails