import React, { Fragment } from 'react'
import Sidebar from '../component/Sidebar'
import PatientForm from '../component/patientForm'


class patientDetails extends React.Component {
    render() {
      return (
        <Fragment>
            <Sidebar/>
            <div className="screen">
                 <h1>Patient Details</h1>
                <br></br>
                <PatientForm/>
            </div>    
        </Fragment>
      )
    }
  }
  export default patientDetails