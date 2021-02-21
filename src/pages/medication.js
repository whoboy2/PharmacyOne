import React, {Component} from 'react';
import CollectPrescription from '../component/CollectPrescription';
import MedicationDetails from '../component/medicationDetails';
import MedicationStatusButton from '../component/medicationStatusButton';
import PrescriptionTable from '../component/prescriptionTable';
import Sidebar from '../component/Sidebar';

class Medication extends Component {
  render() {
    return (
      <main>
        <Sidebar/>
        <div className="screen">
          <h1 className="page-title">Medication</h1>
          <MedicationStatusButton/>
          <br/>
          <CollectPrescription/>
          <br/>
          <PrescriptionTable/>          
          <br/><br/>
          <MedicationDetails/>
          <br/>
        </div>
      </main>
    )
  }
}
export default Medication