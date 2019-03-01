import {withStyles} from "@material-ui/core";
import MuiDialogActions from "@material-ui/core/DialogActions/DialogActions";

const DialogActions = withStyles(theme => ({
    root: {
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit,
    },
}))(MuiDialogActions);