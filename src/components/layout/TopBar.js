import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Image from "./Image";
import Header from "./Header";
import {LANGUAGES} from "../../consts/languages";

const styles = {
    root: {
        flexGrow: 1,
    }
};

function TopBar({classes, headerTitle, currentLang}) {

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar className="toolbar">

                    <Image className="brand-logo"
                           name="Revevol Group"
                           src="images/brand.png"/>

                    <Header header={headerTitle}/>

                    <Image className="lang-flag"
                           name="Current lang"
                           src={LANGUAGES[currentLang].flag}/>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(TopBar);