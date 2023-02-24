import { createTheme } from "@mui/system";

const theme = createTheme({
    palette: {
        primary: {
            main: '#fbffc1'
        },
        secondary: {
            main: '	#f68787'
        }
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg'
            }
        }
    }
})
export default theme;