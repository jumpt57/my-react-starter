import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavButton from "./NavButton";

const styles = theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});


function BottomBar({classes, onCancel, onNext, canGoNext}) {
    return (
        <React.Fragment>
            <AppBar position="fixed" color="default" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <NavButton icon="cancel" label="Cancel" onClick={onCancel}/>
                    {canGoNext && <NavButton icon="navigate_next" label="Next" onClick={onNext}/>}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default withStyles(styles)(BottomBar);
