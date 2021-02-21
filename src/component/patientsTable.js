import React, {Component} from 'react';
const { allPatients }
  = require("../helpers/firestore-helpers/database");

class PatientTable extends Component {
    componentDidMount() {
        var html = "";
        allPatients
        .limit(20)
        .orderBy("name")
        .get()
        .then(data => {
          data.forEach((doc) => {
            html += "<tr>" 
            + "<td>" + doc.data().NHS_ID +"</td>"
            + "<td>" + doc.data().name +"</td>"
            + "<td>" + doc.data().email +"</td>"
            + "<td>" + doc.data().mobile +"</td>"
            + "<td>" + doc.data().bloodworkValid +"</td>"
            + "</tr>"
          })
          document.getElementById('patients-table').innerHTML += html;
      });
    }

    render() {
        return (
        <div>
            <table className="table" id="patients-table">
                <tbody>
                    <tr>
                        <th>NHS ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Bloodwork Valid?</th>
                    </tr>
                </tbody>
            </table>
        </div> 
        )
    }
}

export default PatientTable