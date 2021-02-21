import React, {Component} from 'react';
import PatientTable from '../component/patientsTable';
import PatientSearch from '../component/patientSearch';
import Sidebar from '../component/Sidebar';

class Patient extends Component {
  render() {
    return (
      <main>
        <Sidebar/>
        <div className="screen">
          <h1 className="page-title">Patients</h1>
          <br/>
          <PatientSearch/>
          <br></br>
          <PatientTable/>
        </div>
      </main>
    )
  }
}
export default Patient