import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from "@material-ui/core/es/colors/grey";

export const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: grey
    },
    typography: {
        useNextVariants: true
    }
});