import React from 'react'
import BloodworkScheduleTable from '../component/bloodworkScheduleTable'
import BloodworkStatusButton from '../component/bloodworkStatusButton'
import MedicationStatusButton from '../component/medicationStatusButton'
import PrescriptionTable from '../component/prescriptionTable'
import Sidebar from '../component/Sidebar'

class Homepage extends React.Component {
  render() {
    return (
      <main>
        <Sidebar/>
        <div className="screen">
        <h1 className="page-title">Homepage</h1>

          <div className="status-buttons">
            <BloodworkStatusButton/>
            <MedicationStatusButton/>
          </div>
          <br/>
          <PrescriptionTable/>
          <br/><br/>
          <BloodworkScheduleTable/>
        </div>
      </main>
      
    )
  }
}
export default Homepage
