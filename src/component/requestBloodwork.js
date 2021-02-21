import { Button, TextField } from '@material-ui/core';
import React, {Component, Fragment} from 'react';
import { withStyles  } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { requestBloodwork } from '../helpers/firestore-helpers/database';

const styles  = (theme) => ({
    button: {
        color: 'white',
        backgroundColor: '#2C6D6A',
    
        '&:hover': {
            color: 'black'
        },
    }
  });

class RequestBloodwork extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // Function to handle submission of the form
    handleSubmit = (event) => {
        requestBloodwork(event.target.nhs_id.value);
        event.preventDefault();
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
                        Request Bloodwork
                    </Button>
                </form>

            </Fragment>
        )
    }
}

RequestBloodwork.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(RequestBloodwork)