import React from "react";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    }
});

const NavButton = ({classes, icon, label, onClick}) => (
    <Fab color="primary" aria-label={label} className={classes.fab} onClick={onClick}>
        <Icon>{icon}</Icon>
    </Fab>
);

export default withStyles(styles)(NavButton);