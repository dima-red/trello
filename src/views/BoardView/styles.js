import { primary, secondary, ternary } from '../../constants/color.constants';

const styles = {
    app: {
        "background-color": primary,
        color: secondary,
        "font-size": "20px",
    },
    viewWrapper: {
        border: `2px solid ${ternary}`,
        "border-radius": "5px",
        margin: "0 auto",
        height: "100vh",
        "box-sizing": "border-box"
    },
    scrollable: {
        height: "calc(100vh - 70px)",
        "margin-top": "68px",
        "overflow-y": "auto",
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
