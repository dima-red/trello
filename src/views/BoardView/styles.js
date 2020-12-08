import { primary, secondary, ternary, white} from '../../constants/style.constants';

const styles = {
    app: {
        "background-color": primary,
        // color: "white",
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
    boardContent: {
        display: "flex",
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
};

export default styles;
