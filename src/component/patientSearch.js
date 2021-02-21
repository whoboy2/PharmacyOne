import { Button, TextField } from '@material-ui/core';
import React, {Component, Fragment} from 'react';
import { withStyles  } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles  = (theme) => ({
    button: {
        color: 'white',
        backgroundColor: '#2C6D6A',
    
        '&:hover': {
            color: 'black'
        },
    }
  });

  class PatientSearch extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // Function to handle submission of the form
    handleSubmit = (event) => {
        event.preventDefault();
        window.history.pushState(null, null, `/patientSearch/${event.target.nhs_id.value}`);
        window.location.reload();
    }
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        className={classes.txt}
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                        id="nhs_id"
                        label="NHS ID"
                        name="nhs_id"
                        autoFocus />
                    <Button
                        className={classes.button}
                        id="submit-button"
                        type="submit"
                        variant="contained">
                        Search
                    </Button>
                </form>

            </Fragment>
        )
    }
}

//to do with styling
PatientSearch.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(PatientSearch)

/*class PatientTable extends Component { //state = {data: this.state.value}

    componentDidMount() {
        // database code goes here
        //let patient = allPatients.where("NHS_ID", "==", "nhs id from search") //this.state.value
        //.get()
    }

    constructor(props) {
        super(props);
        this.state = {
          value: 'NHS ID...'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        <patientForm dataFromParent = {this.state.value}></patientForm>
        window.open("patientDetails");
        alert('NHS ID: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        return (
        <div>
            
            <p>patient search</p>
            {/* html content goes here 
                <div class="search-container">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="search" value={this.state.value} onChange={this.handleChange} />
                        <button type="submit" >Submit</button>
                        <patientForm dataFromParent = {this.state.value}></patientForm>
                    </form>
                </div>
            }

            
        </div> 

        )
    }
}

export default PatientTable*/