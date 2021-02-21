import React, {Component} from 'react';
const { prescriptionSchedule }
  = require("../helpers/firestore-helpers/database");

function getLastMonday() {
  var date = new Date();
    var day = date.getDay();
    var prevMonday = new Date();
    if(date.getDay() === 0){
        prevMonday.setDate(date.getDate() - 7);
    }
    else {
        prevMonday.setDate(date.getDate() - (day-1));
    }
    return prevMonday;
}

function getNextMonday() {
  var date = new Date();
    var nextMonday = new Date();
    if(date.getDay() === 0){
        nextMonday.setDate(date.getDate() + 7);
    }
    else {
        nextMonday.setDate(date.getDate() + 7);
    }
    return nextMonday;
}

export function formatDate(date, format) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
      if (year > 2050) year -= 1969;

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  if (format === 'mmddyyyy') return [month, day, year].join('/');
  else return [day, month, year].join('/');
}

class PrescriptionTable extends Component {
    componentDidMount() {
        var schedule = "";
        // within these bounds means in the next week.
        var monday = getLastMonday();
        var nextMon = getNextMonday();

        let n=0;
        prescriptionSchedule
        
          .orderBy("collectionDate")
          .get()
          .then(data => {
            data.forEach((doc) => {
              var date = new Date(doc.data().collectionDate * 1000);
              date = formatDate(date, 'mmddyyyy');
              date = new Date(date);

              // Display if the date is this week OR before this week AND uncollected.
              //console.log(date.getTime(), monday.getTime(), nextMon.getTime())
              if ( ( (date.getTime() > monday.getTime()) && (date.getTime() < nextMon.getTime()) && (doc.data().completed === false))
                || 
              ( (date.getTime() < monday.getTime()) && (doc.data().completed === false))) {

                n+=1;
                schedule += "<tr>" 
                + "<td>" + doc.data().prescriptionId +"</td>"
                + "<td>" + doc.data().patientName +"</td>"
                + "<td>" + doc.data().NHS_ID +"</td>"
                + "<td>" + doc.data().medication +"</td>"
                + "<td>" + formatDate(date, 'ddmmyyy') +"</td>"
                + "</tr>";
              }
            })
            document.getElementById('prescription-table').innerHTML += schedule;
            document.getElementById('medication-button').innerHTML = n ;
        });
    }

    render() {
        return (
        <div>
          <h2>Prescriptions for pickup</h2>
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

export default PrescriptionTable