import React, {Component} from 'react';
import BloodworkStatusButton from '../component/bloodworkStatusButton';
import BloodworkScheduleTable from '../component/bloodworkScheduleTable';
import BloodworkDetailsTable from '../component/bloodworkDetailsTable';
import Sidebar from '../component/Sidebar';
import RequestBloodwork from '../component/requestBloodwork';

class Bloodwork extends Component {
  render() {
    return (
      <main>
        <Sidebar/>
        <div className="screen">
          <h1 className="page-title">Blood Work</h1>
          <BloodworkStatusButton/>
          <br/>
          <BloodworkScheduleTable/>
          <br/>
          <RequestBloodwork/>
          <br/><br/>

          
          <div className="bloodwork-request-content">
          {/* to do - request bloodwork functionality */}
          </div>
          
          
          <br/><br/>
          <BloodworkDetailsTable/>
        </div>
      </main>
    )
  }
}
export default Bloodwork