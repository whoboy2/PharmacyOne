import React, {Component} from 'react';
import AllPrescriptionTable from '../component/allPrescriptionsTable';
import Sidebar from '../component/Sidebar';

class Prescriptions extends Component {
  render() {
    return (
      <main>
        <Sidebar/>
        <div className="screen">
          <h1 className="page-title">Prescriptions</h1>
          <AllPrescriptionTable />
          <br/>
        </div>
      </main>
    )
  }
}
export default Prescriptions