import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {theme} from "./components/layout/theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import i18n from "./i18n";
import {I18nextProvider} from "react-i18next";
import {MuiPickersUtilsProvider} from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <App/>
            </MuiPickersUtilsProvider>
        </I18nextProvider>
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
