import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

const PageLoader = ({visible}) => (
    <div className="page-loader" style={visible ? {} : {visibility: "hidden"}}>
        <LinearProgress/>
    </div>
);

export default PageLoader;