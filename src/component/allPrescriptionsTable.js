import React, {Component} from 'react';
const { prescriptionSchedule }
  = require("../helpers/firestore-helpers/database");

  function formatDate(date, format) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        if (year > 2050) year -= 1969;
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    if (format === 'mmddyyy') return [month, day, year].join('/');
    else return [day, month, year].join('/');
  }

class AllPrescriptionTable extends Component {
    componentDidMount() {
        var schedule = "";
        
        prescriptionSchedule
          .orderBy("patientName")
          .get()
          .then(data => {
            data.forEach((doc) => {
              var date = new Date(doc.data().collectionDate * 1000);
              schedule += "<tr>" 
              + "<td>" + doc.data().prescriptionId +"</td>"
              + "<td>" + doc.data().patientName +"</td>"
              + "<td>" + doc.data().NHS_ID +"</td>"
              + "<td>" + doc.data().medication +"</td>"
              + "<td>" + formatDate(date, 'ddmmyyy') +"</td>"
              + "</tr>"
            })
            document.getElementById('prescription-table').innerHTML += schedule;
        });
    }

    render() {
        return (
        <div>
          <h2>All prescriptions</h2>
          
          <table className="table" id="prescription-table">
            <tbody>
              <tr>
                <th>Prescription No.</th>
                <th>Name</th>
                <th>NHS ID</th>
                <th>Medication</th>
                <th>Date</th>
              </tr>
            </tbody>
          </table>
        </div>  
        )
    }
}

export default AllPrescriptionTable