import React, {Component} from 'react';
const { bloodworkDetails }
  = require("../helpers/firestore-helpers/database");

class bloodworkDetailsTable extends Component {
    componentDidMount() {
        var details="";
        bloodworkDetails
        // .limit(20)
        .orderBy("bloodWorkID")
        .get()
        .then(data => {
            data.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            details += "<tr>" 
            + "<td>" + doc.data().bloodWorkID +"</td>"
            + "<td>" + doc.data().bloodWorkCode +"</td>"
            + "<td>" + doc.data().bloodWorkName +"</td>"
            + "</tr>"
            })
            document.getElementById('bloodwork-details').innerHTML += details;
        });
    }

    render() {
        return (
            <div className="bloodwork-detail-content">
                <h2>Blood Work Details</h2>
                <table className="table" id="bloodwork-details">
                    <tbody>
                        <tr>
                            <th>Blood Work ID</th>
                            <th>Blood Work Code</th>
                            <th>Blood Work Name</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default bloodworkDetailsTable