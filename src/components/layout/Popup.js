import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import i18next from "i18next";
import DialogTitle from "./dialog/DialogTitle";
import DialogContent from "./dialog/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const Popup = ({handleClose, open, title, content}) => (
    <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {title}
        </DialogTitle>
        <DialogContent>
            <Typography gutterBottom>
                {content}
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                {i18next.t("actionClose")}
            </Button>
        </DialogActions>
    </Dialog>
);

export default Popup;