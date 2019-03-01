import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import withStyles from "@material-ui/core/es/styles/withStyles";
import * as ReactDOM from "react-dom";

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        width: "100%"
    }
});

class SelectInput extends React.Component {

    state = {
        labelWidth: 0,
    };

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    render() {
        const {classes, onChange, children,  selected, label} = this.props;

        return (
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                    ref={ref => this.InputLabelRef = ref}
                    htmlFor="outlined-label-simple">
                    {label}
                </InputLabel>
                <Select
                    value={selected}
                    onChange={onChange}
                    input={
                        <OutlinedInput labelWidth={this.state.labelWidth}
                                       name="name"
                                       id="simple"/>
                    }>

                    {children}

                </Select>
            </FormControl>
        )
    }

}

export default withStyles(styles)(SelectInput);