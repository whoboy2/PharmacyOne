import React, {Component} from 'react';
const { bloodworkSchedule }
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
    //var day = date.getDay();
    var nextMonday = new Date();
    if(date.getDay() === 0){
        nextMonday.setDate(date.getDate() + 14);
    }
    else {
        nextMonday.setDate(date.getDate() + 14);
    }
    return nextMonday;
}

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

class bloodworkScheduleTable extends Component {
    componentDidMount() {
        var schedule = "";
        // Currently limiting the number of patients returned to 20.
        var monday = getLastMonday();
        var nextMon = getNextMonday();

        let n=0;
        bloodworkSchedule
          .limit(20)
          .orderBy("bloodworkDue")
          .get()
          .then(data => {
            data.forEach((doc) => {
              var date = new Date(doc.data().bloodworkDue * 1000);
              date = formatDate(date, 'mmddyyy');
              date = new Date(date);
              // console.log(date, monday, nextMon)
              
              if ( ( (date.getTime() > monday.getTime()) && (date.getTime() < nextMon.getTime()) && (doc.data().completed === false))
                || 
              ( (date.getTime() < monday.getTime()) && (doc.data().completed === false))) {

                n+=1;
                schedule += "<tr>" 
                + "<td>" + doc.data().NHS_ID +"</td>"
                + "<td>" + doc.data().patientName +"</td>"
                + "<td>" + doc.data().medication +"</td>"
                + "<td>" + doc.data().testType +"</td>"
                + "<td>" + formatDate(date, 'ddmmyyy') +"</td>"
                + "<td>" + doc.data().completed +"</td>"
      
                + "</tr>"
              }
            })
            document.getElementById('bloodwork-schedule').innerHTML += schedule;
            document.getElementById('bloodwork-button').innerHTML = n ;
        });
    }

    render() {
        return (
        <div>
          <h2>Patients needing bloodwork</h2>
          <table className="table" id="bloodwork-schedule">
            <tbody>
              <tr>
                <th>NHS ID</th>
                <th>Name</th>
                <th>Medication</th>
                <th>Type of Blood Test</th>
                <th>Bloodwork Expiry</th>
                <th>Completed?</th>
              </tr>
            </tbody>
          </table>
        </div>  
        )
    }
}

export default bloodworkScheduleTable