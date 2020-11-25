import {createUseStyles} from 'react-jss'

export const styles = createUseStyles({
    app: {
        "background-color": "#282c34",
        // color: "white",
        color: "#61dafb",
        "font-size": "20px",
    },
    appContainer: {
        border: "2px solid white",
        "border-radius": "5px",
        margin: "0 auto",
        height: "100vh",
        "box-sizing": "border-box"
    },
    boardContent: {
        "max-width": "33%",
        // margin: "20px",
    },
    appHeader: {
        display: "flex",
        "justify-content": "space-between",
        "border-bottom": "2px solid white",
    },
    logoWrapper: {
        margin: "15px",
        "align-self": "center",
    },
    appLogo: {
        animation: "appLogoSpin infinite 20s linear"
    },

    headerBtn: {
        margin: "10px 10px"
    },
    addBtn: {
        "font-size": "30px",
        padding: "5px 14px"
    },


    headerRight: {
        display: "flex"
    }
});
