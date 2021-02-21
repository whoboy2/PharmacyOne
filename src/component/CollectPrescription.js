import { Button, TextField } from '@material-ui/core';
import React, {Component, Fragment} from 'react';
import { collectMeds } from '../helpers/firestore-helpers/database';
import { withStyles  } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles  = (theme) => ({
    button: {
        color: 'white',
        backgroundColor: '#2C6D6A',
    
        '&:hover': {
            color: 'black'
        },
    },    
  });

class CollectPrescription extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // Function to handle submission of the form
    handleSubmit = (event) => {
        event.preventDefault();
        collectMeds(event.target.pres_id.value);
    }
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                        id="pres_id"
                        label="Prescription ID"
                        name="pres_id"
                        autoFocus />
                    <Button
                        className={classes.button}
                        id="submit-button"
                        type="submit"
                        variant="contained">
                        Mark Collected
                    </Button>
                </form>

            </Fragment>
        )
    }
}

CollectPrescription.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CollectPrescription)