import React from "react";
import TopBar from "./layout/TopBar";
import BottomBar from "./layout/BottomBar";
import PageLoader from "./layout/PageLoader";


class Layout extends React.Component {

    state = {
        loading: true
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false});
        }, 750)
    }

    render() {

        const {children, headerTitle, currentLang, onCancel, canGoNext, onNext} = this.props;
        const {loading} = this.state;

        return (
            <React.Fragment>
                <TopBar headerTitle={headerTitle} currentLang={currentLang}/>
                <PageLoader visible={loading}/>
                {children}
                <BottomBar onCancel={onCancel} onNext={onNext} canGoNext={loading ? false : canGoNext}/>
            </React.Fragment>
        )
    }
}

export default Layout;