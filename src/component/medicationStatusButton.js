import React, {Component} from 'react';

class MedicationStatusButton extends Component {
    render() {
        return (
            <div className="status">
                <p className="status-text">Medication Pickup</p>
                <p className="status-number" id="medication-button">0</p>
            </div>
        )
    }
}

export default MedicationStatusButton