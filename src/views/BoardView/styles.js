import {
    primary,
    secondary,
    ternary,
    specialBackground,
    specialBackgroundHover,
} from '../../constants/color.constants';

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
        "overflow-x": "auto",
    },
    headerBtn: {
        margin: "10px 10px",
    },
    addBtn: {
        "font-size": "25px",
        padding: "5px 14px",
        "color": secondary,
        "border-radius": "5px",
        "background-color": specialBackground,
        "&:hover": {
            "background-color": specialBackgroundHover,
        },
    },
};

export default styles;
