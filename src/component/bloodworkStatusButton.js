import React, {Component} from 'react';

class BloodworkStatusButton extends Component {
    render() {
        return (
            <div className="status">
            <p className="status-text">Blood work schedule</p>
            <p className="status-number" id="bloodwork-button">0</p>
            </div>
        )
    }
}

export default BloodworkStatusButton