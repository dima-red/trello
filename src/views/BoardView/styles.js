import { primary, secondary, ternary, white} from '../../constants/style.constants';

const styles = {
    app: {
        "background-color": primary,
        color: secondary,
        "font-size": "20px",
    },
    appContainer: {
        border: "2px solid white",
        "border-radius": "5px",
        margin: "0 auto",
        height: "100vh",
        "box-sizing": "border-box"
    },
    mainContainer: {
        height: "calc(100vh - 70px)",
        "margin-top": "68px",
        "overflow-y": "auto",
    },
    boardContent: {
        display: "flex",
        "flex-wrap": "wrap",
    },
    appHeader: {
        display: "flex",
        "justify-content": "space-between",
        "border-bottom": "2px solid white",
        position: "fixed",
        "width": "100%",
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
};

export default styles;
