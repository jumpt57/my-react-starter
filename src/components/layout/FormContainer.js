import {Typography} from "@material-ui/core";
import React from "react";

const FormContainer = ({children, classes, title, width}) => (
    <div className="page-container">
        <div style={{width: width}}>
            <div className="page-description">
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
            </div>
            {children}
        </div>
    </div>
);

export default FormContainer;