import { primary, secondary, ternary} from '../../constants/style.constants';

const styles = {
    app: {
        "background-color": primary,
        color: secondary,
        "font-size": "20px",
    },
    appContainer: {
        border: `2px solid ${ternary}`,
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
        "border-bottom": `2px solid ${ternary}`,
        position: "fixed",
        "width": "100%",
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
    },
    headerLeft: {},
};

export default styles;
