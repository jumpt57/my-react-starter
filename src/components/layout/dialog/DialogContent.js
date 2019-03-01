import {withStyles} from "@material-ui/core";
import MuiDialogContent from "@material-ui/core/DialogContent/DialogContent";

const DialogContent = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
}))(MuiDialogContent);

export default DialogContent;