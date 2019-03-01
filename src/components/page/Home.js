import React, {Component} from "react";
import SplashScreen from "../layout/SplashScreen";
import {changeLanguage, DEFAULT_LANG} from "../../consts/languages";
import {HOME} from "../../consts/pages";

const INITIAL_STATE = {
    language: DEFAULT_LANG,
    page: HOME,
    driverId: undefined,
    operationId: undefined
};

export default class Home extends Component {

    state = INITIAL_STATE;

    handleLanguage = (language) => changeLanguage(language)
        .then(() => this.setState({language: language}));

    onNext = (page) => this.setState({page: page});

    onCancel = () => changeLanguage(DEFAULT_LANG).then(() => this.setState(INITIAL_STATE));

    render() {
        switch (this.state.page) {
            case HOME:
                return <SplashScreen onNext={() => console.log("next !")}/>;

            default:
                return <div>ERROR !</div>
        }
    }

}